import type { Metadata } from "next";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Simmons — nywf64.com",
  description:
    "Simmons Beautyrest pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons Information Manual page — “manual” standard.
 * Body from legacy simmon02.html. Layout: InformationManualPage (/bell02).
 */
export default function Simmon02Page() {
  return (
    <InformationManualPage
      heroLabel="Simmons"
      titleId="simmon02-title"
      hero={{
        src: "/images/simmonoverview/hero-banner.jpg",
        alt: "Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SimmonNavChrome />}
      previousHref="/simmon01"
      overviewHref="/simmonoverview"
      nextHref="/simmon03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ['"Land of Enchantment"'],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Arthur Clyne, Coordinator",
            "World's Fair Exhibit",
            "Simmons Company",
            "1 Park Avenue",
            "New York 16, New York",
            "MU 9-6060",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 24, 1961"],
        },
        {
          label: "LOCATION",
          lines: ["Block 5; Lot 6", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["13,319 sq. ft."],
        },
      ]}
      factsRight={[
        {
          label: "ARCHITECT",
          lines: [
            "A. Epstein & Sons, Inc.",
            "2011 W. Pershing road",
            "Chicago 9, Illinois",
            "212 VI 7-6000",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Miss Doris Thistlewood",
            "Arndt, Preston, Cahpin, Lamb & Keen",
            "375 Park Avenue",
            "New York 22, New York",
            "PL 1-7460",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["D. Fortunato, Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "RENTAL OF REST ALCOVE",
          lines: ["$1.00 per half hour"],
        },
      ]}
      primaryFigure={{
        src: "/images/simmon02/simmons34.jpg",
        width: 600,
        height: 356,
        alt: 'Simmons "Land of Enchantment"',
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      secondaryFigure={{
        src: "/images/simmon02/simmons35.jpg",
        width: 600,
        height: 485,
        alt: "Simmons Beautyrest Center",
        source:
          "Source: NY World's Fair Publication For Those Who Produced the New York World's Fair 1964-1965",
      }}
      features={[
        {
          body: (
            <>
              <strong>Exterior:</strong> Rising three stories, the Simmons
              Beautyrest Center Building covers 10,000 square feet and carries
              out a contemporary design theme. Planes of blue accent the white
              building and the large expanses of glass. At one end an exterior
              spiral staircase, winding around the enclosed elevator shaft lends
              an air of fantasy to the facade. Surrounding the building is a
              graceful reflecting pool that gives the building the appearance of
              floating on a moat. Two curved and arched bridges form the entrance
              to the building.
            </>
          ),
        },
        {
          body: (
            <>
              <strong>Interior:</strong> After completing a tour of animated
              displays on the ground floor, the World&apos;s Fair visitor will
              have an opportunity to be whisked upstairs to a quiet area of rest
              and relaxation, far from the hustle and bustle of the Fair
              excitement. The two top floors of the building will house 46 Rest
              Alcoves-private roomettes-that will be rented to visitors for
              half-hour periods. Each visitor will be met and conducted to a
              private Rest Alcove by a Simmons Beautyrest Lady. Among these
              specially trained attendants will be a trained practical nurse to
              dispense aspirin or assist mothers with casualties. Each alcove
              has a small clock-like unit outside which is set when the visitor
              enters. At regular intervals, attendants will check and gently
              awaken any guest who may have drifted from a light nap to a deep
              sleep. Each rest alcove contains a Simmons adjustable bed,
              operated by push buttons to raise the head and feet. One window
              has an adjustable venetian blind in a new narrow width that can be
              completely closed to darken the room or, when opened, is almost
              invisible. On one side of the building the rest alcoves overlook a
              charming, pastoral park area, and on the other a panorama of
              exciting World&apos;s Fair architecture.
            </>
          ),
        },
        {
          body: (
            <>
              The V.I.P. Suite, a private section of the building&apos;s third
              floor, stresses elegance and a quiet atmosphere and abounds in new
              materials and design concepts. In a soft blue and chamois color
              scheme, accents of deep rich sapphire blue give the room style on
              the quiet side. In the evening, wall-to-wall draperies in the new
              Beta Fiber of Fiberglas cover the windows to create an intimate
              atmosphere. Guests may watch the special closed circuit color
              television produced by RCA. If a nap is desired, the bed is fully
              fitted in exciting printed sheets and bedding. Sheets and pillow
              cases by Wamsutta are in a floral panelled design in blues and
              greens. The fabric, a new cool, silky blend of cotton and Avril is
              called Lustercale. For entertaing, the opposite side of the room
              has a conversation grouping of furniture from the Simmons Living
              Room Division. The light and dark blue striped carpet extends
              throughout the room and ties the bed and sitting room section of
              the suite together. The room has a compact wall storage unit that
              includes the liquor cabinet, television, and mirror, as well as
              shelves and drawers for make-up, writing material and refreshment
              accessories.
            </>
          ),
        },
        {
          body: (
            <>
              When leaving the building, the visitor can walk down the spiral
              staircase for a breathtaking view of the Fair and has an excellent
              opportunity to take photographs unencumbered by crowds.
            </>
          ),
        },
      ]}
    />
  );
}
