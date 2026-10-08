import type { Metadata } from "next";
import { SudanNavChrome } from "@/components/SudanNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Sudan — nywf64.com",
  description:
    "Sudan Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sudan postcards page — “postcards” standard.
 * Body from legacy sudan03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Sudan03Page() {
  return (
    <PostcardPage
      heroLabel="Sudan"
      titleId="sudan03-title"
      hero={{
        src: "/images/sudanoverview/hero-banner.jpg",
        alt: "Sudan pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SudanNavChrome />}
      previousHref="/sudan02"
      overviewHref="/sudanoverview"
      nextHref="/sudan04"
      entries={[
        {
          front: {
            src: "/images/sudan03/65618-B.jpg",
            width: 450,
            height: 283,
            alt: "Sudan Pavilion — Official Postcard No. 65618-B",
          },
          reverse: {
            src: "/images/sudan03/65618-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Sudan Pavilion Official Postcard No. 65618-B",
          },
          meta: [
            "Sudan Pavilion",
            "Official Postcard",
            "No. 65618-B",
            "Dexter No. N/A",
            "Manhattan No. W-9",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
      ]}
    />
  );
}
