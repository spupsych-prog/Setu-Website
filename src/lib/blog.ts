import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  coverImageAlt?: string;
  tags: string[];
  readingTime: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title ?? "Untitled",
        date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
        excerpt: data.excerpt ?? "",
        coverImage: data.coverImage ?? undefined,
        coverImageAlt: data.coverImageAlt ?? undefined,
        tags: (data.tags ?? []).flatMap((tag: string) => 
          tag.split(',').map((t) => t.trim()).filter(Boolean)
        ),
        readingTime: readingTime(content).text,
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}
