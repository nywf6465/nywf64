import type { Metadata } from "next";
import { AertowNavChrome } from "@/components/AertowNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Aerial Tower Ride — nywf64.com",
  description:
    "Aerial Tower Ride & Waffle Restaurant entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Aerial Tower Ride Information Manual page — “manual” standard.
 * Body from legacy aertow02.html. Layout: InformationManualPage (/bell02).
 */
export default function Aertow02Page() {
  return (
    <InformationManualPage
      heroLabel="Aerial Tower Ride"
      titleId="aertow02-title"
      hero={{
        src: "/images/aertowoverview/hero-banner.jpg",
        alt: "Aerial Tower Ride & Waffle Restaurant at the 1964/1965 New York World’s Fair",
        width: 1911,
        height: 823,
      }}
      nav={<AertowNavChrome />}
      previousHref="/aertow01"
      overviewHref="/aertow01"
      nextHref="/aertow03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Waffle Restaurant and Aerial Ride"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Constant D. Mestdag",
            "Mr. Howard Parker",
            "Mr. Marcel Colart",
            "B. F. E. Incorporated",
            "AR 1-1030",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 1, 1962"],
        },
        {
          label: "CHARGES FOR AERIAL RIDE",
          lines: ["Adults $1.00", "Children (under 12) $.50"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 57; Lot 7",
            "Meadow Lake Promenade",
            "Lake Area",
          ],
        },
        {
          label: "AREA",
          lines: ["12,000 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Hannibal Zumbo",
            "32 Court Street",
            "Brooklyn 1, New York",
            "TR 5-8430",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Frank P. Padron"],
        },
      ]}
      primaryFigure={{
        src: "/images/aertow02/tower-photo.jpg",
        width: 300,
        height: 534,
        alt: "Aerial Tower Ride",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              BFE&apos;s Aerial Tower ride is the only one of its kind in the
              world. Four safely designed cabins, each carrying up to 15 persons,
              rise slowly to a height of 120 feet, one of the highest observation
              points at the Fair. The cabin makes a complete turn before its slow
              descent, affording a panoramic view of the Fair.
            </>
          ),
        },
        {
          body: (
            <>
              The 12,000 square foot area also features a unique Belgian taste
              sensation, the{" "}
              <span className={manualStyles.u}>Bel-Gem Waffle</span> or Gaufre
              (pronounced Go-fra). This waffle, from a special recipe, hundreds of
              years old, is layered with thick whipped cream and topped with
              fresh, sliced strawberries.
            </>
          ),
        },
      ]}
    />
  );
}
