import { Metadata } from "next";
import BookClient from "@/components/book/BookClient";

export const metadata: Metadata = {
  title: "Book a Session | Culturally Sensitive Counseling",
  description: "Schedule your mental wellness session with Purva Sreekaanth. Easy online booking for confidential CBT and ACT counseling at Setu.",
};

export default function BookPage() {
  return <BookClient />;
}
