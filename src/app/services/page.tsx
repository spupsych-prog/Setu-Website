import { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title: "Mental Wellness Services | CBT, ACT & Culturally Rooted Care",
  description: "Explore mental health services for the Indian diaspora. Individual mind care, family & relationship counseling, and student wellness support using CBT and ACT.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
