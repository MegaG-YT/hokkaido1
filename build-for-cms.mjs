#!/usr/bin/env node
// Transform Next.js static export into セキスイハイム東北 CMS-compatible structure.
//
// CMS rules enforced here:
//   - HTML lives at /es/izumi/index.html
//   - Images live at /media/images/es/2026/izumi/ (no webp — png/jpg/svg only)
//   - CSS lives flat in /css/
//   - JS lives flat in /js/
//   - No filename may contain `.` except for the extension separator
//   - Only `_` used as special character — dashes and tildes are rewritten
//   - References use root-relative URLs (the CMS has baseURL set)

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname));
const OUT = path.join(ROOT, "out");
const DIST = path.join(ROOT, "out-cms");

if (!fs.existsSync(OUT)) {
  console.error("out/ does not exist — run `next build` first");
  process.exit(1);
}

// --- 1. Enumerate every file in out/

/** @param {string} dir */
function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const files = [...walk(OUT)].map((f) => path.relative(OUT, f));

// --- 2. Decide the new location + sanitized name for each file

/** @param {string} name */
function sanitize(name) {
  const ext = path.extname(name);
  const stem = ext ? name.slice(0, -ext.length) : name;
  const safeStem = stem
    .replace(/[^A-Za-z0-9_]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
  return `${safeStem || "file"}${ext}`;
}

/** oldRelPath -> newRelPath | null (null = delete) */
const rename = new Map();

for (const rel of files) {
  const parts = rel.split(path.sep);
  const base = parts.at(-1);

  // Drop Next.js build artifacts the client does not need
  if (
    base.endsWith(".txt") ||
    base.startsWith("__next.") ||
    base === "_not-found.html" ||
    base === "404.html" ||
    parts[0] === "_not-found" ||
    base === ".gitkeep" ||
    base === ".DS_Store"
  ) {
    rename.set(rel, null);
    continue;
  }

  if (rel === "index.html") {
    rename.set(rel, path.join("es", "izumi", "index.html"));
    continue;
  }

  if (rel === "favicon.ico") {
    rename.set(rel, rel);
    continue;
  }

  if (parts[0] === "images") {
    const ext = path.extname(base).toLowerCase();
    const stem = ext ? base.slice(0, -ext.length) : base;
    const safeStem = stem.replace(/-/g, "_").replace(/[^A-Za-z0-9_]+/g, "_");
    const newExt = ext === ".webp" ? ".png" : ext;
    const subdir = parts.slice(1, -1).map((p) => p.replace(/-/g, "_")).join("/");
    const target = subdir
      ? `media/images/es/2026/izumi/${subdir}/${safeStem}${newExt}`
      : `media/images/es/2026/izumi/${safeStem}${newExt}`;
    rename.set(rel, target);
    continue;
  }

  if (parts[0] === "_next" && parts[1] === "static" && parts[2] === "media") {
    rename.set(rel, null);
    continue;
  }

  if (parts[0] === "_next") {
    const ext = path.extname(base);
    const folder = ext === ".css" ? "css" : "js";
    const safe = sanitize(base);
    rename.set(rel, `${folder}/${safe}`);
    continue;
  }

  rename.set(rel, sanitize(base));
}

// Ensure new names are unique after sanitization
const usedTargets = new Map();
for (const [oldRel, newRel] of rename) {
  if (!newRel) continue;
  const count = usedTargets.get(newRel) ?? 0;
  if (count > 0) {
    const ext = path.extname(newRel);
    const stem = newRel.slice(0, -ext.length);
    const deduped = `${stem}_${count}${ext}`;
    rename.set(oldRel, deduped);
    usedTargets.set(deduped, 1);
  } else {
    usedTargets.set(newRel, 1);
  }
}

// --- 3. Build the reference-rewrite table
// Next.js emits root-relative URLs, so we only match the leading-slash
// form. Matching bare paths too would corrupt anything where the rel
// path also appears as a substring (Next.js favicon cache-bust query
// strings, for example).

const refMap = new Map();
for (const [oldRel, newRel] of rename) {
  if (!newRel) continue;
  const oldUrl = `/${oldRel.split(path.sep).join("/")}`;
  const newUrl = `/${newRel.split(path.sep).join("/")}`;
  if (oldUrl !== newUrl) refMap.set(oldUrl, newUrl);
}

const sortedRefs = [...refMap.entries()].sort((a, b) => b[0].length - a[0].length);

// --- 4. Move/convert/rename into a staging area

const STAGE = DIST;
fs.rmSync(STAGE, { recursive: true, force: true });
fs.mkdirSync(STAGE, { recursive: true });

for (const [oldRel, newRel] of rename) {
  if (!newRel) continue;
  const src = path.join(OUT, oldRel);
  const dst = path.join(STAGE, newRel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });

  if (oldRel.toLowerCase().endsWith(".webp")) {
    execFileSync("sips", ["-s", "format", "png", src, "--out", dst], {
      stdio: "ignore",
    });
  } else {
    fs.copyFileSync(src, dst);
  }
}

