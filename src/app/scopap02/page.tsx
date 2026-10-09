import type { Metadata } from "next";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Scott Paper — nywf64.com",
  description:
    "Scott Paper pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper Information Manual page — “manual” standard.
 * Body from legacy scopap02.html. Layout: InformationManualPage (/bell02).
 */
export default function Scopap02Page() {
  return (
    <InformationManualPage
      heroLabel="Scott Paper"
      titleId="scopap02-title"
      hero={{
        src: "/images/scopapoverview/hero-banner.jpg",
        alt: "Scott Paper at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ScopapNavChrome />}
      previousHref="/scopap01"
      overviewHref="/scopapoverview"
      nextHref="/scopap03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Scott Paper Company"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Francis Plowman, V. P.",
            "Scott Paper Company",
            "International Airport",
            "Philadelphia 13, Pennsylvania",
            "215 SA 4-2000",
          ],
        },
        {
          label: "EXHIBIT MANAGER",
          lines: [
            "Mr. Burch Hindle",
            "230 Park Avenue",
            "New York, New York",
            "MU 6-6234",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 1, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 11; Lot 12", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["24,992 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Donald Deskey Assocs., Inc.",
            "575 Madison Avenue",
            "New York 22, New York",
            "PL 9-5100",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["D. Fortunato, Inc.", "Floral Park, N.Y."],
        },
      ]}
      primaryFigure={{
        src: "/images/scopap02/scott32.jpg",
        width: 600,
        height: 289,
        alt: "Scott Paper Company line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The exhibit is of California mountain lodge styling, set in a plush
              landscaped area, with a stream running throughout. Canopied shelters
              and colorful benches dot the park-like area.
            </>
          ),
        },
        {
          body: (
            <>
              A 15-minute pictorial tour through an indoor &quot;Enchanted
              Forest&quot; tells the story of paper from woodland to home.
            </>
          ),
        },
        {
          body: (
            <>
              A separate building has special rest facilities, including a lounge
              and a diaper-changing room. Two other major structures are a
              50-foot-high decorative tower and a special building elevated 14
              feet through the use of stilts, which houses the exhibit offices
              and a private lounge.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/scopap02/scott33.jpg",
        width: 600,
        height: 369,
        alt: "Scott Paper Company",
        bordered: true,
        title: "Scott Paper Company",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
