import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brickmon - Your Azure Sentinel Bill is 40% Noise",
  description: "We audit your ingestion pipelines, remove unused columns, and tune noisy alerts. Pure signal, zero waste. Save 20-40% on Azure Sentinel costs.",
  keywords: ["Azure Sentinel", "cost optimization", "security audit", "log management", "cybersecurity", "UK"],
  authors: [{ name: "Brickmon" }],
  openGraph: {
    title: "Brickmon - Your Azure Sentinel Bill is 40% Noise",
    description: "We audit your ingestion pipelines, remove unused columns, and tune noisy alerts. Pure signal, zero waste.",
    type: "website",
    locale: "en_GB",
    siteName: "Brickmon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brickmon - Your Azure Sentinel Bill is 40% Noise",
    description: "We audit your ingestion pipelines, remove unused columns, and tune noisy alerts. Pure signal, zero waste.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
