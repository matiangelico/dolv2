import { Skeleton } from "@/components/ui/skeleton";

export default function PageTitleSkeleton(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full h-48 bg-gray-800 text-white rounded shadow-lg">
      <h1 className="text-4xl font-bold tracking-tight">
        <Skeleton className="h-10 w-[250px] bg-gray-700" />
      </h1>
      <p className="mt-5 text-lg text-center">
        <Skeleton className="h-4 w-96 bg-gray-700" />
      </p>
    </div>
  );
}
