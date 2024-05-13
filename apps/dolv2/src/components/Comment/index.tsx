"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";

export default function Comment() {
  const { theme } = useTheme();

  return (
    <>
      <div className="my-10">
        <Giscus
          id="giscus-comments"
          repo={`dolv2/dolv2`}
          repoId={`R_kgDOLnR6xw`}
          category={`Comment`}
          categoryId={`DIC_kwDOLnR6x84Ceq4-`}
          mapping={`pathname`}
          strict={`1`}
          reactionsEnabled={`1`}
          emitMetadata={`0`}
          inputPosition={`bottom`}
          theme={theme}
          lang={`en`}
          loading={`lazy`}
        />
      </div>
    </>
  );
}
