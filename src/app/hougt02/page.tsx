import type { Metadata } from "next";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — House of Good Taste — nywf64.com",
  description:
    "House of Good Taste entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy hougt02.html. Layout: InformationManualPage (/bell02). */
export default function Hougt02Page() {
  return (
    <InformationManualPage
      heroLabel="House of Good Taste"
      titleId="hougt02-title"
      hero={{
        src: "/images/hougtoverview/hero-banner.jpg",
        alt: "House of Good Taste at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HougtNavChrome />}
      previousHref="/hougt01"
      overviewHref="/hougtoverview"
      nextHref="/hougt03"
      factsLeft={[
        { label: "EXHIBIT", lines: ["The House of Good Taste"] },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Lee Van Atta, President",
            "House of Good Taste, Incorporated",
            "4 West 58th Street",
            "New York, New York",
            "TE 8-2800",
          ],
        },
        { label: "FAIR CONTACT", lines: ["Miss Phyllis Adams"] },
        { label: "CONTRACT SIGNED", lines: ["December 1, 1961"] },
        { label: "ADMISSION", lines: ["Free"] },
      ]}
      factsRight={[
        { label: "LOCATION", lines: ["Block 20; Lot 1", "Industrial Area"] },
        { label: "AREA", lines: ["74,160 sq. ft."] },
        {
          label: "ARCHITECTS AND DESIGNERS",
          lines: ["A. Architect"],
        },
        {
          label: "",
          lines: [
            "Jack Pickens Coble",
            "252 East 48th Street",
            "New York 17, New York",
            "MU 8-0767",
          ],
        },
        { label: "", lines: ["Designer"] },
        {
          label: "",
          lines: [
            "Mrs. Dede Draper",
            "Shaw and Draper",
            "16 East 52nd Street",
            "New York, New York",
            "MU 8-8420",
          ],
        },
        { label: "", lines: ["B. Architect"] },
        {
          label: "",
          lines: [
            "Royal Barry Wills and Assocs.",
            "82 Charles Street",
            "Boston, Massachusetts",
            "617 LA 3-7787",
          ],
        },
        { label: "", lines: ["Designer"] },
        {
          label: "",
          lines: [
            "Mrs. Ellen Lehman McClusky",
            "Ellen L. McClusky Assoc.",
            "667 Madison Avenue",
            "New York, New York",
            "TE 8-6850",
          ],
        },
        { label: "", lines: ["C. Architect"] },
        {
          label: "",
          lines: [
            "Edward Durell Stone",
            "7 East 67th Street",
            "New York 21, New York",
            "LE 5-1144",
          ],
        },
        { label: "", lines: ["Designer"] },
        {
          label: "",
          lines: [
            "Mrs. Sarah Hunter Kelly",
            "Sarah Hunter Kelly Interiors",
            "134 Easst 71st Street",
            "New York, New York",
            "BU 8-4698",
          ],
        },
        { label: "", lines: ["D. Architect"] },
        {
          label: "",
          lines: [
            "Hidden Assets Bldg",
            "Morris Ketchum Assoc.",
            "227 East 14th Street",
            "New York 17, New York",
            "OX 7-7200",
          ],
        },
        { label: "CONTRACTOR", lines: ["D. Fortunato, Incorporated"] },
      ]}
      primaryFigure={{
        src: "/images/hougt02/hougt72.jpg",
        width: 600,
        height: 257,
        alt: "House of Good Taste",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The House of Good Taste is a living showcase and marketing vehicle
              for new products for the home and for home building products,
              equipment and accessories. It consists of three homes, each with a
              two-car garage, on a one-and-three-quarter acre site next to the
              Fair&apos;s main entrance.
            </>
          ),
        },
        {
          body: (
            <>
              The three homes are designed by three of the country&apos;s leading
              architects: Edward Durell Stone, Jack Pickens Coble and Royal
              Barry Wills Associates. Each home has an individual style--modern,
              contemporary, and traditional, ranging in price from $25,000 to
              $40,000.
            </>
          ),
        },
        {
          body: (
            <>
              These ideal homes reflect the ultimate in tasteful living, and are
              geared to the creativeness of moderate-income families. The
              designers have utilized flexible floor plans in relation to
              national availability and quality.
            </>
          ),
        },
        {
          label: "Edward Durell Stone House",
          body: (
            <>
              The plan is based on a central room which is brightly illuminated
              from above by a 22 foot glass dome skylight. The corner courtyards
              provide their own view with a completely private and controlled
              environment planned and furnished to the owner&apos;s taste. In
              effect, the Stone house looks inward, developing character through
              its family&apos;s individual personality.
            </>
          ),
        },
        {
          label: "Royal Barry Wills Associates House",
          body: (
            <>
              Truly American, this house preserves the tradition of Early
              American homes while providing the luxuries of modern living. The
              plan is arranged with the living, dining and family rooms grouped
              around the kitchen. These rooms open directly into a living terrace
              and swimming pool area through sliding glass panels. The bedroom
              wing is removed from the center of activity, offering quiet and
              privacy.
            </>
          ),
        },
        {
          label: "Jack Pickens Coble House",
          body: (
            <>
              This house allows the outside environment to become part of its
              interior decor. The plan consists of a dominant central core
              housing the entrance and formal living area. This is flanked
              symmetrically by areas for dining and service on one side, and
              sleeping and informal living on the other. Each of these areas is
              defined separately by its own roof structure rising above the
              horizontal roof line which encompasses the whole plan. The total
              effect is one of informal variety.
            </>
          ),
        },
        {
          label: "Hidden Assets Bulding",
          body: (
            <>
              The Hidden Assets Bulding has been created solely to exhibit the
              many important building components normally hidden behind the
              facade of a home. The visitor will see the latest improvements in
              building material through cut-away displays and other graphic
              devices.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/hougt02/hougt71.jpg",
        width: 600,
        height: 359,
        bordered: true,
        title: "The House of Good Taste",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>For Those Who Produced the New York World&apos;s Fair 1964-1965</em>
          </>
        ),
      }}
    />
  );
}
