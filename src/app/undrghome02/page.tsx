import type { Metadata } from "next";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Underground World Home — nywf64.com",
  description:
    "Underground World Home entry from the World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home Information Manual page — “manual” standard.
 * Body from legacy undrghome02.html. Layout: InformationManualPage (/bell02).
 */
export default function Undrghome02Page() {
  return (
    <InformationManualPage
      heroLabel="Underground World Home"
      titleId="undrghome02-title"
      hero={{
        src: "/images/undrghomeoverview/hero-banner.jpg",
        alt: "Underground World Home at the 1964/1965 New York World’s Fair",
        width: 2073,
        height: 758,
      }}
      nav={<UndrghomeNavChrome />}
      previousHref="/undrghome01"
      overviewHref="/undrghomeoverview"
      nextHref="/undrghome03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Underground Home Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Herman A. Diaz",
            "Underground World Home",
            "New York World's Fair",
            "World's Fair, New York 11380",
            "AR 1-7770",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Francis Miller", "Port of New York Authority"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["July 30, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 50; Lot 5",
            "Avenue of Transportation",
            "Transportation Area",
          ],
        },
        {
          label: "AREA",
          lines: ["36,165 Sq. Ft."],
        },
        {
          label: "ARCHITECT",
          lines: ["Billy Cox", "Lubbock, Texas"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Sawyer & Dolfinger"],
        },
        {
          label: "ADMISSION",
          lines: [
            "Adults $1.00",
            "Students $ .50",
            "Children under 12,",
            "accompanied by adults, free",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/undrghome02/uwh23.jpg",
        width: 600,
        height: 219,
        alt: "Underground World Home exhibit",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Underground World Home exhibit is a large three-bedroom modern{" "}
              <u>home</u>, designed for luxurious and convenient living. It is
              completely enclosed within a concrete shell, the top of which is 5
              feet under the earth&apos;s surface. All the most modern appliances
              and furnishings are featured in its interior. Its
              &quot;exterior&quot; features a <u>patio</u>, <u>terrace</u> and
              terrace garden area in which actual plants and flowers grow.
            </>
          ),
        },
        {
          body: (
            <>
              Proponets of the Underground Home take modern conveniences
              underground with them and live better. Underground living boasts of
              pure air, elimination of noise, freedom from all climate hazards and
              nuisances, lower heating, air-conditioning insurance and
              maintenance costs, more durable construction and a possible
              solution to some of the problems set by the predicted population
              explosions.
            </>
          ),
        },
        {
          body: (
            <>
              &quot;<u>Soup &apos;n Salad Bar</u>&quot; is a garden cafe
              specializing in gourmet soups, seafood salads and Crab Burgers.
            </>
          ),
        },
        {
          body: (
            <>
              <u>Night Club</u>. The Underground World Home night club is a{" "}
              <u>discotheque</u> night spot located 15 feet underground. Hours:
              10 P.M. to 2 A.M. nightly.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/undrghome02/uwh24.jpg",
        width: 600,
        height: 357,
        alt: "Underground World Home",
        bordered: true,
        title: "Underground World Home",
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
