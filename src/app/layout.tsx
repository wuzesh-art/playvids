import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://playvids.videodownloaderai.com"),
  title:
    "Playvids Video Downloader — Free, Fast & No Sign-Up | downloadxAI",
  description:
    "Download Playvids videos in HD for free. No sign-up, no watermarks. Fast Playvids to MP4 downloader by downloadxAI — launching soon.",
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
      </body>
    </html>
  );
}
