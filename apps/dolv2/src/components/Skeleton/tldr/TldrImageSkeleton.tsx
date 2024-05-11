import { Skeleton } from "@/components/ui/skeleton";

export default function TldrImageSkeleton() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-lg space-y-2">
      <Skeleton className="h-60 w-full" />

      <Skeleton className="mx-auto h-5 w-32" />
    </div>
  );
}
