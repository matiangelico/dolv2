import type { Metadata } from "next";
import SEO from "@/components/SEO";
import TldrHome from "@/components/tldr/TldrHome";
import { GetTldrList, GetTldrCount } from "@/data";
import { TLDR_CHUNK_SIZE } from "./default";

export function generateMetadata(): Metadata {
  return SEO({
    title: "TL;DR",
    description:
      "Explaining complex topics in simple terms. Get quick summaries of various topics.",
    keywords: ["tldr", "summary", "explanation"],
  });
}

export default async function TldrEnHomePage(): Promise<JSX.Element> {
  const tldrListData = GetTldrList({
    language: "en",
    page: 1,
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
      activePage={1}
      baseUrl="/tldr"
    />
  );
}
