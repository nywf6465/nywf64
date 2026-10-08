import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { WalwaxNavChrome } from "@/components/WalwaxNavChrome";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Walter's International Wax Museum — nywf64.com",
  description:
    "Walter's International Wax Museum entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Walter's International Wax Museum Information Manual page.
 * Body from legacy walwax02.html. Layout: InformationManualPage (/bell02).
 */
export default function Walwax02Page() {
  return (
    <InformationManualPage
      heroLabel="Walter's International Wax Museum"
      titleId="walwax02-title"
      hero={{
        src: "/images/walwaxoverview/hero-banner.jpg",
        alt: "Walter's International Wax Museum at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<WalwaxNavChrome />}
      previousHref="/walwax01"
      overviewHref="/walwaxoverview"
      nextHref="/walwax03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["The Walter's International Wax Museum"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Messrs. Louis and Manuel Walter",
            "1810 South Sante Fe Avenue",
            "Compton, California",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 5, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Adults $1.00", "Children (under 12 yrs.) $ .50"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 57; Lot 11 Lake Amusement Area"],
        },
        {
          label: "AREA",
          lines: ["24,489 Sq. Ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Seelye, Stevenson, Value and Knecht",
            "99 Park Avenue",
            "New York 17, New York",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["\u00a0"],
        },
      ]}
      primaryFigure={{
        src: "/images/walwax02/walwax03.jpg",
        width: 600,
        height: 242,
        alt: "Walter's International Wax Museum",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Walter&apos;s International Wax Museum will contain historical
              and artistic legendary scenes with life-size wax figures.
            </>
          ),
        },
      ]}
    />
  );
}
