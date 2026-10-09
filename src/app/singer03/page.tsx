import type { Metadata } from "next";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Singer Bowl — nywf64.com",
  description:
    "Singer Bowl postcard — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl postcard page — “postcards” standard.
 * Body from legacy singer03.html. Layout: PostcardPage (/bell03).
 */
export default function Singer03Page() {
  return (
    <PostcardPage
      heroLabel="Singer Bowl"
      titleId="singer03-title"
      hero={{
        src: "/images/singeroverview/hero-banner.jpg",
        alt: "Singer Bowl at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SingerNavChrome />}
      previousHref="/singer02"
      overviewHref="/singeroverview"
      nextHref="/singer04"
      entries={[
        {
          front: {
            src: "/images/singer03/postcard-front.jpg",
            width: 600,
            height: 289,
            alt: "Singer Bowl postcard front",
          },
          reverse: {
            src: "/images/singer03/postcard-reverse.jpg",
            width: 300,
            height: 43,
            alt: "Singer Bowl postcard reverse",
          },
          meta: ["Singer Bowl", "Exhibitor Postcard", "No. N/A"],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
