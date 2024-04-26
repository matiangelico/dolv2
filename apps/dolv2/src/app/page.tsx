import Link from "@/components/Link";
import { Button } from "@ui/button";

export default function HomePage() {
  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute inset-0 flex flex-col justify-center gap-4 p-4 md:gap-10">
        <div className="grid gap-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
            Welcome to Dolores v2
          </h1>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
            Explore all the new features and improvements of Dolores v2.
          </p>
        </div>
        <Link href="/projects">
          <Button variant="outline">Explore all projects</Button>
        </Link>
      </div>
    </div>
  );
}
