import { Skeleton } from "@/components/ui/skeleton";
import BreadcrumbSkeleton from "../BreadcrumbSkeleton";
import PageTitleSkeleton from "../PageTitleSkeleton";

export default function TldrDetailSkeleton() {
  return (
    <>
      <PageTitleSkeleton />

      <div className="grid grid-cols-12 gap-x-5 md:gap-x-10 gap-y-5 my-5">
        <div className="col-span-12">
          <BreadcrumbSkeleton />
        </div>

        <div className="col-span-12 md:col-span-8 space-y-5">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>

        <div className="col-span-12 md:col-span-4">
          <Skeleton className="h-60 w-full" />
        </div>
      </div>
    </>
  );
}
