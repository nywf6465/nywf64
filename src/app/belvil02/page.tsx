import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Belgian Village — nywf64.com",
  description:
    "Belgian Village entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village Information Manual page — “manual” standard.
 * Body from legacy belvil02.html (no primary photo; SOURCE under FEATURES).
 * Layout: InformationManualPage (/bell02).
 */
export default function Belvil02Page() {
  return (
    <InformationManualPage
      heroLabel="Belgian Village"
      titleId="belvil02-title"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belvil01"
      overviewHref="/belvil01"
      nextHref="/belvil03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Belgian Village"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Roger de Coninck",
            "Avocat a la Cour",
            "221 rue Americaine",
            "Brussels 5, Belgium",
            "and",
            "Mr. Robert P. Mackey",
            "Robert Straile Fair Company, Inc.",
            "Lefrak Tower",
            "97-45 Queens Boulevard",
            "Rego Park, New York",
            "TW 6-7250",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 10, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 25, 27; Lot 1", "International Area"],
        },
        {
          label: "AREA",
          lines: ["164,811 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Alfons De Rijdt",
            "Boulevard Brand Whitlock, 85",
            "Brussels 4, Belgium",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Mr. Robert J. Hume", "Starrett Brothers and Eken, Inc."],
        },
      ]}
      features={[
        {
          body: (
            <>
              The Belgian Village will consist of a 17 block complex modeled
              after existing buildings in Belgium and will include homes, canals,
              bridges, a reproduction of St. Nicholas Church in Antwerp, a town
              hall and shops.
            </>
          ),
        },
        {
          body: (
            <>
              Included is a Rathskeller underneath the Town Hall, an ice cream
              parlor, cafes, bars, restaurants and souvenir shops where visitors
              can purchase the handiwork of the copper workers, the glass blowers
              and lace makers.
            </>
          ),
        },
        {
          body: (
            <>
              Folk dances and a Flemish festival of plays will be held daily in
              the public squares. An old Belgian carousel will be located in one
              of the squares.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      secondaryFigure={{
        src: "/images/belvil02/produced-photo.jpg",
        width: 600,
        height: 351,
        alt: "Belgian Village",
        bordered: true,
        title: "Belgian Village",
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
