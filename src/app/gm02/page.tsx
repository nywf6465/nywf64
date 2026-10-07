import type { Metadata } from "next";
import { GmNavChrome } from "@/components/GmNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — General Motors — nywf64.com",
  description:
    "General Motors Futurama entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Motors Information Manual page.
 * Body from legacy gm02.html. Layout: InformationManualPage (/bell02 standard).
 */
export default function Gm02Page() {
  return (
    <InformationManualPage
      heroLabel="General Motors Pavilion"
      titleId="gm02-title"
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm01"
      overviewHref="/gmoverview"
      nextHref="/gm03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["General Motors Futurama"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Harry Turton",
            "General Motors Corporation",
            "1775 Broadway",
            "New York 19, New York",
            "PL 7-4000 - ext. 182-3",
            "and",
            "Mr. Edward A. Bracken, Jr.",
            "General Motors Building",
            "Detroit 2, Michigan",
            "313 TR 3-7200",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Guy Tozzoli", "Port of New York Authority"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 8, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 51; Lot 1", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["367,006 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Albert Kahn Assocs.",
            "345 New Center Bldg.",
            "Detroit 2, Michigan",
            "313 TR 1-8500",
          ],
        },
        {
          label: "DESIGNED BY",
          lines: ["General Motors Styling Staff"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Turner Construction Co."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/gm02/gm102.jpg",
        width: 600,
        height: 314,
        alt: "General Motors Futurama line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The General Motors Futurama building at the 1964-65 New York
              World&apos;s Fair was created by GM to house an imaginative, yet
              realistic, look at what may be tomorrow&apos;s way of life.
              <br />
              <br />
              Entrance to the three-acre building is through a canopy, 10 stories
              high, which leads to the quarter-mile Futurama &quot;ride into
              tomorrow&quot; and an exhibiton of GM&apos;s pure and applied
              research. The building terminates in a domed pavilion in which
              General Motors automobiles and other products are displayed. Atop
              the pavilion is a rotating time-and-temperature indicator.
              <br />
              <br />
              The 8 1/2 - acre Futurama site is landscaped to display GM trucks,
              buses, railroad locomotives and earthmoving equipment.
              <br />
              <br />
              With visitors sitting three abreast in moving chairs, the Futurama
              ride can carry 70,000 persons each day through a portrayal of the
              importance of improved mobility as the key to mankind&apos;s
              progress.
              <br />
              <br />
              Mounted on either side of a headrest atop the back of each lounge
              chair loudspeakers, small as the palm of a hand, bring Futurama
              riders a detailed account of the world GM designers foresee for
              tomorrow. Carefully coordinated narration, sound effects and
              lighting systems enhance the visitor&apos;s feeling of being within
              the scenes through which the ride passes.
              <br />
              <br />
              Man and vehicles exploring the moon are within the first scene,
              then the ride comes to earth in the Antarctic where a weather
              central forecasts climatic conditions in every part of the globe.
              <br />
              <br />
              Viewers then dip beneath the sea for a look at ways in which the
              untold wealth there may be utilized. In the midst of dense jungle a
              machine creates a highway; in the desert a farmer tends his
              irrigated fields with remote-control machines. The ride climaxes
              with the city as a glittering complex of commerce and urban living.
              <br />
              <br />
              The science exhibit, housed in the center of the building, has been
              designed to demonstrate the feasibility of some of the ride
              proposals and illustrate General Motors&apos; product research and
              engineering.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/gm02/gm101.jpg",
        width: 600,
        height: 390,
        alt: "General Motors Futurama",
        bordered: true,
        title: "General Motors Futurama",
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
