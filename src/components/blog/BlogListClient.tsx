"use client";

import Image from "next/image";
import Link from "next/link";
import { trackCTA } from "@/lib/analytics";
import { TrackSection } from "@/components/analytics/AnalyticsTrackers";

interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  readingTime: string;
}

export default function BlogListClient({ posts }: { posts: BlogPostSummary[] }) {
  return (
    <div className="min-h-screen bg-brand-linen">
      <main className="pt-36 pb-24 px-6">
        <TrackSection name="Blog Listing" className="mx-auto max-w-5xl">
          <header className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif text-brand-earth mb-4">
              The Setu Journal
            </h1>
          </header>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-brand-fog text-lg">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-white overflow-hidden shadow-sm border border-brand-sand transition-all hover:shadow-md hover:-translate-y-1 duration-300"
                  onClick={() => trackCTA(`Read Post: ${post.title}`, "Blog Listing")}
                >
                  {post.coverImage && (
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-brand-fog/70">
                      <time>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="font-serif text-lg text-brand-earth group-hover:text-brand-sage transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-brand-fog leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </TrackSection>
      </main>

      {/* ───── Footer ───── */}
      <footer className="bg-brand-earth text-brand-sand/90 py-16 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          <div>
            <Link href="/" className="font-serif text-2xl font-semibold text-brand-blush block mb-3">
              setu
            </Link>
            <p className="text-brand-sand/70 max-w-xs leading-relaxed">
              A bridge to culturally rooted mental wellness for the Indian diaspora worldwide.
            </p>
          </div>
          <div>
            <p className="uppercase tracking-widest text-brand-blush text-xs mb-4 font-medium">Say Hello</p>
            <div className="space-y-2 text-brand-sand/70">
              <Link href="mailto:spu.psych@gmail.com" className="block hover:text-brand-blush transition-colors">
                spu.psych@gmail.com
              </Link>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-widest text-brand-blush text-xs mb-4 font-medium">Explore</p>
            <div className="space-y-2 text-brand-sand/70">
              <Link href="/" className="block hover:text-brand-blush transition-colors">Home</Link>
              <Link href="/about" className="block hover:text-brand-blush transition-colors">Our Story</Link>
              <Link href="/services" className="block hover:text-brand-blush transition-colors">Services</Link>
              <Link href="/blog" className="block hover:text-brand-blush transition-colors">Blog</Link>
              <Link href="/book" className="block hover:text-brand-blush transition-colors">Book a Session</Link>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12 pt-6 border-t border-brand-sand/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-sand/30">
          <span>© {new Date().getFullYear()} Setu Mental Wellness</span>
          <span>Rooted in empathy</span>
        </div>
      </footer>
    </div>
  );
}
