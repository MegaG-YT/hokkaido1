import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { PasswordGate } from "@/components/shared/password-gate";

const GTM_ID = "GTM-ML53764B";

export const viewport: Viewport = {
  themeColor: "#1B3A6B",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heim-tohoku.co.jp"),
  title:
    "スマートハイムシティ泉｜福島県福島市泉｜分譲住宅（建売住宅）・分譲地（土地）｜セキスイハイム東北",
  description: "福島県福島市泉の分譲地「スマートハイムシティ泉」の販売情報です",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.heim-tohoku.co.jp/es/izumi/" },
  openGraph: {
    type: "website",
    title:
      "スマートハイムシティ泉｜福島県福島市泉｜分譲住宅（建売住宅）・分譲地（土地）｜セキスイハイム東北",
    description: "福島県福島市泉の分譲地「スマートハイムシティ泉」の販売情報です",
    url: "https://www.heim-tohoku.co.jp/es/izumi/",
    siteName:
      "スマートハイムシティ泉｜福島県福島市泉｜分譲住宅（建売住宅）・分譲地（土地）｜セキスイハイム東北",
    images: [
      {
        url: "https://www.heim-tohoku.co.jp/es/izumi/image/izumi_op.jpg",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}
