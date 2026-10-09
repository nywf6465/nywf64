import type { Metadata } from "next";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Eastern Air Lines — nywf64.com",
  description:
    "Eastern Air Lines World's Fair Terminal entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastern Air Lines Information Manual page — “manual” standard.
 * Body from legacy eastern02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (Transporatation, orginating, teminating) is preserved.
 */
export default function Eastern02Page() {
  return (
    <InformationManualPage
      heroLabel="Eastern Air Lines"
      titleId="eastern02-title"
      hero={{
        src: "/images/easternoverview/hero-banner.jpg",
        alt: "Eastern Air Lines at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<EasternNavChrome />}
      previousHref="/eastern01"
      overviewHref="/easternoverview"
      nextHref="/eastern03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ['"World\'s Fair Terminal"'],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Edwin Smith",
            "Eastern Air Lines, Inc.",
            "10 Rockefeller Plaza",
            "New York 20, New York",
            "JU 6-4500",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August  19, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 49; Lot 4", "Transporatation Area"],
        },
        {
          label: "AREA",
          lines: ["13,622 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Becker & Becker Assoc.",
            "375 Park Avenue",
            "New York 22, New York",
            "PL 9-1678",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["V. R. H. Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/eastern02/eastern09.jpg",
        width: 600,
        height: 359,
        alt: "Eastern Air Lines World's Fair Terminal",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Eastern Air Lines exhibit will take the form of a
              &quot;World&apos;s Fair Terminal&quot;. This terminal will serve
              as a station for bus shuttle service to link the Fair with
              Eastern&apos;s highly successful non-reservation pay-on-board
              Air-Shuttle service, with flights every hour on the hour at La
              Guardia Airport, to and from both Boston and Washington.
            </>
          ),
        },
        {
          body: (
            <>
              The special Bus-Shuttle service will also be linked to Eastern&apos;s
              operations at the New York International Airport, Idlewild,
              orginating or teminating points for 134 direct daily flights to
              and from 32 airports serving 39 cities in 17 states, Canada,
              Mexico, Bermuda and Puerto Rico, with connections to many points
              in both North and South America.
            </>
          ),
        },
        {
          body: (
            <>
              In addition, to serving as one of the nine official entrances to
              the Fair, the terminal will provide an air-conditioned lounge, a
              waiting room and a ticket and information counter at which air
              travel may be purchased to any part of the free world, plus other
              air travel services.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/eastern02/eastern08.jpg",
        width: 600,
        height: 342,
        alt: "Eastern Air Lines",
        bordered: true,
        title: "Eastern Air Lines",
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
