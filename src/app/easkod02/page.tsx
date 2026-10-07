import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak Information Manual page.
 * Body from legacy easkod02.html. Layout: InformationManualPage (/bell02).
 */
export default function Easkod02Page() {
  return (
    <InformationManualPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod02-title"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod01"
      overviewHref="/easkodoverview"
      nextHref="/easkod03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Eastman Kodak Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. L.V. Burrows",
            "Eastman Kodak Company",
            "343 State Street",
            "Rochester 4,, New York",
            "716 LO 2-6000",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Larry Johnson",
            "J. Walter Thompson Co.",
            "420 Lexington Avenue",
            "New York 17, New York",
            "MU 6-7000",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 19, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 19; Lot 3", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["69,497 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Kahn & Jacobs",
            "2 Park Avenue",
            "New York 17, New York",
            "OR 9-3932",
          ],
        },
        {
          label: "EXHIBIT DESIGNER",
          lines: [
            "Will Burton, Inc.",
            "132 East 58th Street",
            "New York 22, New York",
            "PL 5-0220",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller"],
        },
      ]}
      primaryFigure={{
        src: "/images/easkod02/kod60.jpg",
        width: 600,
        height: 215,
        alt: "Eastman Kodak Exhibit",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The theme of the Eastman Kodak Exhibit is the
              &quot;universality of photography as an international
              language&quot;.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The pavilion will be a unique architectural showcase 363 feet long
              and topped by an 80 foot tower. The tower will contain five color
              prints 30 feet by 36 feet which will be visible both day and
              night. The floating carpet concrete roof with gently sloping
              walkways, gardens and fountains will be an attractive setting for
              camera enthusiasts who wish to photograph their family and
              friends.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The pavilion will contain two theatres. The visitor will walk into
              a huge, circular theatre and see an exploration into the unusual
              wonders of the world captured by the camera. This theatre will
              accommodate 700 people at one time or 35,000 during an average
              day. The smaller theatre will be used for lively audio-visual
              demonstrations of products by Kodak and its subsidiary companies
              in chemical, textile and fashion fields.
            </>
          ),
        },
        {
          body: (
            <>
              New audio-visual techniques will be used throughout the building
              and in the 26 different exhibit areas. The pavilion will
              communicate photography&apos;s ability to measure and document
              scientific progress, and industry&apos;s growing use of
              photography as an ingenious and trustworthy production tool.
              Photography information will be provided by qualified personnel.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/easkod02/kod61.jpg",
        width: 600,
        height: 362,
        alt: "Eastman Kodak Company",
        bordered: true,
        title: "Eastman Kodak Company",
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
