import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageTitle from "@/components/PageTitle";

const title = "GitHub Emoji";
const description =
  "GitHub supports emoji! Find out how to use them in your projects.";

export default function GithubEmojiLoadingPage() {
  return (
    <>
      <PageTitle title={title} description={description} />

      <div className="grid grid-cols-1 gap-4 my-5 p-5">
        <Table>
          <TableCaption>List of GitHub Emojis</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Emoji</TableHead>
              <TableHead>UNICODE</TableHead>
              <TableHead>Short Code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Skeleton className="h-5 w-20" />
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  <Skeleton className="h-5 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-20" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Emoji</TableHead>
              <TableHead>UNICODE</TableHead>
              <TableHead>Short Code</TableHead>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}
