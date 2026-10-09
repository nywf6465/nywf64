import type { Metadata } from "next";
import { SanmarNavChrome } from "@/components/SanmarNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Santa Maria — nywf64.com",
  description:
    "Santa Maria pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Santa Maria postcards page — “postcards” standard.
 * Body from legacy sanmar02.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Sanmar02Page() {
  return (
    <PostcardPage
      heroLabel="Santa Maria"
      titleId="sanmar02-title"
      hero={{
        src: "/images/sanmaroverview/hero-banner.jpg",
        alt: "Santa Maria at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SanmarNavChrome />}
      previousHref="/sanmar01"
      overviewHref="/sanmaroverview"
      nextHref="/sanmar03"
      entries={[
        {
          front: {
            src: "/images/sanmar02/79941-B.jpg",
            width: 450,
            height: 284,
            alt: "Santa Maria exhibitor postcard No. 79941-B",
          },
          reverse: {
            src: "/images/sanmar02/79941-Breverse.jpg",
            width: 300,
            height: 103,
            alt: "Reverse — Santa Maria postcard No. 79941-B",
          },
          meta: [
            "Santa Maria",
            <span key="type" style={{ color: "#1e90ff" }}>
              Exhibitor Postcard
            </span>,
            "No. 79941-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by 1492 Enterprises, Inc.",
          ],
        },
      ]}
    />
  );
}
