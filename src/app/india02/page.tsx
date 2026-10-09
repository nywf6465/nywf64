import type { Metadata } from "next";
import { IndiaNavChrome } from "@/components/IndiaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — India — nywf64.com",
  description:
    "India pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * India Information Manual page — “manual” standard.
 * Body from legacy india02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (“P. O, Panikkar”, “Samson Streets”) preserved.
 */
export default function India02Page() {
  return (
    <InformationManualPage
      heroLabel="India"
      titleId="india02-title"
      hero={{
        src: "/images/indiaoverview/hero-banner.jpg",
        alt: "India pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IndiaNavChrome />}
      previousHref="/india01"
      overviewHref="/indiaoverview"
      nextHref="/india03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Republic of India"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mrs. Indira Gandhi Chairman",
            "Advisory Committee for New York World's Fair",
            "Prime Minister's House",
            "New Delhi 9, India",
            "and",
            "Mr. P. O, Panikkar",
            "Commissioner General",
            "and",
            "Mr. A. S. Sethi, Consul",
            "Consulate General of India 3 East 64 Street",
            "New York 21, New York",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Douglas Beaton"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 14, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "LOCATION",
          lines: ["Block 28; Lot 6", "International Area"],
        },
        {
          label: "AREA",
          lines: ["27,336 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Mansinh Rana Senior Architect, Ministry",
            "of Works, Housing and Rehabilitation",
            "Government of India",
            "New Delhi, India",
            "and",
            "Mr. George W. Smith",
            "Stonorov & Haws",
            "1900 Architects Building",
            "17th and Samson Streets",
            "Philadelphia 3, Pennsylvania",
            "215 LO 7-4616",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Gilbane Building Company"],
        },
      ]}
      primaryFigure={{
        src: "/images/india02/india03.jpg",
        width: 600,
        height: 217,
        alt: "Republic of India pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The pavilion shows India&apos;s past and present through models,
              photographs, charts, books and the finest specimens of ancient art
              and sculpture. Aspects of India&apos;s economic and industrial
              progress, trade and aspirations are illustrated by a display of
              industrial products, including handicrafts and handloom products.
            </>
          ),
        },
        {
          body: (
            <>
              India has selected &quot;Progress in Democracy&quot; as the special
              theme of the pavilion.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/india02/india02.jpg",
        width: 600,
        height: 365,
        alt: "Republic of India",
        bordered: true,
        title: "Republic of India",
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
