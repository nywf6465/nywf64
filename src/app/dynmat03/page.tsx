import type { Metadata } from "next";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Dynamic Maturity — nywf64.com",
  description:
    "Dynamic Maturity pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity postcards page — “postcards” standard.
 * Body from legacy dynmat03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Dynmat03Page() {
  return (
    <PostcardPage
      heroLabel="Dynamic Maturity"
      titleId="dynmat03-title"
      hero={{
        src: "/images/dynmatoverview/hero-banner.jpg",
        alt: "Dynamic Maturity at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<DynmatNavChrome />}
      previousHref="/dynmat02"
      overviewHref="/dynmatoverview"
      nextHref="/dynmat04"
      entries={[
        {
          front: {
            src: "/images/dynmat03/98092-B.jpg",
            width: 450,
            height: 279,
            alt: "Dynamic Maturity Pavilion exhibitor postcard No. 98092-B",
          },
          reverse: {
            src: "/images/dynmat03/98092-Breverse.jpg",
            width: 300,
            height: 69,
            alt: "Reverse — Dynamic Maturity Pavilion postcard No. 98092-B",
          },
          meta: [
            "Dynamic Maturity Pavilion",
            "Exhibitor Postcard",
            "No. 98092-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Dynamic Maturity Pavilion",
          ],
        },
      ]}
    />
  );
}
