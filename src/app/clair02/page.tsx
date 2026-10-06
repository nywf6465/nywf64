import type { Metadata } from "next";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Clairol — nywf64.com",
  description:
    "Clairol Color Carousel entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol Information Manual page — “manual” standard.
 * Body from legacy clair02.html. Layout: InformationManualPage (/bell02).
 */
export default function Clair02Page() {
  return (
    <InformationManualPage
      heroLabel="Clairol"
      titleId="clair02-title"
      hero={{
        src: "/images/clairoverview/hero-banner.jpg",
        alt: "Clairol Color Carousel at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ClairNavChrome />}
      previousHref="/clair01"
      overviewHref="/clairoverview"
      nextHref="/clair03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Clairol Color Carousel"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Jack Shor",
            "Corporate Public Relations Director",
            "Clairol, Incorporated",
            "1290 Avenue of the Americas",
            "New York 19, New York",
            "957-3100",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Richard Weiner, Sr. Vice Pres.",
            "Ruder and Finn, Incorporated",
            "130 East 59th Street",
            "New York 22, New York",
            "PL 9-1800",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 29, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 11; Lot 21", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["20,000 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Robinson, Capsis, Stern Assocs",
            "547 West Broadway",
            "New York 12, New York",
            "OR 7-0440",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller"],
        },
      ]}
      primaryFigure={{
        src: "/images/clair02/line-drawing.jpg",
        width: 600,
        height: 385,
        alt: "Clairol Color Carousel line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Clairol Exhibit is designed exclusively for women and admission
              is restricted to women.
            </>
          ),
        },
        {
          body: (
            <>
              The building is a circular, cage-like structure. The facade is
              decorated with sweeping flower forms in a technique reminiscent of
              art nouveau. Behind the translucent flowers, there are enormous
              butterfly shapes that move majestically as the carousel turns.
            </>
          ),
        },
        {
          body: (
            <>
              Each woman who visits the building receives a personal hair coloring
              analysis while seated in a private booth.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/clair02/produced-photo.jpg",
        width: 600,
        height: 337,
        alt: "Clairol Color Carousel",
        bordered: true,
        title: "Clairol Color Carousel",
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
