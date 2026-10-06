import type { Metadata } from "next";
import { IllinoisNavChrome } from "@/components/IllinoisNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Illinois — nywf64.com",
  description:
    "Illinois Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Illinois Information Manual page — “manual” standard.
 * Body from legacy illinois02.html. Layout: InformationManualPage (/bell02).
 */
export default function Illinois02Page() {
  return (
    <InformationManualPage
      heroLabel="Illinois Pavilion"
      titleId="illinois02-title"
      hero={{
        src: "/images/illinoisoverview/hero-banner.jpg",
        alt: "Illinois Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IllinoisNavChrome />}
      previousHref="/illinois01"
      overviewHref="/illinoisoverview"
      nextHref="/illinois03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Illinois Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. James Cassin",
            "Director, Illinois Pavilion",
            "160 North LaSalle South, Rm. 533",
            "Chicago 1, Illinois",
            "312 FI 6-200",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Michael Pender"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 12, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 35C; Lot 1", "State Area"],
        },
        {
          label: "AREA",
          lines: ["55,540 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Bruce Graham",
            "Skidmore, Owings & Merrill",
            "30 West Monroe Street",
            "Chicago, Illinois",
            "312 FI 6-6161",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/illinois02/ill53.jpg",
        width: 600,
        height: 212,
        alt: "Illinois Pavilion",
        source: <>SOURCE: 1964 World&apos;s Fair Information Manual</>,
      }}
      features={[
        {
          label: "Exterior",
          body: (
            <>
              Illinois brick, low profile, and smooth, un-interrupted continuity
              of lines make the Illinois building a reflection of the Prairie
              State and the simplicity of Mr. Lincoln. The words of Lincoln in
              raised letters on the brick walls appear to support the building.
              The exhibit will explain why Lincoln continues to grow in Illinois
              political philosophy, cultural inheritance, social and moral
              consciousness, and economic development. The exhibit will feature
              the present day virtues of the state in industry, education and
              recreation.
            </>
          ),
        },
        {
          label: "Entrance Courtyard",
          body: (
            <>
              The entrance courtyard which leads the way into the Pavilion will
              contain a monumental photo portrait of Lincoln, a new equestrian
              statue of the young Illinois lawyer by Anna Hyatt Huntington and a
              relief map of the state watched over by the famous Borglum
              &quot;shiny nose&quot; head of Lincoln
            </>
          ),
        },
        {
          label: "Lincoln Exhibit Hall",
          body: (
            <>
              The Exhibit Hall features a giant panorama projection story of
              Lincoln, displays of Lincoln artifacts, the complete Lincoln photo
              collection, and will have regularly scheduled Lincoln exhibits from
              all over the world. On the east side of the hall the visitor will
              stop at the Gettysburg Address Alcove which will contain the
              Illinois owned original manuscript of the Address, equipped with
              multi-language listening devices for the international audience.
            </>
          ),
        },
        {
          label: "Lincoln Theatre",
          body: (
            <>
              &quot;Great Moments with Mr. Lincoln&quot;, a 10 minute production
              which dramatizes the personality and philosophy of the Prairie
              President will be presented by Walt Disney&apos;s WED Enterprises.
              This unique dramatization will use newly developed techniques of
              three dimensional animation, called, &quot;Audio-Animatronics&quot;,
              in a life-like figure of Abraham Lincoln to recreate the words and
              thoughts of Illinois&apos; famous son.
            </>
          ),
        },
        {
          label: "Illinois Exhibit Hall",
          body: (
            <>
              The Illinois Exhibit Hall will have examples of Illinois leadership
              in the arts, sciences, commerce, education and recreation.
            </>
          ),
        },
        {
          label: "Historical Reference Library",
          body: (
            <>
              The Library will contain important books and documents which will
              be available for use in the reading room.
            </>
          ),
        },
        {
          label: "Special Exhibit Courtyard",
          body: (
            <>
              Specific displays will treat elements of the Illinois story that
              best exemplify the state&apos;s advantages.
            </>
          ),
        },
        {
          label: "Tourism Center",
          body: (
            <>
              The Tourism Center gives a sampling of the vacation pleasures in
              Illinois. A restoration of the Rutledge Tavern of New Salem will be
              in full operation as it is at the State Park, showing life during
              Lincoln&apos;s early Illinois years.
            </>
          ),
        },
        {
          label: "Special Exhibit Garden Area",
          body: (
            <>
              The visitor can view the Special Exhibits Garden at his leisure or
              rest on one of the many benches placed in the area.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/illinois02/ill54.jpg",
        width: 600,
        height: 357,
        alt: 'Illinois "Land of Lincoln" Pavilion',
        title: 'Illinois "Land of Lincoln" Pavilion',
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
