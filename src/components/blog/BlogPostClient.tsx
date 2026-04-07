"use client";

import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const htmlContent = marked.parse(post.content) as string;

  return (
    <div className="min-h-screen bg-brand-linen">
      <main className="pt-28 pb-24 px-6">
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-sage hover:text-brand-earth transition-colors mb-6"
          >
            <span>←</span> All Posts
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-brand-fog/70 mb-4">
              <time>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight mb-6">
              {post.title}
            </h1>
          </header>

          {/* Cover image */}
          {post.coverImage && (
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Prose content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-brand-earth
              prose-p:text-brand-fog prose-p:leading-[1.85]
              prose-a:text-brand-sage prose-a:underline-offset-4 hover:prose-a:text-brand-warm
              prose-strong:text-brand-earth
              prose-li:text-brand-fog
              prose-blockquote:border-brand-warm/30 prose-blockquote:text-brand-fog/80 prose-blockquote:italic
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Author */}
          <div className="mt-16 pt-8 border-t border-brand-sand">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/assets/about-portrait-purva.jpg"
                  alt="Purva Sreekaanth"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif text-brand-earth font-medium">Purva Sreekaanth</p>
                <p className="text-sm text-brand-fog">Psychologist &amp; Founder, Setu</p>
              </div>
            </div>
          </div>
        </article>
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
