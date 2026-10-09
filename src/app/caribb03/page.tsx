import type { Metadata } from "next";
import { CaribbNavChrome } from "@/components/CaribbNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Caribbean — nywf64.com",
  description:
    "Caribbean Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const sources = [
  "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
];

/**
 * Caribbean Pavilion postcards page — “postcards” standard.
 * Body from legacy caribb03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Caribb03Page() {
  return (
    <PostcardPage
      heroLabel="Caribbean"
      titleId="caribb03-title"
      hero={{
        src: "/images/caribboverview/hero-banner.jpg",
        alt: "Caribbean Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CaribbNavChrome />}
      previousHref="/caribb02"
      overviewHref="/caribboverview"
      nextHref="/caribb04"
      entries={[
        {
          front: {
            src: "/images/caribb03/86857-B.jpg",
            width: 450,
            height: 279,
            alt: "Caribbean Pavilion",
          },
          reverse: {
            src: "/images/caribb03/86857-Breverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Caribbean Pavilion",
          },
          meta: [
            "Caribbean Pavilion",
            "Official Postcard",
            "No. 86857-B",
            "Dexter No. WF-49",
            "Manhattan No. W-52",
          ],
          sources,
        },
      ]}
    />
  );
}
