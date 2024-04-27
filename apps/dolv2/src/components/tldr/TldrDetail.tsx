import Image from "@/components/Image";
import Breadcrumb from "@/components/Breadcrumb";
import PageTitle from "@/components/PageTitle";
import type { TldrDataType } from "@/types";

export default function TldrDetail({
  tldrData,
  slug,
}: {
  tldrData: TldrDataType;
  slug: string;
}) {
  return (
    <>
      <PageTitle title={tldrData.title} description={tldrData.short_summary} />

      <div className="grid grid-cols-12 gap-x-5 md:gap-x-10 gap-y-5 my-5">
        <div className="col-span-12">
          <Breadcrumb
            links={[
              { text: "Home", href: "/" },
              { text: "TL;DR", href: "/tldr" },
              { text: tldrData.title, href: `/tldr/${slug}` },
            ]}
          />
        </div>

        <div className="col-span-12 md:col-span-8">{tldrData.description}</div>

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
