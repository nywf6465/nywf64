import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Better Living Center — nywf64.com",
  description:
    "Better Living Center postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center postcards page — “postcards” standard.
 * Body from legacy betliv03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Betliv03Page() {
  return (
    <PostcardPage
      heroLabel="Better Living Center"
      titleId="betliv03-title"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      previousHref="/betliv02"
      overviewHref="/betlivoverview"
      nextHref="/betliv04"
      entries={[
        {
          front: {
            src: "/images/betliv03/83746-B.jpg",
            width: 450,
            height: 284,
            alt: "Better Living Center official postcard",
          },
          reverse: {
            src: "/images/betliv03/83746-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Better Living Center official postcard",
          },
          meta: [
            "Better Living Center",
            "Official Postcard",
            "No. 83746-B",
            "Dexter No. WF-22",
            "Manhattan No. W-10",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
      ]}
    />
  );
}
