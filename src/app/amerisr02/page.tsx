import type { Metadata } from "next";
import { AmerisrNavChrome } from "@/components/AmerisrNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — American-Israel Pavilion — nywf64.com",
  description:
    "American-Israel Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American-Israel Pavilion Information Manual page — “manual” standard.
 * Body from legacy amerisr02.html. Layout: InformationManualPage (/bell02).
 */
export default function Amerisr02Page() {
  return (
    <InformationManualPage
      heroLabel="American-Israel Pavilion"
      titleId="amerisr02-title"
      hero={{
        src: "/images/amerisroverview/hero-banner.jpg",
        alt: "American-Israel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmerisrNavChrome />}
      previousHref="/amerisr01"
      overviewHref="/amerisr01"
      nextHref="/amerisr03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["American-Israel World's Fair Corp."],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Z. Sitchin",
            "American-Israel World's Fair Corp.",
            "1776 Broadway",
            "New York 19, New York",
            "CI 5-2540",
            "and",
            "Mr. Harold S. Caplin",
            "H. S. Caplin and Company",
            "80 Pine Street",
            "New York 5, New York",
            "HA 5-2470",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Allen Beach"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["July 8, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 33; Lot 31", "International Area"],
        },
        {
          label: "AREA",
          lines: ["14,438 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Ira Kessler",
            "Room 912",
            "25 West 43 Street",
            "New York 36, New York",
            "WI 7-0787",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Hegeman-Harris Co., Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/amerisr02/line-drawing.jpg",
        width: 600,
        height: 348,
        alt: "American-Israel Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          label: "Exterior",
          body: (
            <>
              The American-Israel Pavilion depicts the 4,000 year history and
              culture of the Jewish people with emphasis on their moral
              contributions to the world.
              <br />
              <br />
              The 6,000 square foot spiral shaped building, soaring in height
              from 10 feet to 40 fee, is a sculptural expression of the concept
              of ALYIA, a Hebrew word signifying the surging impulse of hope over
              despair. The entire structure is sheathed in rough cut African
              mahogany.
              <br />
              <br />
              An exterior paneled wall contains bas-relief sculpture in sand,
              representing the twelve tribes of Israel.
              <br />
              <br />
              The entrance to the pavilion displays authentic stones from King
              Solomon&apos;s mines.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              Three dimensional dioramas, and ancient artifacts transport the
              visitor to Biblical days. The contrast of modern day Israel is
              depicted in scientific and technical exhibits, including such
              projects as the reclamation of the desert, and others developed at
              the Weiszmann Institute.
              <br />
              <br />
              In addition to the main exhibit area, the pavilion has a section for
              the display and sale of products from Israel, as well as, a
              restaurant featuring Israeli and American-Jewish specialties.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/amerisr02/produced-photo.jpg",
        width: 600,
        height: 336,
        alt: "American-Israel Pavilion",
        bordered: true,
        title: "American-Israel Pavilion",
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
