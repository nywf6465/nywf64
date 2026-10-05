import type { Metadata } from "next";
import { ChucanNavChrome } from "@/components/ChucanNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Chunky Candy — nywf64.com",
  description:
    "Chunky Square exhibitor postcard from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Chunky Candy postcards page — “postcards” standard.
 * Body from legacy chucan03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Chucan03Page() {
  return (
    <PostcardPage
      heroLabel="Chunky Candy"
      titleId="chucan03-title"
      hero={{
        src: "/images/chucanoverview/hero-banner.jpg",
        alt: "Chunky Candy at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucanNavChrome />}
      previousHref="/chucan02"
      overviewHref="/chucanoverview"
      nextHref="/chucan04"
      entries={[
        {
          front: {
            src: "/images/chucan03/83982-B.jpg",
            width: 450,
            height: 281,
            alt: "Chunky Square postcard",
          },
          reverse: {
            src: "/images/chucan03/83982-Breverse.jpg",
            width: 300,
            height: 142,
            alt: "Reverse — Chunky Square postcard",
          },
          meta: ["Chunky Square", exhibitor, "No. 83982-B"],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chunky Chocolate",
          ],
        },
      ]}
    />
  );
}
