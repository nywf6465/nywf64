import type { Metadata } from "next";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — SKF — nywf64.com",
  description:
    "SKF pavilion postcard — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF postcard page — “postcards” standard.
 * Body from legacy skf03.html. Layout: PostcardPage (/bell03).
 */
export default function Skf03Page() {
  return (
    <PostcardPage
      heroLabel="SKF"
      titleId="skf03-title"
      hero={{
        src: "/images/skfoverview/hero-banner.jpg",
        alt: "SKF pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SkfNavChrome />}
      previousHref="/skf02"
      overviewHref="/skfoverview"
      nextHref="/skf04"
      entries={[
        {
          front: {
            src: "/images/skf03/WF408.jpg",
            width: 450,
            height: 278,
            alt: "Transportation Area postcard showing SKF",
          },
          reverse: {
            src: "/images/skf03/WF408reverse.jpg",
            width: 300,
            height: 76,
            alt: "Transportation Area postcard reverse",
          },
          meta: ["Transportation Area", "Unauthorized Postcard", "No. WF408"],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
