import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { BountyNavChrome } from "@/components/BountyNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Board the Bounty — Bounty — nywf64.com",
  description:
    "Board the Bounty brochure pages from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bounty brochure page — Board the Bounty image collages.
 * Body from legacy bounty04.html (two 2×3 brochure-page collages; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Bounty04Page() {
  return (
    <AdvertisingPage
      heroLabel="Bounty"
      titleId="bounty04-title"
      title="Brochure: Board the Bounty"
      hero={{
        src: "/images/bountyoverview/hero-banner.jpg",
        alt: "Bounty at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<BountyNavChrome />}
      previousHref="/bounty03"
      overviewHref="/bountyoverview"
      nextHref="/bountyoverview"
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/bounty04/bounty02.01.jpg",
              width: 301,
              height: 300,
              alt: "Board the Bounty brochure panel 1",
            },
            {
              src: "/images/bounty04/bounty02.02.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 2",
            },
            {
              src: "/images/bounty04/bounty02.03.jpg",
              width: 301,
              height: 300,
              alt: "Board the Bounty brochure panel 3",
            },
            {
              src: "/images/bounty04/bounty02.04.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 4",
            },
            {
              src: "/images/bounty04/bounty02.05.jpg",
              width: 301,
              height: 300,
              alt: "Board the Bounty brochure panel 5",
            },
            {
              src: "/images/bounty04/bounty02.06.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 6",
            },
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/bounty04/bounty03.01.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 7",
            },
            {
              src: "/images/bounty04/bounty03.02.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 8",
            },
            {
              src: "/images/bounty04/bounty03.03.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 9",
            },
            {
              src: "/images/bounty04/bounty03.04.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 10",
            },
            {
              src: "/images/bounty04/bounty03.05.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 11",
            },
            {
              src: "/images/bounty04/bounty03.06.jpg",
              width: 300,
              height: 300,
              alt: "Board the Bounty brochure panel 12",
            },
          ],
        },
      ]}
    />
  );
}
