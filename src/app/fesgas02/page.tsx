import type { Metadata } from "next";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Festival of Gas — nywf64.com",
  description:
    "Festival of Gas entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas Information Manual page — “manual” standard.
 * Body from legacy fesgas02.html. Layout: InformationManualPage (/bell02).
 * Preserve typos “exhibt” and “Gove of Gas Production”.
 */
export default function Fesgas02Page() {
  return (
    <InformationManualPage
      heroLabel="Festival of Gas"
      titleId="fesgas02-title"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas01"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Festival of Gas"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Stanley B. Finch",
            "Executive Secretary",
            "Gas, Incorporated",
            "60 East 42nd Street",
            "New York 17, New York",
            "MU 2-8743",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. James Beall",
            "Director, Public Information",
            "American Gas Association",
            "605 Third Avenue",
            "New York 16, New York",
            "972-5500",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 28, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 15; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["79,290 sq. ft."],
        },
        {
          label: "ARCHITECT AND DESIGNER",
          lines: [
            "Walter Dorwin Teague Assocs.",
            "415 Madison Avenue",
            "New York 17, New York",
            "MU 8-0100",
          ],
        },
        {
          label: "RESTAURANT OPERATED BY",
          lines: ["Restaurant Assocs., Inc."],
        },
        {
          label: "CONTRACTOR",
          lines: ["W. J. Barney Corporation"],
        },
      ]}
      primaryFigure={{
        src: "/images/fesgas02/fesgas62.jpg",
        width: 600,
        height: 263,
        alt: "Festival of Gas Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Festival of Gas Pavilion is a pure white structure sheltered
              by a giant white umbrella, in a setting of flowing streams and
              floating flower beds. The walls of the pavilion will be hanging
              glass permitting an unbroken view of the Fairgrounds.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The pavilion will combine the story of gas power with
              entertainment. Visitors will get their first preview of the
              exhibt from a gaily decorated carousel elevated in the center of
              the pavilion. As the carousel revolves slowly, recorded narration
              will point out special features of the pavilion, which can be
              visited after the four minute ride.
            </>
          ),
        },
        {
          body: (
            <>
              Among the special exhibits will be a three section Fun House of
              the Future. One feature of the Fun House will be the Kitchen of
              the Future where visitors will watch a virtually empty room turn
              into the kitchen of tomorrow, where appliances emerge from walls,
              floors, and ceiling as they are needed by the housewife.
            </>
          ),
        },
        {
          body: (
            <>
              Visitors will see a Tree of Gas Transmission and a Gove of Gas
              Production which graphically demonstrate the process involved in
              the discovery, production, transport and storage of gas. A giant,
              revolving ferris wheel will display the latest modern gas
              appliances.
            </>
          ),
        },
        {
          body: (
            <>
              Another major exhibit will be the Theatre of Food. Famous chefs
              from all over the world will demonstrate their specialties in the
              Theatre.
            </>
          ),
        },
        {
          body: (
            <>
              A 15 minute puppet show on film will be shown on three, five foot
              screens. Tom Tichenor is the designer of the puppets.
            </>
          ),
        },
        {
          body: (
            <>
              All these features will be in addition to the 250 seat gas air
              conditioned restaurant with transparent walls which will give
              diners the feeling that they are floating on one of the flower
              laden pools surrounding the Pavilion.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/fesgas02/fesgas61.jpg",
        width: 600,
        height: 364,
        alt: "Gas Incorporated - Festival of Gas",
        bordered: true,
        title: "Gas Incorporated - Festival of Gas",
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
