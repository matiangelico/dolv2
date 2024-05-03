import Link from "@/components/Link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@ui/sheet";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { NavbarLinksData } from "@/data";
import { GetDictionary } from "@/utils";

export default async function Navbar({ language }: { language: string }) {
  const dictionary = await GetDictionary(language);

  return (
    <header className="container flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="ms-6 font-bold text-xl" href={`/${language}`}>
        {dictionary.sitemetadata.title}
      </Link>

      <nav className="ms-auto hidden lg:flex gap-6">
        {NavbarLinksData.map((link, index) => (
          <Link key={index} href={`/${language}${link.href}`}>
            <Button variant="ghost" size="sm">
              {dictionary.navbar[link.text]}
            </Button>
          </Link>
        ))}
      </nav>

      <div className="ms-auto space-x-2">
        <ThemeSwitcher />

        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="ghost">
              <HamburgerMenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              {NavbarLinksData.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Button variant="ghost" size="lg" className="w-full">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
