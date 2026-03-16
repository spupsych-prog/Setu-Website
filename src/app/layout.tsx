import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Setu — A Bridge to Mental Wellness",
  description:
    "Setu connects the Indian diaspora with culturally sensitive, evidence-based mental wellness care. Your bridge to feeling understood.",
  openGraph: {
    title: "Setu — A Bridge to Mental Wellness",
    description: "Your bridge to culturally rooted mind care.",
    url: "https://setuwellness.com",
    siteName: "Setu",
    images: [{ url: "/og-image.jpg" }],
    locale: "en_IN",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sourceSans.variable} ${lora.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
