import { Skeleton } from "@/components/ui/skeleton";

export default function MerchSkeleton() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-lg space-y-2">
      <Skeleton className="mx-auto h-5 w-32" />

      <Skeleton className="h-60 w-full" />
    </div>
  );
}
