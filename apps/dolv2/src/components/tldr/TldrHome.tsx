import PageTitle from "@/components/PageTitle";
import Link from "@/components/Link";
import Pagination from "@/components/Pagination";
import { GetDictionary } from "@/utils";
import type { TldrListType } from "@/types";

export default async function TldrHome({
  tldrList,
  totalPage,
  activePage,
  baseUrl,
  language,
}: {
  tldrList: TldrListType[];
  totalPage: number;
  activePage: number;
  baseUrl: string;
  language: string;
}) {
  const dictionary = await GetDictionary(language);

  return (
    <>
      <PageTitle
        title={dictionary.tldr.title}
        description={dictionary.tldr.description}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
        {tldrList.map((tldr) => (
          <Link key={tldr.slug} href={`${baseUrl}/${tldr.slug}`}>
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
        language={language}
      />
    </>
  );
}
