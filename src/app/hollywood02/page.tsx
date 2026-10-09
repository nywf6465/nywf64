import type { Metadata } from "next";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import { HOLLYWOOD_HERO } from "@/components/HollywoodLegacyTopicPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Hollywood — nywf64.com",
  description:
    "Hollywood U.S.A. pavilion entry from the World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Hollywood02Page() {
  return (
    <InformationManualPage
      heroLabel="Hollywood"
      titleId="hollywood02-title"
      hero={HOLLYWOOD_HERO}
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood01"
      overviewHref="/hollywoodoverview"
      nextHref="/hollywood03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Hollywood - California"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Lee Savin, Vice President",
            "George Murphy and Associates",
            "     Entertainment Industries, Inc.",
            "9229 Sunset Boulevard",
            "Hollywood 69, California",
            "213 273-6282",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Michael Pender"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 2, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 38; Lot 1", "State Area"],
        },
        {
          label: "AREA",
          lines: ["75,375 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Randall Duell",
            "P.O. Box 191",
            "Arlington, Texas\\",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Sawyer and Dolfinger", "Port Washington, N. Y."],
        },
        {
          label: "ADMISSION",
          lines: ["Adults     $1.00", "Children  $  .50", "(under 12)"],
        },
      ]}
      primaryFigure={{
        src: "/images/hollywood02/holwod03.jpg",
        width: 600,
        height: 341,
        alt: "Line Drawing",
        source: "SOURCE: World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The glamorous movie industry will be shown to Fair visitors at the
              Hollywood USA&nbsp;Pavilion. The visitor will enter the exhibit
              through a reproduction of the facade of Graumann&apos;s Chinese
              Theatre in Hollywood. The sidewalk will have hand and foot prints
              of the movie stars.
            </>
          ),
        },
        {
          body: (
            <>
              Inside, the visitor will view many of the sets used in recent films
              including &quot;My Fair Lady&quot;, &quot;Cleopatra&quot;,
              &quot;West Side Story&quot;, &quot;The Greatest Story Ever
              Told&quot;, etc. The many facets of moviemaking will be shown, such
              as wardrobe, make-up, lighting and film techniques. In the center
              there will be a museum of the mementos of the movie industry.
            </>
          ),
        },
        {
          body: (
            <>
              Live filming will take place in a small amphitheatre in the
              Pavilion. Hollywood personalities will make personal appearances
              in the exhibit.
            </>
          ),
        },
        {
          body: (
            <>
              Included in the exhibit will be a Sunkist citrus display and a
              restaurant operated by the A and W Root Beer Company.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/hollywood02/holwod04.jpg",
        width: 600,
        height: 361,
        alt: "Hollywood California",
        bordered: true,
        title: "Hollywood California",
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
