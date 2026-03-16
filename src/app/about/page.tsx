import { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Purva Sreekaanth | Culturally Rooted Psychologist at Setu",
  description: "Learn about Purva Sreekaanth's journey and approach to mental wellness. Discover how Setu bridges cultural gaps in psychological care for the Indian diaspora.",
};

export default function AboutPage() {
  return <AboutClient />;
}
