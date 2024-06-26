import { Suspense } from "react";
import Link from "@/components/Link";
import Breadcrumb from "@/components/Breadcrumb";
import PageTitle from "@/components/PageTitle";
import TldrRecommendationSkeleton from "@/components/Skeleton/tldr/TldrRecommendationSkeleton";
import TldrBookRecommendationSkeleton from "@/components/Skeleton/tldr/TldrBookRecommendationSkeleton";
import TldrImageSkeleton from "@/components/Skeleton/tldr/TldrImageSkeleton";
import MerchSkeleton from "@/components/Skeleton/Merch";
import TldrRecommendation from "./TldrRecommendation";
import TldrBookRecommendation from "./TldrBookRecommendation";
import TldrImage from "./TldrImage";
import Merch from "@/components/Merch";
import Comment from "@/components/Comment";
import { i18nLanguages } from "@/data";
import { GetDictionary } from "@/utils";
import type { TldrDataType } from "@/types";

export default async function TldrDetail({
  tldrData,
  slug,
  language,
}: {
  tldrData: TldrDataType;
  slug: string;
  language: string;
}) {
  const dictionary = await GetDictionary(language);

  return (
    <>
      <PageTitle title={tldrData.title} description={tldrData.short_summary} />

      <div className="grid grid-cols-12 gap-x-5 md:gap-x-10 gap-y-5 my-5">
        <div className="col-span-12">
          <Breadcrumb
            links={[
              { text: `${dictionary.navbar.home}`, href: `/${language}` },
              { text: `${dictionary.tldr.title}`, href: `/${language}/tldr` },
              { text: tldrData.title, href: `/${language}/tldr/${slug}` },
            ]}
          />
        </div>

        <div className="col-span-12 md:col-span-8 space-y-5">
          <blockquote className="border-l-2 pl-6">
            <p>{tldrData.description}</p>
            <br />
            <p>
              {dictionary.source}:{" "}
              <Link
                href={`https://en.wikipedia.org/?curid=${tldrData.wiki.pageid}`}
              >
                {dictionary.wikipedia}
              </Link>
            </p>
          </blockquote>

          <div className="py-5">
            <h2 className="text-2xl font-bold">
              {dictionary.browse_in_other_languages}
            </h2>
            <div>
              {i18nLanguages
                .filter((lang) => lang.short_code !== language)
                .map((lang) => (
                  <Link
                    href={`/${lang.short_code}/tldr/${slug}`}
                    key={lang.short_code}
                  >
                    <span
                      className={`fi fi-${lang.flag_code} m-2 rounded text-3xl shadow-lg`}
                    ></span>
                  </Link>
                ))}
            </div>
          </div>

          <Comment />

          <div className="py-5">
            <Suspense fallback={<TldrRecommendationSkeleton />}>
              <TldrRecommendation language={language} slug={slug} />
            </Suspense>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 space-y-5">
          {tldrData.wiki.image && (
            <Suspense fallback={<TldrImageSkeleton />}>
              <TldrImage tldrData={tldrData} language={language} />
            </Suspense>
          )}

          <Suspense fallback={<MerchSkeleton />}>
            <Merch language={language} />
          </Suspense>

          <Suspense fallback={<TldrBookRecommendationSkeleton />}>
            <TldrBookRecommendation language={language} slug={slug} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
