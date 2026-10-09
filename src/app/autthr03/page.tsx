import type { Metadata } from "next";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Auto Thrill Show — nywf64.com",
  description:
    "Auto Thrill Show postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show postcards page — “postcards” standard.
 * Body from legacy autthr03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Autthr03Page() {
  return (
    <PostcardPage
      heroLabel="Auto Thrill Show"
      titleId="autthr03-title"
      hero={{
        src: "/images/autthroverview/hero-banner.jpg",
        alt: "Auto Thrill Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AutthrNavChrome />}
      previousHref="/autthr02"
      overviewHref="/autthroverview"
      nextHref="/autthr04"
      entries={[
        {
          front: {
            src: "/images/autthr03/86476-B.jpg",
            width: 450,
            height: 285,
            alt: "Auto Thrill Show exhibitor postcard No. 86476-B",
          },
          reverse: {
            src: "/images/autthr03/86476-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Auto Thrill Show postcard No. 86476-B",
          },
          meta: ["Auto Thrill Show", "Exhibitor Postcard", "No. 86476-B"],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Craigmoor, Inc.",
          ],
        },
      ]}
    />
  );
}
