import type { Metadata } from "next";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Berlin — nywf64.com",
  description:
    "Berlin pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Berlin postcards page — “postcards” standard.
 * Body from legacy berlin02.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Berlin02Page() {
  return (
    <PostcardPage
      heroLabel="Berlin"
      titleId="berlin02-title"
      hero={{
        src: "/images/berlinoverview/hero-banner.jpg",
        alt: "Berlin at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BerlinNavChrome />}
      previousHref="/berlin01"
      overviewHref="/berlin01"
      nextHref="/berlin03"
      entries={[
        {
          front: {
            src: "/images/berlin02/88661-B.jpg",
            width: 450,
            height: 281,
            alt: "Berlin Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/berlin02/88661-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Berlin Pavilion exhibitor postcard",
          },
          meta: ["Berlin Pavilion", exhibitor, "No. 88661-B"],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Berlin Marketing Council",
          ],
        },
      ]}
    />
  );
}
