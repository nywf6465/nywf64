import type { Metadata } from "next";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Hall of Education — nywf64.com",
  description:
    "Hall of Education pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education Information Manual page — “manual” standard.
 * Body from legacy haledu02.html. Layout: InformationManualPage (/bell02).
 */
export default function Haledu02Page() {
  return (
    <InformationManualPage
      heroLabel="Hall of Education"
      titleId="haledu02-title"
      hero={{
        src: "/images/haleduoverview/hero-banner.jpg",
        alt: "Hall of Education at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HaleduNavChrome />}
      previousHref="/haledu01"
      overviewHref="/haleduoverview"
      nextHref="/haledu03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Hall of Education"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Dr. Leonard P. Stavinsky",
            "Executive vice President",
            "International Fair Consultants, Inc.",
            "10 Columbus Circle",
            "New York 19, New York",
            "JU 2-1540",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 8, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 9; Lot 2", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["50,001 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Frederick P. Wiedersum Assocs.",
            "10 Columbus Circle",
            "New York 19, New York",
            "JU 2-1540",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Cauldwell-Wingate", "Vermilya-Brown Company, Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/haledu02/democr03.jpg",
        width: 600,
        height: 246,
        alt: "Hall of Education",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Hall of Education, a multiple exhibitor pavilion, will tell
              the story of American education-past, present and future.
              Scientific and industrial exhibits will be included.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The wedge shaped pavilion, will be supported by free standing
              exterior columns, sculpturally articulated to form colonnades
              along both sides of the building.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The main floor will feature a model of &quot;the Community Center
              of the Future&quot; and &quot;the School of Tomorrow&quot;.
              Special areas on the main floor mezzanine will be devoted to:
              Science and Industry, a Library of the Future, the Audio-Visual
              Center, Teaching Machines and Programmed Instruction, an Adventure
              Playground, Vocational Training, the Fine Arts, the Story of
              Writing, Health and Medicine, Vacationland, the World of Youth,
              Educational Tours, a Model Bookstore, Public Opinion Polls, and an
              Information Retrieval Center.
            </>
          ),
        },
        {
          body: (
            <>
              Dialogues in Depth, a series of informal discussions with the
              great minds and personalities of our time, will originate live
              from the Demonstration Center, and will be preserved on film and
              tape as a compendium of living history and a legacy to the future.
              A convention auditorium, equipped for television, will accommodate
              educational and professional programs and exhibitors&apos;
              meetings. There will also be a public restaurant.
            </>
          ),
        },
      ]}
    />
  );
}
