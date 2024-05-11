import Image from "@/components/Image";
import Link from "@/components/Link";
import { GetDictionary } from "@/utils";
import type { TldrDataType } from "@/types";

export default async function TldrImage({
  tldrData,
  language,
}: {
  tldrData: TldrDataType;
  language: string;
}) {
  const dictionary = await GetDictionary(language);

  return (
    <>
      {tldrData.wiki.image && (
        <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-lg space-y-2">
          <Image
            src={tldrData.wiki.image}
            alt={tldrData.title}
            width={1200}
            height={630}
            className="rounded-md shadow-lg"
            unoptimized
          />

          <p className="text-sm text-center font-semibold text-gray-500 dark:text-gray-400">
            {dictionary.source}:{" "}
            <Link
              href={`https://en.wikipedia.org/?curid=${tldrData.wiki.pageid}`}
            >
              {dictionary.wikipedia}
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
