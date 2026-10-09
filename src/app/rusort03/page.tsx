import type { Metadata } from "next";
import { RusortNavChrome } from "@/components/RusortNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title:
    "Postcards — Russian Orthodox Greek-Catholic Church of America — nywf64.com",
  description:
    "Russian Orthodox Greek-Catholic Church of America pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Russian Orthodox postcards page — “postcards” standard.
 * Body from legacy rusort03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Rusort03Page() {
  return (
    <PostcardPage
      heroLabel="Russian Orthodox Greek-Catholic Church of America"
      titleId="rusort03-title"
      hero={{
        src: "/images/rusortoverview/hero-banner.jpg",
        alt: "Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<RusortNavChrome />}
      previousHref="/rusort02"
      overviewHref="/rusortoverview"
      nextHref="/rusort04"
      entries={[
        {
          front: {
            src: "/images/rusort03/19396.jpg",
            width: 284,
            height: 450,
            alt: "Russian Orthodox Church exhibitor postcard No. 19396",
          },
          reverse: {
            src: "/images/rusort03/19396reverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Russian Orthodox Church postcard No. 19396",
          },
          meta: [
            "Russian Orthodox Church",
            <span key="type" style={{ color: "#1e90ff" }}>
              Exhibitor Postcard
            </span>,
            "No. 19396",
          ],
          sources: [
            "Source: Postcard Made by Colorcraft Studios, N.Y., N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
