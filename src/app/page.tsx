import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Setu — Culturally Rooted Mental Wellness for the Indian Diaspora",
  description: "Setu connects the Indian diaspora with culturally sensitive, evidence-based mental wellness care. Join Purva Sreekaanth for CBT and ACT counseling.",
};

export default function Home() {
  return <HomeClient />;
}
