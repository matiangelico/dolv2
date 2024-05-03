import Image from "@/components/Image";
import Link from "@/components/Link";
import Breadcrumb from "@/components/Breadcrumb";
import PageTitle from "@/components/PageTitle";
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
          <p>{tldrData.description}</p>

          <h2 className="text-2xl font-bold">
            {dictionary.browse_in_other_languages}
          </h2>
          <div>
            {i18nLanguages
              .filter((lang) => lang.short_code !== language)
              .map((lang) => (
                <Link href={`/${lang.short_code}/tldr/${slug}`}>
                  <span
                    className={`fi fi-${lang.flag_code} m-2 rounded text-3xl shadow-lg`}
                  ></span>
                </Link>
              ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          {tldrData.wiki.image && (
            <Image
              src={tldrData.wiki.image}
              alt={tldrData.title}
              width={1200}
              height={630}
              className="rounded-md shadow-lg"
              unoptimized
            />
          )}
        </div>
      </div>
    </>
  );
}
