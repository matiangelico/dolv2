import Link from "@/components/Link";
import { GetTldrRecommendation } from "@/data";
import { GetDictionary } from "@/utils";
import type { TldrListType } from "@/types";

export default async function TldrRecommendation({
  language,
  slug,
}: {
  language: string;
  slug: string;
}) {
  const dictionary = await GetDictionary(language);

  const tldrRecommendation = await GetTldrRecommendation({
    language,
    slug,
  });

  return (
    <>
      <h2 className="text-2xl font-bold">{`${dictionary.similar} ${dictionary.tldr.title}`}</h2>
      <div>
        {tldrRecommendation.map((tldr: TldrListType) => (
          <Link href={`/${language}/tldr/${tldr.slug}`} key={tldr.slug}>
            <div className="flex items-center justify-between p-5 my-5 bg-gray-100 dark:bg-gray-900 rounded-md">
              <div>
                <h3 className="text-lg font-bold">{tldr.title}</h3>
                <p>{tldr.short_summary}</p>
              </div>
              <div>
                <span className="fi fi-arrow-right"></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
