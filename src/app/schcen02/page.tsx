import type { Metadata } from "next";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Schaefer — nywf64.com",
  description:
    "Schaefer Center pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center Information Manual page — “manual” standard.
 * Body from legacy schcen02.html. Layout: InformationManualPage (/bell02).
 */
export default function Schcen02Page() {
  return (
    <InformationManualPage
      heroLabel="Schaefer"
      titleId="schcen02-title"
      hero={{
        src: "/images/schcenoverview/hero-banner.jpg",
        alt: "Schaefer Center at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SchcenNavChrome />}
      previousHref="/schcen01"
      overviewHref="/schcenoverview"
      nextHref="/schcen03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Schaefer Center"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Robert Cooke",
            "Director of Public Relations",
            "The F. & M. Schaefer Brewing Co.",
            "430 Kent Avenue",
            "Brooklyn 11, New York",
            "EV 7-7000",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 25, 1961"],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller Co."],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 12 Lot 4", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["45,478 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Eggers & Higgins",
            "100 East 42 Street",
            "New York 17, N. Y.",
            "OX 7-3780",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Walter Dorwin Teague Assocs.",
            "415 Madison Avenue",
            "New York 17, N. Y.",
            "MU 8-0100",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/schcen02/line-drawing.jpg",
        width: 600,
        height: 293,
        alt: "Schaefer Center line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Schaefer Center will consist of two shallow domed buildings and
              will be joined by a semi-circular satellite structure. Uniquely
              designed and constructed with plastics and fiberglas, the Center
              will weigh a fifth as much as comparable conventional structures.
              Thus, the structure will be anchored to the ground rather than
              supported by walls and columns.
            </>
          ),
        },
        {
          body: (
            <>
              The roofs will be air-filled &quot;floating&quot; plastic discs held
              by compression rings. The walls will be transparent plastic, molded
              and designed to give a constant reflection of light in all
              directions. The exterior walls of the individual circular buildings
              will be supported by &quot;boomerang&quot; shaped slender steel
              columns. narrow at the base, thickening as they bend outward and
              narrowing again at the outer edge. They will support a rim, which
              will keep the inflated roof disc at an even tension. These slender
              steel columns will anchor the lightweight structure to the ground
              rather than support it.
            </>
          ),
        },
        {
          body: (
            <>
              The buildings will be surrounded by attractively landscaped gardens
              rich in foliage and flowering plants. The gardens will also include
              a free form pond on which there will be aquatic birds.
            </>
          ),
        },
        {
          body: (
            <>
              The entire complex is composed to create an impression of escape
              into an oasis of relaxed fantasy, cool and utterly detached --
              transporting the visitor into an atmosphere of enjoyable
              relaxation. The color scheme of the entire architectural
              composition will be red, gold and white.
            </>
          ),
        },
        {
          body: (
            <>
              Area 1: The main entrance to the Schaefer Center will be located on
              the south side of the smaller of the two inflated-disc structures.
              Visitors will enter the reception area and be introduced to a series
              of internally illuminated displays, which will depict the process by
              which Schaefer Beer is brewed. On the other side of the room, a
              curved diorama will depict the original Schaefer Brewery which was
              founded on 19th Street and Broadway in 1842.
            </>
          ),
        },
        {
          body: (
            <>
              In front of the building, and facing the beer garden on the
              prominent corner, will be a curved bar shaded by a roof. Behind the
              back-bar will be a glass enclosed refrigeration room where barrels
              of the Schaefer products will be visible.
            </>
          ),
        },
        {
          body: (
            <>
              Area 2: The second circular structure will contain the Restaurant of
              Tomorrow. A water fountain, attractively illuminated, will stand in
              the center of the building. Tables will be grouped around ornamental,
              illuminated trees, which in the evening will appear to be full of
              fireflies. The restaurant will seat approximately 300 visitors who
              will be served from an impressive buffet.
            </>
          ),
        },
        {
          body: (
            <>
              The two air-inflated, air conditioned structures will be connected
              by a lower level, which will house the food service areas. A
              visitors&apos; passageway will connect the two domed buildings. This
              passageway will be spacious and will display, through the use of
              illuminated transparencies, exciting sports scenes on the inside
              wall. Floor-length clear glass windows on the outside wall of the
              passageway will afford a full view of the landscaped gardens to the
              rear.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/schcen02/produced-photo.jpg",
        width: 600,
        height: 343,
        alt: "Schaefer Center",
        bordered: true,
        title: "Schaefer Center",
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
