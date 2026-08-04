import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import MotionProvider from "@/components/providers/MotionProvider";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

const siteTitle = "Sourneo | Modern Web Siteleri Küçük İşletmeler İçin";
const siteDescription =
  "İşletmeniz için modern, hızlı ve mobil uyumlu web siteleri hazırlıyoruz. QR Menü, kurumsal web sitesi ve dijital çözümler sunuyoruz.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "web sitesi",
    "kurumsal web sitesi",
    "QR menü",
    "CV hazırlama",
    "logo tasarımı",
    "sosyal medya tasarımı",
    "küçük işletme web sitesi",
    "Sourneo",
    "dijital web stüdyo",
  ],
  authors: [{ name: "Sourneo" }],
  creator: "Sourneo",
  metadataBase: new URL("https://sourneo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Sourneo",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={sans.variable}>
      <body className="font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
