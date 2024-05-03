import packagejson from "package.json";
import { GetDictionary } from "@/utils";

export default async function Footer({ language }: { language: string }) {
  const dictionary = await GetDictionary(language);

  return (
    <footer className="container flex flex-col items-center justify-center w-full h-20">
      <p className="text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} {dictionary.dolores} v
        {packagejson.version}
      </p>
    </footer>
  );
}
