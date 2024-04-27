import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  totalPage,
  activePage,
  baseUrl,
}: {
  totalPage: number;
  activePage: number;
  baseUrl: string;
}) {
  return (
    <div className="py-5">
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            href={
              activePage === 1
                ? `${baseUrl}`
                : `${baseUrl}/page/${activePage - 1}`
            }
          >
            Previous
          </PaginationPrevious>
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => {
            if (
              page === 1 ||
              page === totalPage ||
              Math.abs(page - activePage) < 3
            ) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === activePage}
                    href={page === 1 ? `${baseUrl}` : `${baseUrl}/page/${page}`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            }
            if (Math.abs(page - activePage) === 3) {
              return <PaginationEllipsis key={page}>...</PaginationEllipsis>;
            }
            return null;
          })}
          <PaginationNext
            href={
              activePage === totalPage
                ? activePage === 1
                  ? `${baseUrl}`
                  : `${baseUrl}/page/${activePage}`
                : `${baseUrl}/page/${activePage + 1}`
            }
          >
            Next
          </PaginationNext>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
