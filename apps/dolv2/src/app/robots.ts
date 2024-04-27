import { MetadataRoute } from "next";
import { SiteMetadata, GetTldrCount } from "@/data";
import { TLDR_CHUNK_SIZE } from "./tldr/default";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const tldrCount = await GetTldrCount({
    language: "en",
  });
  const tldrPages = Math.ceil(tldrCount / TLDR_CHUNK_SIZE);
  const tldrSitemaps = Array.from({ length: tldrPages }, (_, i) => i).map(
    (id) => `${SiteMetadata.site_url}/tldr/sitemap-${id}.xml`,
  );

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${SiteMetadata.site_url}/sitemap.xml`, ...tldrSitemaps],
    host: SiteMetadata.site_url,
  };
}
