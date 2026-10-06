import type { Metadata } from "next";
import { DanwatNavChrome } from "@/components/DanwatNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Dancing Waters — nywf64.com",
  description:
    "Dancing Waters entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dancing Waters Information Manual page — “manual” standard.
 * Body from legacy danwat02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (Wold's Fair, Fairgroudns, through-tank, inervals, opeing,
 * accompaniement) preserved.
 */
export default function Danwat02Page() {
  return (
    <InformationManualPage
      heroLabel="Dancing Waters"
      titleId="danwat02-title"
      hero={{
        src: "/images/danwatoverview/hero-banner.jpg",
        alt: "Dancing Waters at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<DanwatNavChrome />}
      previousHref="/danwat01"
      overviewHref="/danwatoverview"
      nextHref="/danwat03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["Dancing Waters"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Sam Shayon",
            "Dancing Waters, Incorporated",
            "250 West 57th Street",
            "New York 19, New York",
            <>CI&nbsp;7-1348</>,
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 25, 1963"],
        },
        {
          label: "CHARGES",
          lines: [
            "Adults . . . . .50-.75c",
            "Children . . . .50c",
            "(under 12)",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 57; Lot 8", "Lake Amusement Area"],
        },
        {
          label: "AREA",
          lines: ["7.475 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Hannibal F. Zumbo",
            "32 Court Street",
            "Brooklyn, 1, New York",
            <>TR&nbsp;5-8430</>,
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Sam Shayon"],
        },
      ]}
      primaryFigure={{
        src: "/images/danwat/danwat01.jpg",
        width: 600,
        height: 305,
        alt: "Dancing Waters",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The internationally famous Dancing Waters display, which was first
              introduced into this country at Radio City Music Hall in 1953 and
              which has since been shown throughout the western hemisphere, will
              be presented in a specially constructed air-supported type building
              at the New York Wold&apos;s Fair. The building shaped like a
              quonset hut was designed by Air-Tech Industries, Inc. and will be
              the only one of its kind on the Fairgroudns. This unique theatre
              building will seat an audience of approximately 500 people for a
              single showing. There will be performances every 15 to 20 minutes
              around the clock during the operating hours of the Fair.
            </>
          ),
        },
        {
          body: (
            <>
              The Dancing Waters display will be augmented by special and unique
              features for the World&apos;s Fair presentation. Nineteen motors,
              activated from an electrically operated console, played like an
              organ, forcing thousands of gallons of re-circulated water through
              more than 4,000 jets, to a controlled height of 20 feet, from
              portable sections of pipe and cable, fitted together into a
              portable rubber through-tank, all ingeniously put together - make
              up the Dancing Waters. There is a wire control for each jet. The
              wires are connected to the portable switchboard which looks like an
              organ console. The operator stands at the board, pushes the buttons
              and throws the switches, to make the water perform as it is forced
              through the jets by the motors, with a combined 15 horsepower. The
              water is contained in the shallow collapsible rubber trough into
              which the pipes are set, some long, some short, some circular, in
              different sizes and shapes. At inervals along the top of each pipe
              are holes capped by small jets and nozzles. The direction and size
              of the opeing of each nozzle can be changed at will.
            </>
          ),
        },
        {
          body: (
            <>
              With glorious multi-colored lighting, accompanied by thrilling and
              exciting music, the Dancing Waters presents limitless formations,
              effects, and combinations, from a &quot;fireworks display&quot; to
              classical ballet scenes, with the waters actually dancing waltzes,
              tangos, and swirling and swishing in modern intricate dance
              movements. As the sparkling waters rise and fall under the colorful
              lights to the accompaniement of music, the waters form amazing
              combinations and effects, which are breathtaking in their beauty.
            </>
          ),
        },
      ]}
    />
  );
}
