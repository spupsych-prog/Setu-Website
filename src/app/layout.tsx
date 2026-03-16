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
import Script from "next/script";

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
        <Script id="cal-init" strategy="afterInteractive">
          {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");`}
        </Script>
      </body>
    </html>
  );
}
