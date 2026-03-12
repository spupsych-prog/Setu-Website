import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-primary",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Setu | Culturally Appropriate Mental Wellness for the Indian Diaspora",
  description: "Setu (Bridge) connects the Indian diaspora with culturally sensitive, evidence-based mental wellness care. Specializing in ADHD, Mood Disorders, and Transgenerational Trauma.",
  openGraph: {
    title: "Setu Mental Wellness",
    description: "Your bridge to culturally rooted mind care.",
    url: "https://setuwellness.com",
    siteName: "Setu",
    images: [{ url: "/og-image.jpg" }],
    locale: "en_IN",
    type: "website",
  },
};

const theme = createTheme({
  primaryColor: 'orange', // Closest to Saffron
  fontFamily: 'Outfit, sans-serif',
  headings: {
    fontFamily: 'Playfair Display, serif',
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
