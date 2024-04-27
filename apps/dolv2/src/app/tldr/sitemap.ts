import { MetadataRoute } from "next";
import { SiteMetadata, GetTldrCount, GetTldrList } from "@/data";
import { TLDR_CHUNK_SIZE } from "./default";

export async function generateSitemaps() {
  const tldrCount = await GetTldrCount({
    language: "en",
  });
  const tldrPages = Math.ceil(tldrCount / TLDR_CHUNK_SIZE);
  return Array.from({ length: tldrPages }, (_, i) => i).map((id) => ({
    id,
  }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const tldrList = await GetTldrList({
    language: "en",
    page: id + 1,
  });

  const routes = tldrList.map((tldr) => ({
    url: `${SiteMetadata.site_url}/tldr/${tldr.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as "weekly",
    priority: 2,
  }));

  return [...routes];
}
