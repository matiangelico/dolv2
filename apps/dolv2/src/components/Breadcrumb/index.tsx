import React from "react";
import Link from "@/components/Link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { BreadcrumbType } from "@/types";

export default function BreadcrumbComponent({
  links = [
    {
      text: "Home",
      href: "/",
    },
  ],
}: {
  links: BreadcrumbType[];
}) {
  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList>
        {links.map((link, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {index < links.length - 1 ? (
                  <BreadcrumbLink>
                    <Link href={link.href}>{link.text}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{link.text}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < links.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
