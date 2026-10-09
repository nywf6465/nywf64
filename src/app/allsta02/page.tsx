import type { Metadata } from "next";
import { AllstaNavChrome } from "@/components/AllstaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — All-State Properties & Macy's — nywf64.com",
  description:
    "All-State Properties & Macy's (Leisurama) entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * All-State Properties & Macy's Information Manual page — “manual” standard.
 * Body from legacy allsta02.html. Layout: InformationManualPage (/bell02).
 */
export default function Allsta02Page() {
  return (
    <InformationManualPage
      heroLabel="All-State Properties & Macy's"
      titleId="allsta02-title"
      hero={{
        src: "/images/allstaoverview/hero-banner.jpg",
        alt: "All-State Properties & Macy's at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AllstaNavChrome />}
      previousHref="/allsta01"
      overviewHref="/allstaoverview"
      nextHref="/allsta03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["All-State Properties and Macys", "(Leisurama)"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Jerome Wolk, Executive Vice-Pres.",
            "and",
            "Mr. Joel Jablons, Director of",
            "Advertising and Public Relations",
            "230 Park Avenue",
            "New York 17, New York",
            "MU 6-5320",
            "and",
            "All-State Leisurama",
            "New York World's Fair",
            "World's Fair, New York, 11380",
            "888-9858",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 27, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 17; Lot 7",
            "Court of the Moon",
            "Industrial Area",
          ],
        },
        {
          label: "AREA",
          lines: ["15,731 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Stanley H. Klein",
            "89-31 161st Street",
            "Jamaica, New York",
            "OL 7-0300",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["All-State Properties, Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/allsta02/line-drawing.jpg",
        width: 600,
        height: 276,
        alt: "All-State Properties Leisurama homes",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              All-State Properties, Inc. is exhibiting two homes at the
              World&apos;s Fair which are sold completely furnished at selected
              sites in Montauk, Long Island or Ft. Lauderdale, Florida. The basic
              Leisurama home features lifetime guaranteed U. S. Plywood redwood
              siding. The Convertible priced at $13,490 on a 75 by 100 foot plot,
              has four panelled rooms and is designed to accommodate a family of
              four. It contains a living room, dining area, kitchen and a den
              which is convertible for night use as a double bedroom, and a full
              bathroom. The Expanded Convertible adds two bedrooms and a
              powder-room to the basic floor plan, which is priced at $16,490 on
              a 75 by 100 foot plot. These houses are fully insulated and heated
              by gas fired warm air. The Florida model of the Expanded Convertible
              - called The Solo is built of masonry block and stucco. It is
              displayed as delivered with plaster walls and ceilings.
            </>
          ),
        },
        {
          body: (
            <>
              Furnishings of the houses have been selected by Matthew Sergio, A.
              I. D. , head of Macy&apos;s decorating department. Each item was
              chosen for attractiveness and quality as well as practicality.
              Mostly walnut furniture was used to blend with he interior walls of
              the houses.
            </>
          ),
        },
        {
          body: (
            <>
              Items delivered with the home, in addition to furniture, include
              Melmac china, glassware, towels, blankets, napkins and flatwear,
              Formica kitchen counter tops, shower curtains, bathroom tiles and
              interior moldings which can be coordinated with a choice of fabrics
              and colors for the basic color scheme the customer selects. The
              General Electric kitchen comes equipped with refrigerator, estate
              range, washer-dryer combination and automatic dishwasher. The
              General Electric Company is supplying equipment and United States
              Plywood Corporation is providing the exterior siding and interior
              paneling. Kitchen cabinets are by Lakeville and aluminum doors and
              windows by Portalume.
            </>
          ),
        },
        {
          body: (
            <>
              Conceived in terms of a vacation retreat, or a retirement home, the
              Leisurama homes are suitable for year-round occupancy in either
              Montauk, Long Island or Ft. Lauderdale, Florida.
            </>
          ),
        },
      ]}
    />
  );
}
