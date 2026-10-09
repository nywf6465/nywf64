import type { Metadata } from "next";
import { AstfountNavChrome } from "@/components/AstfountNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Astral Fountain — nywf64.com",
  description:
    "Astral Fountain entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Astral Fountain Information Manual page — “manual” standard.
 * Body from legacy astfount02.html. Layout: InformationManualPage (/bell02).
 */
export default function Astfount02Page() {
  return (
    <InformationManualPage
      heroLabel="Astral Fountain"
      titleId="astfount02-title"
      hero={{
        src: "/images/astfountoverview/hero-banner.jpg",
        alt: "Astral Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<AstfountNavChrome />}
      previousHref="/astfount01"
      overviewHref="/astfount01"
      nextHref="/astfount03"
      factsLeft={[
        {
          label: "FOUNTAIN",
          lines: ["Astral Fountain"],
        },
        {
          label: "CONSULTANTS",
          lines: [
            "Hamel and Langer",
            "652 First Avenue",
            "New York 16, New York",
            "OR 9-9140",
          ],
        },
        {
          label: "CONTRACTORS",
          lines: [
            "D. Fortunato, Inc.-General",
            "Hatzel &\u00a0Buehler-Electrical",
            "T.F. Mulligan-Mechanical",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Court of Stars, south of the", "Theme Center"],
        },
        {
          label: "AREA",
          lines: ["pool basin 140 feet in diameter"],
        },
        {
          label: "DESIGNER",
          lines: ["J. S. Hamel", "Gilmore D. Clarke", "Donald Oenslager"],
        },
      ]}
      primaryFigure={{
        src: "/images/astfount02/line-drawing.gif",
        width: 460,
        height: 255,
        alt: "Astral Fountain line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Astral Fountain features a central column of water 70 feet
              high, ringed with 40 jets flowing at the rate of 5,600 gallons per
              minute. The configuration is enhanced by a fretwork of a
              star-patterned design, 60 feet high and 60 feet in diameter, that
              rotates around the central column at a speed of two feet per
              second. The structure is adorned with 120 starr-set nozzles
              ejecting lacy streams of water totaling 2,600 gallons per minute,
              producing an unusual and delightful display.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/astfount02/produced-photo.jpg",
        width: 600,
        height: 425,
        alt: "Astral Fountain",
        bordered: true,
        title: "Astral Fountain",
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
