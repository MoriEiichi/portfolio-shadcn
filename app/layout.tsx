import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Eiichi Mori - Playwright Testing Portfolio",
  description:
    "QAオートメーションエンジニアのポートフォリオ。Playwrightを用いたE2Eテスト環境の構築とCI/CDパイプラインの統合。",
  openGraph: {
    title: "Eiichi Mori - Playwright Testing Portfolio",
    description:
      "QAオートメーションエンジニアのポートフォリオ。Playwrightを用いたE2Eテスト環境の構築とCI/CDパイプラインの統合。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} font-body bg-slate-950 text-slate-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
