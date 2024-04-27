import PageTitle from "@/components/PageTitle";
import Link from "@/components/Link";
import Pagination from "@/components/Pagination";
import type { TldrListType } from "@/types";

export default function TldrHome({
  tldrList,
  totalPage,
  activePage,
  baseUrl,
}: {
  tldrList: TldrListType[];
  totalPage: number;
  activePage: number;
  baseUrl: string;
}) {
  return (
    <>
      <PageTitle
        title="TL;DR"
        description="Explaining complex topics in simple terms. Get quick summaries of various topics."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
        {tldrList.map((tldr) => (
          <Link key={tldr.slug} href={`/tldr/${tldr.slug}`}>
            <div className="flex flex-col h-full p-4 shadow-md rounded-md bg-white dark:bg-gray-800">
              <h2 className="flex-grow text-lg font-semibold">{tldr.title}</h2>
              <p className="flex-grow text-sm text-gray-700 dark:text-gray-300">
                {tldr.short_summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        totalPage={totalPage}
        activePage={activePage}
        baseUrl={baseUrl}
      />
    </>
  );
}
