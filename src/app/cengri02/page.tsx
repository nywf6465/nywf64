import type { Metadata } from "next";
import { CengriNavChrome } from "@/components/CengriNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Century Grill — nywf64.com",
  description:
    "Century Grill entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Century Grill Information Manual page — “manual” standard.
 * Body from legacy cengri02.html. Layout: InformationManualPage (/bell02).
 */
export default function Cengri02Page() {
  return (
    <InformationManualPage
      heroLabel="Century Grill"
      titleId="cengri02-title"
      hero={{
        src: "/images/cengrioverview/hero-banner.jpg",
        alt: "Century Grill at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CengriNavChrome />}
      previousHref="/cengri01"
      overviewHref="/cengrioverview"
      nextHref="/cengri03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Century Grill International"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Joseph R. Holden",
            "Silver Tower, Apt. 618",
            "125-10 Queens Blvd.",
            "Kew Gardens 15, New York",
            "BO 1-5200",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 11, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 49; Lot 2", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["14,351 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Wuest and Bailey",
            "32-02 30th Avenue",
            "Long Island City, New York",
            "AS 8-0289",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["System Structures, Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/cengri02/line-drawing.jpg",
        width: 600,
        height: 284,
        alt: "Century Grill",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              Century Grill is an alumnus of the 1939-1940 New York World&apos;s
              Fair. Located in the Transportation Area, it will house an unusual
              restaurant, featuring hamburger steaks prepared in accordance with
              the customs and recipies of those nations of the world having
              exhibits at the Fair. They will feature charcoal specialties.
            </>
          ),
        },
      ]}
    />
  );
}