// --- 4b. Compress images that exceed the CMS's 5MB limit.
// Strategy: cap longest side at 2400px; for JPEG also drop quality to 82.
// We re-run until under the limit or the image is already small.

const MAX_BYTES = 5 * 1024 * 1024;
const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);
const widthSteps = [2400, 2000, 1800, 1600, 1400];

for (const rel of walk(STAGE)) {
  const ext = path.extname(rel).toLowerCase();
  if (!IMAGE_EXT.has(ext)) continue;
  let size = fs.statSync(rel).size;
  if (size <= MAX_BYTES) continue;

  for (const w of widthSteps) {
    execFileSync("sips", ["-Z", String(w), rel, "--out", rel], {
      stdio: "ignore",
    });
    if (ext === ".jpg" || ext === ".jpeg") {
      execFileSync(
        "sips",
        ["--setProperty", "formatOptions", "82", rel, "--out", rel],
        { stdio: "ignore" },
      );
    }
    size = fs.statSync(rel).size;
    if (size <= MAX_BYTES) break;
  }

  if (size > MAX_BYTES) {
    console.warn(`  ! still over 5MB: ${path.relative(STAGE, rel)} (${(size / 1024 / 1024).toFixed(1)}MB)`);
  }
}

// --- 5. Rewrite references inside HTML/JS/CSS

const REWRITE_EXT = new Set([".html", ".js", ".css", ".mjs"]);

for (const rel of walk(STAGE)) {
  const ext = path.extname(rel).toLowerCase();
  if (!REWRITE_EXT.has(ext)) continue;

  let body = fs.readFileSync(rel, "utf8");
  const before = body;

  for (const [oldRef, newRef] of sortedRefs) {
    if (!body.includes(oldRef)) continue;
    body = body.split(oldRef).join(newRef);
  }

  body = body.replace(
    /<link[^>]*rel="preload"[^>]*as="font"[^>]*>/gi,
    "",
  );
  body = body.replace(/\/_next\/static\/media\/[A-Za-z0-9._~-]+/g, "");

  if (body !== before) fs.writeFileSync(rel, body);
}

// --- 6. Summary

const finalFiles = [...walk(DIST)].map((f) => path.relative(DIST, f));
console.log("\n✓ CMS-ready tree produced in out-cms/:");
console.log(`  total files: ${finalFiles.length}`);
console.log(`  HTML:   ${finalFiles.filter((f) => f.endsWith(".html")).length}`);
console.log(`  CSS:    ${finalFiles.filter((f) => f.endsWith(".css")).length}`);
console.log(`  JS:     ${finalFiles.filter((f) => f.endsWith(".js")).length}`);
console.log(`  images: ${finalFiles.filter((f) => /\.(png|jpe?g|svg|gif)$/i.test(f)).length}`);
console.log(`  webp remaining: ${finalFiles.filter((f) => /\.webp$/i.test(f)).length}`);
