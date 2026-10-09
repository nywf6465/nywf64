import type { Metadata } from "next";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Billy Graham — nywf64.com",
  description:
    "Billy Graham entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham Information Manual page — “manual” standard.
 * Body from legacy bilgra02.html. Layout: InformationManualPage (/bell02).
 */
export default function Bilgra02Page() {
  return (
    <InformationManualPage
      heroLabel="Billy Graham"
      titleId="bilgra02-title"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      previousHref="/bilgra01"
      overviewHref="/bilgra01"
      nextHref="/bilgra03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["The Billy Graham", "Evangelistic Association"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Dan Platt",
            "Billy Graham Pavilion Office",
            "Hotel Park Sheraton",
            "7th Avenue and 56th Street",
            "New York, New York, 10019",
            "JU 2-2561 or CI 7-8000",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 21, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 21; Lot 25", "International Area"],
        },
        {
          label: "AREA",
          lines: ["57,440 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Edward Durell Stone",
            "7 East 67th Street",
            "New York, New York, 10021",
            "LE 5-1144",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thompson-Brinkworth, Inc."],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Robert Marston",
            "The Rowland Company, Inc.",
            "415 Madison Avenue",
            "New York, New York, 10017",
            "MU 8-1200",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Ottley"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/bilgra02/line-drawing.jpg",
        width: 600,
        height: 427,
        alt: "Billy Graham Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              A theatre seating 400 people is planned, to show a half-hour, wide
              screen, color and stereophonic sound film highlighting Billy
              Graham&apos;s evangelistic crusades.
            </>
          ),
        },
        {
          body: (
            <>
              Surrounding the theatre is an informational display area and
              various small counseling rooms.
            </>
          ),
        },
        {
          body: (
            <>
              The audience is invited to enter from the front (New York Avenue)
              approach and are directed to the rear of the site, along pathways
              leading to the Avenue of the Americas.
            </>
          ),
        },
        {
          body: (
            <>
              Dr. Graham plans occasional personal appearances at the Fair and a
              possibility exists that he will use the facilities of the William
              A. Shea Stadium if available - for one or more major gatherings.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/bilgra02/produced-photo.jpg",
        width: 600,
        height: 339,
        alt: "The Billy Graham Evangelistic Association",
        bordered: true,
        title: "The Billy Graham Evangelistic Association",
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
