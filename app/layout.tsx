import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

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
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
