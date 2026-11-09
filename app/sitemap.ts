import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.allowIndexing) return [];

  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    {
      path: "/burmese-accountant-australia",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/news", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ] as const;

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
