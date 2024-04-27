import type { MetadataRoute } from "next";
import { SiteMetadata } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "tldr"].map((route) => ({
    url: `${SiteMetadata.site_url}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as "weekly",
    priority: 1,
  }));

  return [...routes];
}
