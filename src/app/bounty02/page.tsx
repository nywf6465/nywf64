import type { Metadata } from "next";
import { BountyNavChrome } from "@/components/BountyNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Bounty — nywf64.com",
  description:
    "Bounty entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bounty Information Manual page — “manual” standard.
 * Body from legacy bounty02.html. Layout: InformationManualPage (/bell02).
 */
export default function Bounty02Page() {
  return (
    <InformationManualPage
      heroLabel="Bounty"
      titleId="bounty02-title"
      hero={{
        src: "/images/bountyoverview/hero-banner.jpg",
        alt: "Bounty at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<BountyNavChrome />}
      previousHref="/bounty01"
      overviewHref="/bountyoverview"
      nextHref="/bounty03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ['The Sailing Vessel "Bounty"'],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Ronald Carroll",
            "Metro-Goldwyn-Mayer, Inc.",
            "1540 Broadway",
            "New York 36, New York",
            "JU 2-2000",
            "and",
            "Mr. William C. Crane, Jr.",
            "Marinas of the Future, Inc.",
            "World's Fair Marina",
            "Northern Blvd. at 125th Street",
            "Corona 68, New York",
            "TW 8-1212",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 30, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["World's Fair Marina", "Flushing Bay, New York"],
        },
        {
          label: "DESIGNER",
          lines: [
            "Metro-Goldwyn-Mayer Studio",
            "MGM Studios",
            "Culver City, California",
            "213 UP 0-3311",
          ],
        },
        {
          label: "CONTRACTOR-VESSEL",
          lines: ["Jakobson Shipyard, Inc.", "Oster Bay, New York"],
        },
        {
          label: "ADMISSION",
          lines: ["Adults  $ .90", "Children  $ .50", "Groups  $ .70-.35"],
        },
      ]}
      primaryFigure={{
        src: "/images/bounty02/line-drawing.jpg",
        width: 600,
        height: 385,
        alt: 'Sailing vessel "Bounty" line drawing',
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The full-size replica of the sailing vessel &quot;Bounty&quot;
              used in the production of the Metro-Goldwyn-Mayer movie
              &quot;Mutiny on the Bounty&quot;, will be on exhibit at the
              World&apos;s Fair Marina, with a South Sea Island scene on the
              shore.
            </>
          ),
        },
      ]}
    />
  );
}
