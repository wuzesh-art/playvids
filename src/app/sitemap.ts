import type { MetadataRoute } from "next";

const BASE = "https://playvids.videodownloaderai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/blog",
    "/how-to",
    "/terms",
    "/privacy",
    "/disclaimer",
    "/dmca",
    "/contact",
  ];
  const lastModified = new Date("2026-01-01");

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
