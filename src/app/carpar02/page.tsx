import type { Metadata } from "next";
import { CarparNavChrome } from "@/components/CarparNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Carousel Park — nywf64.com",
  description:
    "Carousel Park entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carousel Park Information Manual page — “manual” standard.
 * Body from legacy carpar02.html. Layout: InformationManualPage (/bell02).
 */
export default function Carpar02Page() {
  return (
    <InformationManualPage
      heroLabel="Carousel Park"
      titleId="carpar02-title"
      hero={{
        src: "/images/carparoverview/hero-banner.jpg",
        alt: "Carousel Park at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<CarparNavChrome />}
      previousHref="/carpar01"
      overviewHref="/carparoverview"
      nextHref="/carpar03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Carousel Park"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Greer Marechal, Jr. President",
            "American Cavalcade Corporation",
            "36 West 44th Street",
            "New York, New York",
            "MU 7-7520",
            "and",
            "Mr. S.J. Dalli",
            "Carousel Park",
            "New York World's Fair",
            "World's Fair, New York 11380",
            "AR 1-4433",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 28, 1964"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 57; Lot 6",
            "Meadow Lake Promenade",
            "Lake Area",
          ],
        },
        {
          label: "AREA",
          lines: ["24,000 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Albert Marlo",
            "200 Beverly Road",
            "Brooklyn 8, New York",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: [
            "James King and Son",
            "Tishman Realty and Construction Co.",
          ],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "CAROUSEL RIDE",
          lines: ["25c"],
        },
      ]}
      primaryFigure={{
        src: "/images/carpar02/line-drawing.jpg",
        width: 600,
        height: 265,
        alt: "Carousel Park",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              A variety of food is featured along the Carousel Park boardwalk
              where the motto is &quot;a snack to a meal for under a
              dollar.&quot; Umbrella tables surrounding the famous{" "}
              <span className={manualStyles.u}>Coney Island Carousel</span> which
              features the original hand-carved{" "}
              <span className={manualStyles.u}>Feltman&apos;s Carousel Horses</span>
              .
            </>
          ),
        },
        {
          body: (
            <>Dancing and special events are held in the band shell.</>
          ),
        },
      ]}
    />
  );
}
