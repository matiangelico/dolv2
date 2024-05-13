import Link from "@/components/Link";
import Image from "@/components/Image";
import { GetMerch } from "@/data";
import { GetDictionary } from "@/utils";
import type { MerchType } from "@/types";

export default async function Merch({ language }: { language: string }) {
  const dictionary = await GetDictionary(language);

  const merchData: MerchType = await GetMerch();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-lg">
      <p className="text-sm text-center mb-2 font-semibold text-gray-500 dark:text-gray-400">
        {dictionary.merch}
      </p>

      <Link href={merchData.link}>
        <Image
          src={merchData.image}
          alt={merchData.name}
          width={500}
          height={500}
          className="rounded-md shadow-lg h-full"
          unoptimized
          title={merchData.name}
        />
      </Link>
    </div>
  );
}
