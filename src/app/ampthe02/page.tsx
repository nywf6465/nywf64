import type { Metadata } from "next";
import { AmptheNavChrome } from "@/components/AmptheNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Amphitheatre — nywf64.com",
  description:
    "Amphitheatre entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphitheatre Information Manual page — “manual” standard.
 * Body from legacy ampthe02.html. Layout: InformationManualPage (/bell02).
 */
export default function Ampthe02Page() {
  return (
    <InformationManualPage
      heroLabel="Amphitheatre"
      titleId="ampthe02-title"
      hero={{
        src: "/images/amptheoverview/hero-banner.jpg",
        alt: "Amphitheatre at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmptheNavChrome />}
      previousHref="/ampthe01"
      overviewHref="/ampthe01"
      nextHref="/ampthe03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["Amphitheatre"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Meyer Davis, President",
            "Mr. Leon Leonidoff, Vice President",
            "Mr. Thomas Rudel, Treasurer",
            "Amphitheatre, Incorporated",
            "119 West 57th Street",
            "New York 19, New York",
            "CI 7-6161",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Bill Doll",
            "Bill Doll and Company",
            "Michael Todd Building",
            "1700 Broadway",
            "New York 19, New York",
            "JU 6-8894",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 5, 1961"],
        },
        {
          label: "ADMISSION",
          lines: [
            "$1.00 General Admission - 5200 seats",
            "$2.00 Reserved - 3800 seats",
            "$3.00 Reserved - 1000 seats",
            "4 shows daily-Monday thru Friday",
            "2:00, 4:30, 7:00 and 9:30",
            "5 shows Saturday, Sunday and Holidays",
            "12:30, 3:00, 5:30, 8:00, 10:30",
          ],
        },
        {
          label: "SEATING CAPACITY",
          lines: ["10,000 seats"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Lake Amusement Area"],
        },
        {
          label: "ARCHITECT - REHABILITATION",
          lines: [
            "Sears and Kopf",
            "200 Madison Avenue",
            "New York 16, New York",
            "MU 9-0929",
          ],
        },
        {
          label: "ROOF ARCHITECT",
          lines: [
            "Edward W. Slater",
            "244 East 32nd Street",
            "New York 16, New York",
            "LE 2-9575",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "The Displayers, Incorporated",
            "635 West 54th Street",
            "New York 19, New York",
            "PL 7-6500",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["D. Fortunato, Incorporated"],
        },
        {
          label: "ORCHESTRA",
          lines: ["Meyer Davis Orchestra"],
        },
        {
          label: '"WONDERWORLD" PRODUCED AND DIRECTED BY',
          lines: ["Mr. Leon Leonidoff"],
        },
      ]}
      primaryFigure={{
        src: "/images/ampthe02/line-drawing.jpg",
        width: 600,
        height: 198,
        alt: "Amphitheatre line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Amphitheatre&apos;s mammoth production, &quot;Wonderworld&quot;,
              will have a cast of 250 and will undoubtedly be the largest stage
              show in the world. Utilizing the most lavish scenic effects, the
              musical spectacle will be unveiled in three parts. The presentation
              will be performed in the water, on the stage and in the air. The
              spectacle will run the gamut from a giant waterfall featured in a
              night club scene acted and danced on the water, to the launching of
              a lady astronaut in a flight to the moon.
            </>
          ),
        },
        {
          body: (
            <>
              In one scene, sixteen Alfa Romeo Spiders will zoom over the stage
              and pool in a series of wild dashes. In another, one of Europe&apos;s
              foremost comedy acts will be introduced at the height of the hoopla
              attending the crowning of Miss Independence during a 4th of July
              celebration in a city of mobile homes.
            </>
          ),
        },
        {
          body: (
            <>
              When the lady astronaut is launched moonward in the climactic scene
              of &quot;Wonderworld&quot;, the audience will see the actual rising
              of the capsule, followed by a TV scene depicting the astronaut,
              weightless in the interior of the capsule. Then spectators watch the
              capsule whirl into space, circle the globe and finally as the
              astronaut returns and descends into the pool, the globe is
              transformed into a Unisphere. A panorama of the entire World&apos;s
              Fair is depicted in the show&apos;s finale.
            </>
          ),
        },
        {
          body: (
            <>
              The extravaganza will be presented by Mr. Meyer Davis, world&apos;s
              foremost society band impresario, and directed by Mr. Leon
              Leonidoff, senior director of Radio City Music Hall for thirty
              years.
            </>
          ),
        },
        {
          body: (
            <>
              The Amphitheatre houses the world&apos;s largest revolving stage and
              has a retractable canvas covering suspended from a catenary of steel
              cables and attached to a tilted steel arch.
            </>
          ),
        },
      ]}
    />
  );
}
