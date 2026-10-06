import type { Metadata } from "next";
import { DenmarkNavChrome } from "@/components/DenmarkNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Denmark — nywf64.com",
  description:
    "Denmark pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Denmark Information Manual page — “manual” standard.
 * Body from legacy denmark02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (Agricultrual) preserved.
 */
export default function Denmark02Page() {
  return (
    <InformationManualPage
      heroLabel="Denmark"
      titleId="denmark02-title"
      hero={{
        src: "/images/denmarkoverview/hero-banner.jpg",
        alt: "Denmark at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<DenmarkNavChrome />}
      previousHref="/denmark01"
      overviewHref="/denmarkoverview"
      nextHref="/denmark03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Danish Agricultural Marketing Board"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Erik Stockmann, Managing Director",
            "Danish Agricultrual Marketing Board",
            "6, Vester Farimagsgade",
            "Copenhagen V., Denmark",
            "and",
            "Mr. Just Lunning, Director General",
            "Pavilion of Denmark",
            "New York World's Fair 1964-1965",
            "667 Fifth Avenue",
            "New York 22, New York",
            <>PL&nbsp;1-2400</>,
          ],
        },
        {
          label: "PUBLIC RELATIONS REPRESENTATIVE",
          lines: [
            "Mr. Arne Christiansen",
            "Counsellor of Embassy",
            "Danish Information Office",
            "588 Fifth Avenue",
            "New York 36, New York",
            <>JU&nbsp;63320</>,
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Douglas Beaton"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 6, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 22; Lot 26 International Area"],
        },
        {
          label: "AREA",
          lines: ["21,481 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Erik Moller",
            "12 Lille Kongensgade",
            "Copenhagen K., Denmark",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: [
            "Mr. Eric Ostergaard",
            "Sessinghaus and Ostergaard",
          ],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "CHARGES",
          lines: ["Playground for children .50c"],
        },
      ]}
      primaryFigure={{
        src: "/images/denmark/denmar02.jpg",
        width: 600,
        height: 213,
        alt: "Pavilion of Denmark",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The pavilion of Denmark features a furniture display, arts and
              crafts, souvenirs and gift packages of Danish food specialties. A
              restaurant, accommodating 200 persons, is specializing in native
              dishes, including cold table service and a bar serving Aquavit and
              other Danish and international beverages. Outside the pavilion, a
              terrace restaurant seats an additional 75 persons.
            </>
          ),
        },
        {
          body: (
            <>
              A playground, designed in cooperation with the architects of the
              famed &quot;Tivoli&quot; of Copenhagen has attendants and
              facilities for the care of children.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/denmark/denmar03.jpg",
        width: 600,
        height: 365,
        alt: "Denmark",
        bordered: true,
        title: "Denmark",
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
