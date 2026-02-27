import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BackgroundAudio } from "@/components/layout/background-audio";
import { AudioToggle } from "@/components/layout/audio-toggle";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { BottomNav } from "@/components/layout/bottom-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEB EKYS 2026 | Sınav Hazırlık Platformu",
  description: "MEB Eğitim Kurumlarına Yönetici Seçme Sınavı (EKYS) 2026 için kapsamlı hazırlık platformu. Deneme sınavları, bilgi kartları ve interaktif oyunlar.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <BackgroundAudio />
          <AudioToggle />
          <ThemeToggle />
          {children}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
