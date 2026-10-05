import type { Metadata } from "next";
import { CarnivNavChrome } from "@/components/CarnivNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Carnival — nywf64.com",
  description:
    "Carnival entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carnival Information Manual page — “manual” standard.
 * Body from legacy carniv02.html (no primary photo; SOURCE under FEATURES).
 * Layout: InformationManualPage (/bell02).
 */
export default function Carniv02Page() {
  return (
    <InformationManualPage
      heroLabel="Carnival"
      titleId="carniv02-title"
      hero={{
        src: "/images/carnivoverview/hero-banner.jpg",
        alt: "Carnival at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CarnivNavChrome />}
      previousHref="/carniv01"
      overviewHref="/carnivoverview"
      nextHref="/carniv03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Flushing Meadows Concessions, Inc."],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. James I. C. Chiang, President",
            "Flushing Meadows Concessions, Inc.",
            "1531 Broadway",
            "New York, New York 10036",
            "CO 5-1962",
            "and",
            "Mr. Frederick Cerbini, President",
            "F & F Affiliates, Inc.",
            "1737 Quentin Street",
            "West Babylon, New York",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 19, 1965"],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 56; Lot 7", "Lake Mall", "Lake Area"],
        },
        {
          label: "AREA",
          lines: ["63,890 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Peter A. Strobel",
            "Strobel and Rongved",
            "70 West 40th Street",
            "New York, New York 10018",
            "LO 3-3931",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Mr. Randall Duell",
            "P. O. Box 191",
            "Arlington, Texas",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Tishman Realty and Construction Co."],
        },
        {
          label: "ADMISSION",
          lines: [
            "Children's rides 20c & 25c each",
            "Adult rides 35c each",
          ],
        },
      ]}
      features={[
        {
          body: (
            <>
              Several amusement rides will be featured at the entirely new
              Carnival exhibit. Inside the colorful structure are several rides
              specially scaled for younger children. Outside are larger rides
              including a &quot;Wild Mouse&quot; and &quot;Scooter&quot; bumper
              cars.
            </>
          ),
        },
        {
          body: (
            <>
              In a replica of an ocean liner, tanks of fish may be viewed through
              the portholes.
            </>
          ),
        },
        {
          body: (
            <>
              The Frontier Palace offers a varied menu and can-can dancers. The
              Carnival Club features supper-club entertainment.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1965 World's Fair Information Manual"
    />
  );
}
