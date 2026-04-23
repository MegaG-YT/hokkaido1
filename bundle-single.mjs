import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve("out");

if (!fs.existsSync(OUT_DIR)) {
  console.error(`bundle-single: ${OUT_DIR} not found. Run next build first.`);
  process.exit(1);
}

const scriptRe = /<script\b[^>]*\bsrc="(\/_next\/[^"]+\.js)"[^>]*><\/script>/g;
const cssLinkRe = /<link\b[^>]*\bhref="(\/_next\/[^"]+\.css)"[^>]*\/?>/g;
const preloadRe = /<link\b[^>]*\brel="preload"[^>]*\bhref="\/_next\/[^"]+"[^>]*\/?>/g;

const findHtmlFiles = (dir) => {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "_next" && entry.name !== "images") {
      out.push(...findHtmlFiles(p));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      out.push(p);
    }
  }
  return out;
};

const readAsset = (urlPath) => {
  const p = path.join(OUT_DIR, urlPath.replace(/^\//, ""));
  return fs.readFileSync(p, "utf8");
};

const bundleName = (htmlFile) => {
  const rel = path.relative(OUT_DIR, htmlFile);
  const base = rel.replace(/\.html$/, "").replace(/[/\\]/g, "-").replace(/[^a-z0-9-]/gi, "-");
  return base === "index" ? "bundle" : `bundle-${base}`;
};

const htmlFiles = findHtmlFiles(OUT_DIR);
let totalJs = 0;
let totalCss = 0;

for (const htmlPath of htmlFiles) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const name = bundleName(htmlPath);

  const scripts = [];
  const styles = [];
  let m;
  while ((m = scriptRe.exec(html)) !== null) {
    scripts.push({ tag: m[0], src: m[1], noModule: /\bnoModule\b/.test(m[0]) });
  }
  scriptRe.lastIndex = 0;
  while ((m = cssLinkRe.exec(html)) !== null) {
    styles.push({ tag: m[0], href: m[1] });
  }
  cssLinkRe.lastIndex = 0;

  if (scripts.length === 0 && styles.length === 0) continue;

  const jsChunks = scripts.filter((s) => !s.noModule);
  const mergedJs = jsChunks
    .map((s) => `/* === ${path.basename(s.src)} === */\n${readAsset(s.src)}`)
    .join("\n;\n");
  const mergedCss = styles
    .map((s) => `/* === ${path.basename(s.href)} === */\n${readAsset(s.href)}`)
    .join("\n");

  const jsOut = path.join(OUT_DIR, `${name}.js`);
  const cssOut = path.join(OUT_DIR, `${name}.css`);
  if (mergedJs) fs.writeFileSync(jsOut, mergedJs);
  if (mergedCss) fs.writeFileSync(cssOut, mergedCss);

  const htmlDir = path.dirname(htmlPath);
  const relJs = path.relative(htmlDir, jsOut).split(path.sep).join("/");
  const relCss = path.relative(htmlDir, cssOut).split(path.sep).join("/");

  html = html.replace(scriptRe, "");
  html = html.replace(cssLinkRe, "");
  html = html.replace(preloadRe, "");

  for (const s of styles) {
    const esc = s.href.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    html = html.replace(new RegExp(esc, "g"), `/${path.basename(cssOut)}`);
  }

  if (mergedCss) {
    html = html.replace("</head>", `<link rel="stylesheet" href="${relCss}"/></head>`);
  }
  if (mergedJs) {
    html = html.replace("</body>", `<script src="${relJs}"></script></body>`);
  }
  fs.writeFileSync(htmlPath, html);

  const jsKb = mergedJs ? (fs.statSync(jsOut).size / 1024).toFixed(1) : "0";
  const cssKb = mergedCss ? (fs.statSync(cssOut).size / 1024).toFixed(1) : "0";
  totalJs += jsChunks.length;
  totalCss += styles.length;
  console.log(`bundle-single: ${path.relative(OUT_DIR, htmlPath)} -> ${name}.js (${jsKb} KB), ${name}.css (${cssKb} KB)`);
}

const nextStaticDir = path.join(OUT_DIR, "_next", "static");
if (fs.existsSync(nextStaticDir)) {
  for (const entry of fs.readdirSync(nextStaticDir, { withFileTypes: true })) {
    if (entry.name === "media") continue;
    const p = path.join(nextStaticDir, entry.name);
    if (entry.isDirectory()) {
      fs.rmSync(p, { recursive: true, force: true });
    } else {
      fs.rmSync(p);
    }
  }
}

console.log(`bundle-single: done (${htmlFiles.length} HTML files, ${totalJs} JS chunks, ${totalCss} CSS files merged)`);
