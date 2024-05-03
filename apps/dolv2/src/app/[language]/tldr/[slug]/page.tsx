import type { Metadata } from "next";
import SEO from "@/components/SEO";
import TldrDetail from "@/components/tldr/TldrDetail";
import { GetTldrList, GetTldrData } from "@/data";
import type { TldrDataType } from "@/types";

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { language: string; slug: string };
}): Promise<Metadata> {
  const language = params.language;

  const slug = params.slug;

  const tldrData = await GetTldrData({
    language: language,
    slug: slug,
  });

  return SEO({
    title: tldrData.title,
    description: `${tldrData.short_summary} ${tldrData.description}`,
    keywords: ["tldr", "summary", "explanation"],
    image: tldrData.wiki.image || "/og.png",
    language: language,
  });
}
// End of metadata generation

// Static slug generation
export const dynamicParams = true;
export async function generateStaticParams(): Promise<
  {
    language: string;
    slug: string;
  }[]
> {
  const tldrList = await GetTldrList({
    language: "en",
    page: 1,
  });

  const pathsList = tldrList.slice(0, 1).map((tldr) => ({
    language: "en",
    slug: tldr.slug,
  }));

  return pathsList;
}
// End of static generation

// Page generation
export default async function TldrDetailPage({
  params,
}: {
  params: { language: string; slug: string };
}) {
  const { language, slug } = params;

  const tldrData: TldrDataType = await GetTldrData({
    language: language,
    slug: slug,
  });

  return <TldrDetail tldrData={tldrData} slug={slug} language={language} />;
}
// End of page generation
