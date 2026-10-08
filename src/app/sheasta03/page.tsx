import type { Metadata } from "next";
import { SheastaNavChrome } from "@/components/SheastaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Shea Stadium — nywf64.com",
  description:
    "Shea Stadium postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Shea Stadium postcards page — “postcards” standard.
 * Body from legacy sheasta03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Sheasta03Page() {
  return (
    <PostcardPage
      heroLabel="Shea Stadium"
      titleId="sheasta03-title"
      hero={{
        src: "/images/sheastaoverview/hero-banner.jpg",
        alt: "Shea Stadium at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SheastaNavChrome />}
      previousHref="/sheasta02"
      overviewHref="/sheastaoverview"
      nextHref="/sheasta04"
      entries={[
        {
          front: {
            src: "/images/sheasta03/65619-B.jpg",
            width: 450,
            height: 281,
            alt: "Shea Stadium official postcard No. 65619-B",
          },
          reverse: {
            src: "/images/sheasta03/65619-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse of Shea Stadium postcard No. 65619-B",
          },
          meta: [
            "Shea Stadium",
            "Official Postcard",
            "No. 65619-B",
            "Dexter No. WF-6",
            "Manhattan No. W-10",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/sheasta03/89958-B.jpg",
            width: 450,
            height: 283,
            alt: "Shea Stadium official postcard No. 89958-B",
          },
          reverse: {
            src: "/images/sheasta03/89958-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse of Shea Stadium postcard No. 89958-B",
          },
          meta: [
            "Shea Stadium",
            "Official Postcard",
            "No. 89958-B",
            "Dexter No. WF-104",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
      ]}
    />
  );
}
