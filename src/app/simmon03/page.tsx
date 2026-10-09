import type { Metadata } from "next";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Simmons — nywf64.com",
  description:
    "Simmons Beautyrest pavilion postcard — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons postcard page — “postcards” standard.
 * Body from legacy simmon03.html. Layout: PostcardPage (/bell03).
 */
export default function Simmon03Page() {
  return (
    <PostcardPage
      heroLabel="Simmons"
      titleId="simmon03-title"
      hero={{
        src: "/images/simmonoverview/hero-banner.jpg",
        alt: "Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SimmonNavChrome />}
      previousHref="/simmon02"
      overviewHref="/simmonoverview"
      nextHref="/simmon04"
      entries={[
        {
          front: {
            src: "/images/simmon03/87876-B.jpg",
            width: 450,
            height: 282,
            alt: "Simmons pavilion postcard front",
          },
          reverse: {
            src: "/images/simmon03/87876-Breverse.jpg",
            width: 300,
            height: 101,
            alt: "Simmons pavilion postcard reverse",
          },
          meta: ["Simmons", "Exhibitor Postcard", "No. 87876-B"],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Simmons Company",
          ],
        },
      ]}
    />
  );
}
