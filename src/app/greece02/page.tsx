import type { Metadata } from "next";
import { GreeceNavChrome } from "@/components/GreeceNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Greece — nywf64.com",
  description:
    "Greek Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greece Information Manual page — “manual” standard.
 * Body from legacy greece02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (“te country”, “Markris”) preserved.
 */
export default function Greece02Page() {
  return (
    <InformationManualPage
      heroLabel="Greece"
      titleId="greece02-title"
      hero={{
        src: "/images/greeceoverview/hero-banner.jpg",
        alt: "Greece at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreeceNavChrome />}
      previousHref="/greece01"
      overviewHref="/greeceoverview"
      nextHref="/greece03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Greek Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Athanase Markris, Managing Dir.",
            "Greek Pavilion, New York World's Fair 1964-1965",
            "23 Jan Smuts Street",
            "Athens 134, Greece",
            "and",
            "Mr. John J. Carlos",
            "Commissioner General",
            "501 Fifth Avenue",
            "New York 17, New York",
            "MU 7-5499",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Allen Beach"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["April 10, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 31; Lot 6", "International Area"],
        },
        {
          label: "AREA",
          lines: ["25,000 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. John J. Carlos",
            "501 Fifth Avenue",
            "New York 17, New York",
            "MU 7-5499",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Orestes Dallas"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/greece02/greece04.jpg",
        width: 600,
        height: 205,
        alt: "Greek Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Greek Pavilion will be a one story structure combining modern
              and ancient Greek architecture. The exterior of the building will
              have marble facing and will feature a 120 foot long frieze which
              will be decorated with classical figures and motif symbolizing the
              arts, sciences, commerce and sports.
            </>
          ),
        },
        {
          body: (
            <>
              The Pavilion will feature exhibits of Greek culture, industry,
              modern tourist attractions, social and economic progress of the
              country, authentic handicrafts, and will have a &quot;Taverna&quot;
              serving food and beverages typical of Greece. Literature, music and
              dances native to te country will also be exhibited.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/greece02/greece03.jpg",
        width: 600,
        height: 354,
        alt: "Greek Pavilion",
        bordered: true,
        title: "Greek Pavilion",
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
