import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-05-22"),
      changeFrequency: "monthly",
      priority: 1
    },
    ...seoPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly" as const,
      priority: page.kind === "city" ? 0.85 : 0.9
    }))
  ];
}
