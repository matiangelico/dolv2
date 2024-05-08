import Link from "@/components/Link";
import { GetTldrRecommendation } from "@/data";
import type { TldrListType } from "@/types";

export default async function TldrRecommendation({
  language,
  slug,
}: {
  language: string;
  slug: string;
}) {
  const tldrRecommendation = await GetTldrRecommendation({
    language,
    slug,
  });

  return (
    <>
      <h2 className="text-2xl font-bold">Similar TL;DRs</h2>
      <div>
        {tldrRecommendation.map((tldr: TldrListType) => (
          <Link href={`/${language}/tldr/${tldr.slug}`}>
            <div className="flex items-center justify-between p-5 my-5 bg-gray-100 rounded-md">
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
