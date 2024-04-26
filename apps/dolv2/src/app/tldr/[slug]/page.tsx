import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SEO from "@/components/SEO";
import TldrDetailPage from "@/components/tldr/TldrDetailPage";
import { GetTldrCount, GetTldrList, GetTldrData } from "@/data";
import type { TldrDataType, TldrListType } from "@/types";
import { TLDR_CHUNK_SIZE } from "../default";

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
  const tldrCount = await GetTldrCount({
    language: "en",
  });

  const pageCount = Math.ceil(tldrCount / TLDR_CHUNK_SIZE);

  const pathsList = [];
  for (let i = 0; i < pageCount; i++) {
    let tldrList = await GetTldrList({
      language: "en",
      page: i + 1,
    });
    pathsList.push(...tldrList.map((tldr) => ({ slug: tldr.slug })));
  }

  return pathsList.slice(0, 1);
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const tldrCount = await GetTldrCount({
    language: "en",
  });

  const pageCount = Math.ceil(tldrCount / TLDR_CHUNK_SIZE);

  const tldrListData = [];
  for (let i = 0; i < pageCount; i++) {
    let tldrList = await GetTldrList({
      language: "en",
      page: i + 1,
    });
    tldrListData.push(...tldrList);
  }

  const findTldr = tldrListData.find(
    (tldr: TldrListType) => tldr.slug === slug,
  );

  if (!findTldr) {
    return notFound();
  }

  const tldrData: TldrDataType = await GetTldrData({
    language: "en",
    slug: slug,
  });

  return <TldrDetailPage tldrData={tldrData} slug={slug} />;
}
