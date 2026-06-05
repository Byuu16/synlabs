import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SYNLABS",
  description:
    "Where hardware, software, and AI converge. Engineering intelligent systems for a connected future.",

  keywords: [
    "Embedded Systems",
    "IoT",
    "AI",
    "Software Engineering",
    "Hardware Engineering",
    "Automation",
    "Firmware",
    "System Architecture",
  ],

  openGraph: {
    title: "SYNLABS",
    description:
      "Where hardware, software, and AI converge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}