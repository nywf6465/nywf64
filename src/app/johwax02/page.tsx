import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import { JOHWAX_HERO } from "@/data/johwaxHero";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Johnson Wax — nywf64.com",
  description:
    "Johnson Wax Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax02Page() {
  return (
    <InformationManualPage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax02-title"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax01"
      overviewHref="/johwaxoverview"
      nextHref="/johwax03"
      factsLeft={[
        { label: "EXHIBIT", lines: ["Johnson Wax"] },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Peter D. Crane",
            "World's Fair Manager",
            "and",
            "Mr. Robert L. Burgess",
            "Operations Manager",
            "Johnson Wax",
            "P.O. Box 547",
            "New York World's Fair",
            "World's Fair, New York 11380",
            "AR 1-7130",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Miss Dorothy Day",
            "Carl Byoir Associates",
            "800 Second Avenue",
            "New York, New York",
            "YU 6-6100  Ext. 329 & 888-4026",
          ],
        },
        { label: "FAIR CONTACT", lines: ["Miss Phyllis Adams"] },
        { label: "CONTRACT SIGNED", lines: ["December 29, 1961"] },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 18; Lot 3",
            "The Eisenhower Promenade",
            "Industrial Area",
          ],
        },
        { label: "AREA", lines: ["33,206 sq. ft."] },
        {
          label: "ARCHITECT",
          lines: [
            "Lippincott & Marguiles, Inc.",
            "430 Park Avenue",
            "New York, New York 10022",
            "MU 8-8370",
          ],
        },
        { label: "CONTRACTOR", lines: ["Turner Construction Company"] },
        { label: "ADMISSION", lines: ["Free"] },
      ]}
      primaryFigure={{
        src: "/images/johwax02/johwax51.jpg",
        width: 600,
        height: 437,
        alt: "Line Drawing",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The soaring superstructure of Johnson&apos;s{" "}
              <u>Golden Rondelle Theatre</u> is a graceful white form made up of
              six 90-foot columns topped by expansive petals that arch inward to
              form a partial canopy. A golden disc, 90 feet in diameter and
              containing an air-conditioned theatre, is suspended from the six
              columns 24 feet over a sunken reflecting pool.
            </>
          ),
        },
        {
          body: (
            <>
              In the Golden Rondelle Theatre, the popular film &quot;
              <u>To Be Alive</u>&quot; is shown. The film uses the &quot;Tri-Arc
              335&quot; process of projection; incorporating 3 synchronized
              projectors and 3 wide screens arranged in a sweeping arc. The
              movie, filmed on location in a number of overseas countries and in
              many communities in the United States, portrays the joys and
              wonders of life, commmon to people the world over.
            </>
          ),
        },
        {
          body: (
            <>
              In the home care information center, questions on home care are
              answered by an electronic computer. Visitors receive free shoe
              shines from a battery of high-speed automatic shoe polishing
              machines. The children&apos;s &quot;fun machine&quot; is essentially
              a walk-through toy where yongsters find such things as cranks,
              levers and buttons that activate surprise mechanisms, noise-makers
              and other entertaining devices. The exhibit contains a VIP room for
              visiting executives.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/johwax02/johwax52.jpg",
        width: 600,
        height: 489,
        bordered: true,
        title: "Johnson Wax",
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
