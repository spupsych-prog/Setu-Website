import { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogPostClient from "@/components/blog/BlogPostClient";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  // Next.js static export requires at least one path to exist for dynamic routes.
  // We provide a fallback if the blog is empty to prevent build failure.
  if (posts.length === 0) {
    return [{ slug: "placeholder" }];
  }
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
