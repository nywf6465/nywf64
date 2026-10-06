import type { Metadata } from "next";
import { HonkonNavChrome } from "@/components/HonkonNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Hong Kong — nywf64.com",
  description:
    "Hong Kong pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hong Kong Information Manual page — “manual” standard.
 * Body from legacy honkon02.html. Layout: InformationManualPage (/bell02).
 */
export default function Honkon02Page() {
  return (
    <InformationManualPage
      heroLabel="Hong Kong"
      titleId="honkon02-title"
      hero={{
        src: "/images/honkonoverview/hero-banner.jpg",
        alt: "Hong Kong at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HonkonNavChrome />}
      previousHref="/honkon01"
      overviewHref="/honkonoverview"
      nextHref="/honkon03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Hong Kong"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. John C. Y. Kao, President",
            "Hong Kong Trading company",
            "Malko General Agencies (H.K.) Ltd.",
            "Room No. 406, Manson House",
            "Nathan Road, Kowloon",
            "Hong Kong, B.C.C.",
            "and",
            "Mr. John Humes",
            "Director General",
            "Pavilion of Hong Kong",
            "New York World's Fair 1964-1965",
            "50 Broadway",
            "New York 4, New York",
            "DI 4-0990",
          ],
        },
        {
          label: "PUBLIC RELATIONS REPRESENTATIVE",
          lines: [
            "Mr. Gilbert Hodges",
            "Communications Advisors, Inc.",
            "551 Fifth Avenue, Suite 609",
            "New York 17, New York",
            "YU 6-4235",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Douglas Beaton"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 12, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 22; Lot 18", "International Area"],
        },
        {
          label: "AREA",
          lines: ["24,259 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Eldredge Snyder",
            "101 Park Avenue",
            "New York 17, New York",
            "MU 5-0163",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Mr. Frank Murphy", "E. W. Howell Company"],
        },
      ]}
      primaryFigure={{
        src: "/images/honkon02/line-drawing.jpg",
        width: 600,
        height: 466,
        alt: "Hong Kong pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The British Crown Colony of Hong Kong is represented at the Fair by
              a colorful native pavilion sponsored by the Hong Kong Trading
              Company, Inc.
            </>
          ),
        },
        {
          body: (
            <>
              Exterior: The Hong Kong Pavilion is a charming blend of modern
              design and traditional Chinese architecture. The building features
              upswept eves, bright colors, intricate carvings and gilded
              surfaces. The entrance is a 45 foot Gateway with gay and colorful
              streamers and lanterns. Passing through the Gateway, visitors walk
              over the crescent shaped Bridge of the Rainbow. Below the bridge
              huge lily pads float in the illuminated Lagoon of the Emeralds.
            </>
          ),
        },
        {
          body: (
            <>
              The front of the building is glass to permit an unobstructed view
              of the Unisphere and other adjoining pavilions. The sides are
              decorated with exotic oriental panels fabricated in Hong Kong
            </>
          ),
        },
        {
          body: (
            <>
              Canopied tables and chairs and landscaping highlight the authentic
              Hong Kong background.
            </>
          ),
        },
        {
          body: (
            <>
              Interior: Inside, the pavilion reflects all of the fascination of
              Hong Kong&apos;s finest shopping centers. Tailor-made suits,
              beaded sweaters, oriental jewelry, hand-made rugs, fabulous
              furniture, rich damask, carved ivory and jade are available for
              sale. The sounds of Hong Kong echo through the building. Visitors
              may have their photographs taken sitting in a rickshaw.
            </>
          ),
        },
        {
          body: (
            <>
              A &quot;Crown Colony Club&quot;, containing a bar, restaurant and
              dance floor features entertainment representing Chinese culture.
              The interior decoration of the Club is highlighted by a three
              dimensional diorama of Hong Kong in minature. Entrance to the Club
              is through the stern of a Chinese junk.
            </>
          ),
        },
        {
          body: (
            <>
              To the rear of the pavilion is the &quot;Bird Cage Bar&quot;,
              specializing in Chinese food packages that the visitor may take
              with him.
            </>
          ),
        },
        {
          body: (
            <>
              From time to time special exhibits of rare china, screens and other
              priceless Chinese objects d&apos;art will be held. The pavilion
              accurately reflects the magic charm and variety of the British
              Corwn Colony.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/honkon02/produced-photo.jpg",
        width: 600,
        height: 358,
        alt: "Hong Kong",
        bordered: true,
        title: "Hong Kong",
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
