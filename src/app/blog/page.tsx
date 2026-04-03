import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogListClient from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Blog | Culturally Rooted Mental Wellness Insights",
  description: "Explore articles on mental wellness, resilience, and the Indian diaspora experience. Evidence-based insights from Setu.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogListClient posts={posts} />;
}
