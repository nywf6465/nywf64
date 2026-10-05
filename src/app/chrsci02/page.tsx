import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Christian Science — nywf64.com",
  description:
    "Christian Science pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science Information Manual page — “manual” standard.
 * Body from legacy chrsci02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (Chariman, Chrisitan, spaced “G ilbert”) preserved.
 */
export default function Chrsci02Page() {
  return (
    <InformationManualPage
      heroLabel="Christian Science"
      titleId="chrsci02-title"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci01"
      overviewHref="/chrscioverview"
      nextHref="/chrsci03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Christian Science Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Hobson F. Miller, Chariman",
            "Committee for Christian Science Activities",
            "World's Fair 1964-1965, Inc.",
            "and",
            "Mr. Gilbert A. Robinson, General Mgr.",
            "Christian Science Pavilion",
            "551 Fifth Avenue, Suite 3213",
            "New York 17, New York",
            "TN 7-2788",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Bruce Nicholson"],
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
          lines: ["Block 24; Lot 5", "International Area"],
        },
        {
          label: "AREA",
          lines: ["40,109 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Edward Durell Stone",
            "7 East 67 Street",
            "New York 21, New York",
            "LE 5-1144",
          ],
        },
        {
          label: "DESIGNERS",
          lines: [
            "Mr. David Johnson",
            "Hadley Exhibits, Inc.",
            "631 Fargo Avenue",
            "Buffalo, New York",
            "716 - TT 3-4456",
            "and",
            "Mr. Glenn Wegele",
            "Display Studios, Inc.",
            "5803 Centre Avenue",
            "Pittsburgh, Pennsylvania",
            "412 - 661 - 2227",
          ],
        },
        {
          label: "LANDSCAPE ARCHITECTS",
          lines: ["Robert Zion and Harold Breen"],
        },
      ]}
      primaryFigure={{
        src: "/images/chrsci02/line-drawing.jpg",
        width: 600,
        height: 306,
        alt: "Christian Science Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Chrisitan Science Pavilion is a peaceful, inspirational area
              on the Fair grounds. The main exhibit building and adjacent reading
              room structure were designed by Edward Durell Stone. The
              landscaping creates a French park with groupings of individual
              chairs in shaded areas where people may read or sit quietly.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibit building is designed in the shape of a seven-pointed
              star set in a pool of water with 14 fountains. It is topped with a
              35 foot translucent dome to give the building a feeling of
              openness, radiance and light. The dome and fountains are
              illuminated at night.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibits themselves present an essentially spiritual message
              in a manner understandable to everyone. The visitor is invited to
              take a fresh look at his universe, his world, himself, his
              questions about religion . . . to explore a new approach to his
              deepest questions about God and man.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/chrsci02/produced-photo.jpg",
        width: 600,
        height: 338,
        alt: "Christian Science Pavilion",
        bordered: true,
        title: "Christian Science Pavilion",
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
