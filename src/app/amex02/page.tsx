import type { Metadata } from "next";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — American Express — nywf64.com",
  description:
    "American Express pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express Information Manual page — “manual” standard.
 * Body from legacy amex02.html. Layout: InformationManualPage (/bell02).
 */
export default function Amex02Page() {
  return (
    <InformationManualPage
      heroLabel="American Express"
      titleId="amex02-title"
      hero={{
        src: "/images/amexoverview/hero-banner.jpg",
        alt: "American Express at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<AmexNavChrome />}
      previousHref="/amex01"
      overviewHref="/amex01"
      nextHref="/amex03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["American Express Co."],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. James A. Henderson",
            "Executive vice President",
            "American Express Co.",
            "65 Broadway",
            "New York 6, New York",
            <>WH&nbsp;4-2000</>,
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Michael Fooner",
            "Fred Rosen Associates",
            "717 Fifth Avenue",
            "New York, New York",
            <>PL&nbsp;1-2970</>,
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 10, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 21; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["23,899 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Kelly and Gruzen",
            "10 Columbus Circle",
            "New York 19, New York",
            "JU 2-7040",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Fuller Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/amex02/line-drawing.jpg",
        width: 600,
        height: 234,
        alt: "American Express pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The American Express pavilion is a three-story building constructed
              mainly of natural white oak.
            </>
          ),
        },
        {
          body: (
            <>
              One million dollars in cash hangs on a &quot;money tree&quot; in
              front of the pavilion. In addition to American dollars, the
              currency of foreign nations is part of the tree&apos;s leafy
              exhibit, along with travelers cheques. The &quot;money tree&quot;
              symbolizes the international economic and cultural forces of the
              world which grow strong through interchange among people.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The American Express pavilion houses the official World&apos;s Fair
              Scale model, a 54-foot long miniature reproduction of the
              exposition, built at a cost of more than a half-million dollars.
              The model is on view for visitors wishing to orient themselves and
              plan their activities upon arrival at the Fair grounds.
            </>
          ),
        },
        {
          body: (
            <>
              The pavilion houses a Fair information and travel information
              service for visitors.
            </>
          ),
        },
        {
          body: (
            <>
              A special feature of the pavilion permits visitors to cash personal
              checks drawn on their banks back home via Western Union direct wire
              transactions. Other services include money orders, foreign
              remittances and foreign exchange of all kinds.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/amex02/produced-photo.jpg",
        width: 600,
        height: 343,
        alt: "American Express",
        bordered: true,
        title: "American Express",
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
