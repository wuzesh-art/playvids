import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import AgeGate from "@/components/AgeGate";
import CookieBar from "@/components/CookieBar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const SITE_URL = "https://playvids.videodownloaderai.com";
const SITE_DESCRIPTION =
  "Download Playvids videos in HD for free. No sign-up, no watermarks. Fast Playvids to MP4 downloader by downloadxAI — launching soon.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Playvids Video Downloader — Free, Fast & No Sign-Up | downloadxAI",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Playvids Video Downloader — Free, Fast & No Sign-Up | downloadxAI",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "downloadxAI",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "downloadxAI — Free Playvids Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playvids Video Downloader — Free, Fast & No Sign-Up | downloadxAI",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-base font-sans text-ink antialiased`}
      >
        {children}
        <CookieBar />
        <AgeGate />
      </body>
    </html>
  );
}
