import type { Metadata } from "next";
import { SiteMetadata } from "@/data";
import { GetDictionary } from "@/utils";

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  language?: string;
  [key: string]: any;
}

export default async function SEO({
  title = "",
  description,
  image,
  language = "en",
  ...rest
}: Props): Promise<Metadata> {
  const dictionary = await GetDictionary(language);

  return {
    title:
      title === ""
        ? dictionary.sitemetadata.title
        : `${title} | ${dictionary.sitemetadata.title}`,
    description: description || dictionary.sitemetadata.description,
    keywords: [...(rest.keywords || []), ...(SiteMetadata.keywords || [])],
    openGraph: {
      title:
        title === ""
          ? dictionary.sitemetadata.title
          : `${title} | ${dictionary.sitemetadata.title}`,
      description: description || dictionary.sitemetadata.description,
      url: SiteMetadata.site_url,
      siteName: dictionary.sitemetadata.title,
      images: image ? [image] : "/og.png",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        title === ""
          ? dictionary.sitemetadata.title
          : `${title} | ${dictionary.sitemetadata.title}`,
      description: description || dictionary.sitemetadata.description,
      siteId: SiteMetadata.twitter_userid,
      creator: `@${SiteMetadata.twitter_username}`,
      creatorId: SiteMetadata.twitter_userid,
      images: image ? [image] : "/og.png",
    },
    ...rest,
  };
}
