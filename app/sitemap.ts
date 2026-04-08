import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = posts.map((post) => ({
    url: `https://brickandyield.co/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    priority: 0.7 as const,
  }));

  return [
    { url: "https://brickandyield.co", priority: 1.0, lastModified: new Date() },
    { url: "https://brickandyield.co/blog", priority: 0.8, lastModified: new Date() },
    { url: "https://brickandyield.co/terms", priority: 0.3 },
    { url: "https://brickandyield.co/privacy", priority: 0.3 },
    ...blogEntries,
  ];
}
