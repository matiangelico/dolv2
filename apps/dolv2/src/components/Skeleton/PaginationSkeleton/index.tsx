import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationSkeleton() {
  return (
    <div className="py-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="">99</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
