import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";
import fs from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  title: "Setu — Culturally Rooted Mental Wellness for the Indian Diaspora",
  description: "Setu connects the Indian diaspora with culturally sensitive, evidence-based mental wellness care. Join Purva Sreekaanth for CBT and ACT counseling.",
};

export default function Home() {
  const testimonialsDir = path.join(process.cwd(), "src/content/testimonials");
  const files = fs.readdirSync(testimonialsDir);
  
  const testimonials = files
    .filter(file => file.endsWith(".json"))
    .map(file => {
      const filePath = path.join(testimonialsDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    });

  return <HomeClient testimonials={testimonials} />;
}
