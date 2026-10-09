import type { Metadata } from "next";
import { BountyNavChrome } from "@/components/BountyNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Bounty — nywf64.com",
  description:
    "Bounty photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bounty photograph album — “photographs” standard.
 * Body from legacy bounty03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Bounty03Page() {
  return (
    <PhotographsPage
      heroLabel="Bounty"
      titleId="bounty03-title"
      hero={{
        src: "/images/bountyoverview/hero-banner.jpg",
        alt: "Bounty at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<BountyNavChrome />}
      previousHref="/bounty02"
      overviewHref="/bounty01"
      nextHref="/bounty04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/bounty03/5424Large.jpg",
                width: 400,
                height: 278,
                alt: 'Artist\'s rendering of the "Bounty" exhibit',
              },
              title: 'Artist\'s rendering of the "Bounty" exhibit',
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
          ],
        },
      ]}
    />
  );
}
