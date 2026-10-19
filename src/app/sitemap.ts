import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://playvids.videodownloaderai.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/blog",
    "/how-to",
    "/terms",
    "/privacy",
    "/disclaimer",
    "/dmca",
    "/contact",
  ];
  const posts = await getAllPosts();
  const lastModified = new Date("2026-01-01");

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
