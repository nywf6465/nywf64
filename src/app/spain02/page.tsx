import type { Metadata } from "next";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Spain — nywf64.com",
  description:
    "Spanish Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain Information Manual page — “manual” standard.
 * Body from legacy spain02.html. Layout: InformationManualPage (/bell02).
 */
export default function Spain02Page() {
  return (
    <InformationManualPage
      heroLabel="Spain Pavilion"
      titleId="spain02-title"
      hero={{
        src: "/images/spainoverview/hero-banner.jpg",
        alt: "Spain Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<SpainNavChrome />}
      previousHref="/spain01"
      overviewHref="/spainoverview"
      nextHref="/spain03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Spanish Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Comisaria General",
            "El Pabellon de Espana",
            "Avenida del Generalisimo 30",
            "Madrid, Spain",
            "and",
            "Mr. Manuel Ortuno",
            "The Pavilion of Spain",
            "850 Third Avenue- 12 Floor",
            "New York 22, N. Y.",
            "PL 3-9620",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 17, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 22; Lot 25", "International Area"],
        },
        {
          label: "AREA",
          lines: ["78,000 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "D. Francisco Javier Carvajal Ferrer",
            "Breton de los Herreros 67",
            "Madrid, Spain",
            "and",
            "Kelly and Gruzen",
            "10 Columbus Circle",
            "New York 19, N. Y.",
            "JU 2-7040",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Paul Tishman Company"],
        },
      ]}
      primaryFigure={{
        src: "/images/spain02/spain08.jpg",
        width: 600,
        height: 363,
        alt: "Spanish Pavilion",
      }}
      features={[
        {
          body: (
            <>
              Spain&apos;s influence in the discovery, colonization and
              independence of America will be the dominant theme of the Spanish
              Pavilion. The Pavilion will consist of three buildings constructed
              with steel frames and pre-cast concrete wall panels.
            </>
          ),
        },
        {
          body: (
            <>
              One section will be an 850-seat theatre for the presentation of a
              variety of programs, from concerts by top Spanish artists, to
              fashion shows. There will also be a festival of motion pictures
              dealing with history, tradition, and present industrial and
              artistic life of Spain.
            </>
          ),
        },
        {
          body: (
            <>
              A second area will consist of two galleries. One will be an
              exhibit of paintings, sculpture and antiques, including a number
              of masterpieces on loan from Spanish museums and private
              collections. The second gallery will be composed of 12 different
              exhibits, each representative of a period in the history of
              Spanish painting.
            </>
          ),
        },
        {
          body: (
            <>
              There will be three restaurants and a &quot;wine cave&quot;. Five
              patios will provide space for visitors to relax amid pools,
              fountains, trees and flowers.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      secondaryFigure={{
        src: "/images/spain02/spain98.jpg",
        width: 600,
        height: 360,
        alt: "Spanish Pavilion",
        bordered: true,
        title: "Spanish Pavilion",
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
