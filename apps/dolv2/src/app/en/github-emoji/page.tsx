import type { Metadata } from "next";
import * as emoji from "github-emoji";
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
import SEO from "@/components/SEO";
import { GithubEmojisType } from "@/types";
import PageTitle from "@/components/PageTitle";

const title = "GitHub Emoji";
const description =
  "GitHub supports emoji! Find out how to use them in your projects.";

// Metadata generation
export async function generateMetadata(): Promise<Metadata> {
  return await SEO({
    title: title,
    description: description,
    keywords: ["github", "emoji"],
    language: "en",
  });
}
// End of metadata generation

// Page generation
export default function GithubEmojiPage() {
  const emojis: GithubEmojisType = emoji.all();

  // Convert the emojis map to list
  const emojisList = Array.from(emojis.values());

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
            {emojisList.map((emoji) => (
              <TableRow key={emoji.name}>
                <TableCell className="font-medium">
                  {emoji.name.replaceAll("_", " ")}
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  {emoji.string || "N/A"}
                </TableCell>
                <TableCell>
                  {`U+${emoji.file.replace(/\.png$/, "").toUpperCase()}`}
                </TableCell>
                <TableCell>{`:${emoji.name}:`}</TableCell>
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
// End of page generation
