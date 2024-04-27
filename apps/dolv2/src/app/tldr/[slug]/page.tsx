import type { Metadata } from "next";
import SEO from "@/components/SEO";
import TldrDetail from "@/components/tldr/TldrDetail";
import { GetTldrList, GetTldrData } from "@/data";
import type { TldrDataType } from "@/types";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const tldrData = await GetTldrData({
    language: "en",
    slug: slug,
  });

  return SEO({
    title: tldrData.title,
    description: `${tldrData.short_summary} ${tldrData.description}`,
    keywords: ["tldr", "summary", "explanation"],
    image: tldrData.wiki.image || "/og.png",
  });
}
// End of metadata generation
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const tldrList = await GetTldrList({
    language: "en",
    page: 1,
  });
  const pathsList = tldrList.map((tldr) => ({ slug: tldr.slug }));
  return pathsList.slice(0, 1);
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function TldrDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const tldrData: TldrDataType = await GetTldrData({
    language: "en",
    slug: slug,
  });

  return <TldrDetail tldrData={tldrData} slug={slug} />;
}
