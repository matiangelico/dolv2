import type { TldrDataType, TldrListType } from "@/types";

export async function GetTldrCount({
  language,
}: {
  language: string;
}): Promise<number> {
  const res = await fetch(
    `${process.env.BACKEND_URL ?? ""}/tldr/${language}/count/`,
    {
      method: "GET",
      next: { revalidate: 3600 },
    } as RequestInit,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tldr count");
  }

  const data = await res.json();
  return data.count;
}

export async function GetTldrList({
  language,
  page,
}: {
  language: string;
  page: number;
}): Promise<TldrListType[]> {
  const res = await fetch(
    `${process.env.BACKEND_URL ?? ""}/tldr/${language}/list/${page}/`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${process.env.BACKEND_TOKEN ?? ""}`,
      },
      next: { revalidate: 3600 },
    } as RequestInit,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tldr list");
  }

  return (await res.json()) as TldrListType[];
}

export async function GetTldrData({
  language,
  slug,
}: {
  language: string;
  slug: string;
}): Promise<TldrDataType> {
  const res = await fetch(
    `${process.env.BACKEND_URL ?? ""}/tldr/${language}/data/${slug}/`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${process.env.BACKEND_TOKEN ?? ""}`,
      },
      next: { revalidate: 3600 },
    } as RequestInit,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tldr data");
  }

  return (await res.json()) as TldrDataType;
}
