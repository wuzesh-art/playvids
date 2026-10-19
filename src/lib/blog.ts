import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  faqs: BlogFaq[];
  contentHtml: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const processor = remark().use(remarkGfm).use(remarkHtml);

function parseDate(raw: unknown): string {
  if (raw instanceof Date) return raw.toISOString().slice(0, 10);
  return String(raw ?? "").trim();
}

async function readPost(fileName: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await processor.process(content);

  const faqs: BlogFaq[] = Array.isArray(data.faqs)
    ? data.faqs
        .filter(
          (f: unknown): f is BlogFaq =>
            typeof f === "object" &&
            f !== null &&
            "q" in f &&
            "a" in f
        )
        .map((f: BlogFaq) => ({ q: String(f.q), a: String(f.a) }))
    : [];

  return {
    slug: String(data.slug ?? fileName.replace(/\.md$/, "")),
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: parseDate(data.date),
    keywords: Array.isArray(data.keywords)
      ? data.keywords.map(String)
      : [],
    faqs,
    contentHtml: processed.toString(),
  };
}

let cached: BlogPost[] | null = null;

export async function getAllPosts(): Promise<BlogPost[]> {
  if (cached) return cached;
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(files.map(readPost));
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  cached = posts;
  return posts;
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
