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
  metadataBase: new URL("https://setuwellness.com"),
  title: {
    default: "Setu — A Bridge to Mental Wellness",
    template: "%s | Setu Mental Wellness",
  },
  description:
    "Setu connects the Indian diaspora with culturally sensitive, evidence-based mental wellness care. Your bridge to feeling understood and rooted.",
  keywords: ["mental wellness", "Indian diaspora", "culturally sensitive therapy", "psychologist", "CBT", "ACT", "online therapy"],
  authors: [{ name: "Purva Sreekaanth" }],
  creator: "Purva Sreekaanth",
  openGraph: {
    title: "Setu — A Bridge to Mental Wellness",
    description: "Culturally rooted mind care for the Indian diaspora worldwide.",
    url: "https://setuwellness.com",
    siteName: "Setu Mental Wellness",
    images: [{ url: "/og-image.jpg" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setu — A Bridge to Mental Wellness",
    description: "Culturally rooted mind care for the Indian diaspora worldwide.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "PsychologicalService",
                "name": "Setu Mental Wellness",
                "description": "Culturally sensitive mental wellness care for the Indian diaspora.",
                "url": "https://setuwellness.com",
                "logo": "https://setuwellness.com/og-image.jpg",
                "image": "https://setuwellness.com/og-image.jpg",
                "provider": {
                  "@id": "https://setuwellness.com/#purva"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Global"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "18:30",
                  "closes": "20:30"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://setuwellness.com/#purva",
                "name": "Purva Sreekaanth",
                "jobTitle": "Psychologist",
                "url": "https://setuwellness.com/about",
                "image": "https://setuwellness.com/assets/about-portrait-purva.jpg",
                "knowsAbout": ["CBT", "ACT", "Indian Diaspora Mental Health", "Cultural Wellness"]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How is Setu different from traditional therapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Setu focuses on 'mind care' rather than a clinical 'patient' model. We specialize in the Indian diaspora experience, meaning you don't have to explain your cultural background—we already speak that language."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What does 'culturally rooted' care actually mean?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It means we honor the unique family dynamics, inherited traditions, and lived experiences of being Indian."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://setuwellness.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About",
                    "item": "https://setuwellness.com/about"
                  }
                ]
              }
            ])
          }}
        />
        <Navbar />
        {children}
        <Script id="cal-init" strategy="afterInteractive">
          {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");`}
        </Script>
      </body>
    </html>
  );
}
