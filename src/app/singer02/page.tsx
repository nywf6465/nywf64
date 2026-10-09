import type { Metadata } from "next";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Singer Bowl — nywf64.com",
  description:
    "Singer Bowl entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl Information Manual page — “manual” standard.
 * Body from legacy singer02.html. Layout: InformationManualPage (/bell02).
 */
export default function Singer02Page() {
  return (
    <InformationManualPage
      heroLabel="Singer Bowl"
      titleId="singer02-title"
      hero={{
        src: "/images/singeroverview/hero-banner.jpg",
        alt: "Singer Bowl at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SingerNavChrome />}
      previousHref="/singer01"
      overviewHref="/singeroverview"
      nextHref="/singer03"
      factsLeft={[
        {
          label: "WORLD'S FAIR ASSEMBLY AREA",
          lines: ["Singer Bowl (the Arena)"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Walter Giebelhaus",
            "Program Manager",
            "New York World's Fair 1964-65 Corp.",
            "Flushing Meadow Park",
            "Flushing, New York, 11380",
            "WF 4-2313",
          ],
        },
        {
          label: "EXHIBIT DISPLAY AREA REP.",
          lines: [
            "Mr. James C. Bolt",
            "Singer Company",
            "30 Rockefeller Plaza",
            "New York 20, New York",
            "LT 1-4800",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 21, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 35A; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["170,976 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Eggers and Higgins",
            "100 East 42nd Street",
            "New York 17, New York",
            "OX 7-3780",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["T.G.K. Construction Co., Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "RENTAL CHARGE",
          lines: ["Information Upon Request"],
        },
      ]}
      primaryFigure={{
        src: "/images/singer02/sinbow31.jpg",
        width: 600,
        height: 196,
        alt: "Singer Bowl",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Singer Bowl, an open air stadium, lighted for night use, has a
              seating capacity of 15,000 bleacher type seats surrounding an open,
              green macadam play area approximately 110 feet by 270 feet. There
              is a moveable arena stage 35 feet by 60 feet, arranged so that it
              can be used either in the center of the arena or along one side.
              Three thousand (3,000) additional seats can be arranged on the play
              area if required.
            </>
          ),
        },
        {
          body: (
            <>
              The arena is equipped for two mobile TV pick ups which are limited
              to daytime use since no special TV lighting has been provided.
              Dressing rooms are available for 200 people. The Singer Bowl is the
              scene of many attractive athletic and outdoor events and meetings
              of large groups.
            </>
          ),
        },
        {
          body: (
            <>
              Facilities for smaller groups are available in the Pavilion. The
              Singer Bowl Exhibit Area houses a dramatic display by the Singer
              Company of new developments in personalized fashion and modern
              homemaking.
            </>
          ),
        },
      ]}
    />
  );
}
