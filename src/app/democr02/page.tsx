import type { Metadata } from "next";
import { DemocrNavChrome } from "@/components/DemocrNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Demonstration Center — nywf64.com",
  description:
    "Demonstration Center entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Demonstration Center Information Manual page — “manual” standard.
 * Body from legacy democr02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (industiral, maor) preserved.
 */
export default function Democr02Page() {
  return (
    <InformationManualPage
      heroLabel="Demonstration Center"
      titleId="democr02-title"
      hero={{
        src: "/images/democroverview/hero-banner.jpg",
        alt: "Demonstration Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<DemocrNavChrome />}
      previousHref="/democr01"
      overviewHref="/democroverview"
      nextHref="/democr03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Demonstration Center"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Dr. Leonard P. Stavinsky",
            "Demonstration Center",
            "World's Fair, New York 11380",
            <>AR&nbsp;1-4110</>,
            "and",
            "Dr. Nathan Dechter",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 8, 1961"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 9; Lot 2",
            "Promenade of Industry",
            "Industrial Area",
          ],
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
            "New York, New York 10019",
            <>JU&nbsp;2-1540</>,
          ],
        },
        {
          label: "CONTRACTOR",
          lines: [
            "Hegeman-Harris Company",
            "Cauldwell-Wingate",
            "Vermilya-Brown Company, Inc.",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/democr/democr02.jpg",
        width: 600,
        height: 244,
        alt: "Demonstration Center",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Demonstration Center is a multiple exhibitor pavilion. The
              industiral and educational theme of the exhibit is the &quot;School
              of Tomorrow.&quot;
            </>
          ),
        },
        {
          body: (
            <>
              The two-story, wedge-shaped pavilion is supported by free standing
              exterior columns, sculpturally articulated to form colonnades along
              both sides of the building. The exterior walls are of
              stone-texture. There are two observation terraces on the second
              floor.
            </>
          ),
        },
        {
          body: (
            <>
              Industrial exhibits tell the story of major American corporations.
              Education programs are conducted in the Audio-Visual Demonstration
              Center and in other sections of the pavilion. &quot;Dialogues in
              Depth&quot; -- a series of live televised interviews with the great
              minds and personalities of our time -- originate from the
              Demonstration Center. In major exhibit areas Fair visitors are able
              to operate the dramatic new teaching machines, participate in
              programmed instruction or observe high school students in a
              supervised vocational training.
            </>
          ),
        },
        {
          body: (
            <>
              Major Exhibit Areas : Included in the maor exhibit area are the
              &quot;School of Tomorrow&quot; model and display cases;
              Audio-Visual Demonstration Center; Playground of Tomorrow; New York
              Daily News public opinion poll and voter education exhibit; civic
              education; education advisory programs for parents and students;
              children&apos;s publications; games of mathematics and logic; the
              studisphere; writing over the ages; historic documents exhibit;
              environmental control for learning, working, and living; academic
              processional; observation terrace and lounge; vocationland;
              professional education, as well as other educational, scientific and
              industrial exhibits.
            </>
          ),
        },
      ]}
    />
  );
}
