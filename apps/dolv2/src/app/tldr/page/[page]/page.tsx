import type { Metadata } from "next";
import SEO from "@/components/SEO";
import TldrHome from "@/components/tldr/TldrHome";
import { GetTldrList, GetTldrCount } from "@/data";
import { TLDR_CHUNK_SIZE } from "../../default";

export function generateMetadata(): Metadata {
  return SEO({
    title: "TL;DR",
    description:
      "Explaining complex topics in simple terms. Get quick summaries of various topics.",
    keywords: ["tldr", "summary", "explanation"],
  });
}

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<{ page: string }[]> {
  const tldrCount = await GetTldrCount({
    language: "en",
  });

  const pageCount = Math.ceil(tldrCount / TLDR_CHUNK_SIZE);

  const pathsList = [];
  // ignore page 1 (index page)
  for (let i = 1; i < pageCount; i++) {
    pathsList.push({ page: (i + 1).toString() });
  }

  return pathsList.slice(0, 1);
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function TldrEnPagePage({
  params,
}: {
  params: { page: string };
}): Promise<JSX.Element> {
  const page = parseInt(params.page);

  const tldrListData = GetTldrList({
    language: "en",
    page: page,
  });

  const tldrCountData = GetTldrCount({
    language: "en",
  });

  const [tldrList, tldrCount] = await Promise.all([
    tldrListData,
    tldrCountData,
  ]);

  return (
    <TldrHome
      tldrList={tldrList}
      totalPage={Math.ceil(tldrCount / TLDR_CHUNK_SIZE)}
      activePage={page}
      baseUrl="/tldr"
    />
  );
}
