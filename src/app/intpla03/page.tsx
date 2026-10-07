import type { Metadata } from "next";
import { IntplaNavChrome } from "@/components/IntplaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — International Plaza — nywf64.com",
  description:
    "International Plaza / Hummel Pavilion postcard from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * International Plaza postcards — “postcards” standard.
 * Body from legacy intpla03.html (Adobe chrome omitted).
 * Layout: PostcardPage (/bell03 standard).
 */
export default function Intpla03Page() {
  return (
    <PostcardPage
      heroLabel="International Plaza"
      titleId="intpla03-title"
      hero={{
        src: "/images/intplaoverview/hero-banner.jpg",
        alt: "International Plaza at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IntplaNavChrome />}
      previousHref="/intpla02"
      overviewHref="/intplaoverview"
      nextHref="/intpla04"
      entries={[
        {
          front: {
            src: "/images/intpla03/89883-B.jpg",
            width: 450,
            height: 282,
            alt: "International Plaza — Hummel Pavilion",
          },
          reverse: {
            src: "/images/intpla03/89883-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — International Plaza Hummel Pavilion postcard",
          },
          meta: [
            "International Plaza",
            "Hummel Pavilion",
            "Exhibitor Postcard",
            "No. 89883-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Hummel Pavilion",
          ],
        },
      ]}
    />
  );
}
