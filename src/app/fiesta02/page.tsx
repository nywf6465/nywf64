import type { Metadata } from "next";
import { FiestaNavChrome } from "@/components/FiestaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Fiesta — nywf64.com",
  description:
    "People-to-People Fiesta entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fiesta Information Manual page.
 * Body from legacy fiesta02.html. Layout: InformationManualPage (/bell02).
 * Preserve typo “A six complex”. Empty ADMISSION label matched from legacy.
 * Last topic — NEXT returns to overview.
 */
export default function Fiesta02Page() {
  return (
    <InformationManualPage
      heroLabel="Fiesta"
      titleId="fiesta02-title"
      hero={{
        src: "/images/fiestaoverview/hero-banner.jpg",
        alt: "Fiesta at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FiestaNavChrome />}
      previousHref="/fiesta01"
      overviewHref="/fiestaoverview"
      nextHref="/fiestaoverview"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["People-to-People Fiesta"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "John R. Reiss, General Manager",
            "People-to-People New York World's",
            "Fair Exhibits",
            "c/o Administration Building",
            "World's Fair, New York  11380",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Martin Stone"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 26, 1965"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 9, Lot 15",
            "Avenues of Commerce & Progress",
            "Industrial Area",
          ],
        },
        {
          label: "AREA",
          lines: ["152,000 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: ["Roger Thom"],
        },
        {
          label: "CONTRACTOR",
          lines: ["James King & Son"],
        },
        {
          label: "ADMISSION",
          lines: [],
        },
      ]}
      primaryFigure={{
        src: "/images/fiesta02/fiesta01.jpg",
        width: 600,
        height: 460,
        alt: "People-to-People Fiesta line drawing",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              This exhibit will consist of a group of buildings divided into five
              major complexes, United States, Africa, Asia, Latin America and
              Europe, which will house handicrafts and artifacts. A six complex,
              managed and operated by the Restaurant Associates, will prepare and
              serve foods of an international character.
            </>
          ),
        },
        {
          body: (
            <>
              Children small enough to squeeze through a small cut out in the
              fence will be admitted free.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/fiesta02/fiesta02.jpg",
        width: 600,
        height: 360,
        alt: "People to People Fiesta",
        bordered: true,
        title: "People to People Fiesta",
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
