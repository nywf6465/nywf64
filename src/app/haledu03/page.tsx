import type { Metadata } from "next";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Hall of Education — nywf64.com",
  description:
    "Hall of Education postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education postcards page — “postcards” standard.
 * Body from legacy haledu03.html. Layout: PostcardPage (/bell03).
 * Legacy wording (“Dexter Co.lor Illinois”) preserved.
 */
export default function Haledu03Page() {
  return (
    <PostcardPage
      heroLabel="Hall of Education"
      titleId="haledu03-title"
      hero={{
        src: "/images/haleduoverview/hero-banner.jpg",
        alt: "Hall of Education at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HaleduNavChrome />}
      previousHref="/haledu02"
      overviewHref="/haleduoverview"
      nextHref="/haledu04"
      entries={[
        {
          front: {
            src: "/images/haledu03/65624-B.jpg",
            width: 450,
            height: 281,
            alt: "Hall of Education official postcard No. 65624-B",
          },
          reverse: {
            src: "/images/haledu03/65624-Breverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse of Hall of Education postcard No. 65624-B",
          },
          meta: [
            "Hall of Education",
            "Official Postcard",
            "No. 65624-B",
            "Dexter No. WF-27",
            "Manhattan No. W-12",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/haledu03/80874-B.jpg",
            width: 450,
            height: 283,
            alt: "Collegiate Cap and Gown Company exhibitor postcard No. 80874-B",
          },
          reverse: {
            src: "/images/haledu03/80874-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse of Collegiate Cap and Gown Company postcard No. 80874-B",
          },
          meta: [
            "Collegiate Cap and Gown Company",
            "Hall of Education",
            "Exhibitor Postcard",
            "No. 80874-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Dexter Co.lor Illinois",
          ],
        },
      ]}
    />
  );
}
