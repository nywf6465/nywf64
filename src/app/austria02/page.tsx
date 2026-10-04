import type { Metadata } from "next";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Austria — nywf64.com",
  description:
    "Austria pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria Information Manual page — “manual” standard.
 * Body from legacy austria02.html. Layout: InformationManualPage (/bell02).
 */
export default function Austria02Page() {
  return (
    <InformationManualPage
      heroLabel="Austria"
      titleId="austria02-title"
      hero={{
        src: "/images/austriaoverview/hero-banner.jpg",
        alt: "Austria at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AustriaNavChrome />}
      previousHref="/austria01"
      overviewHref="/austriaoverview"
      nextHref="/austria03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: [
            "Institute of Economic Development of",
            "the Austrian Federal Economic Chamber",
          ],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Consul Manfred von Mautner Markhof",
            "Austrian Commissioner for the New York World's Fair 1964-1965 Corp.",
            "Hoher Markt 3",
            "Vienna 1, Austria",
            "and",
            "Mr. Otto M. Spitz",
            "The Austrian Trade Delegate in the United States",
            "31 East 69 Street",
            "New York 21, N. Y.",
            "LE 5-3335",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 19, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 23; Lot 22", "International Area"],
        },
        {
          label: "AREA",
          lines: ["17,683 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Gustav Pelchl",
            "Opernring 4",
            "Vienna 1, Austria",
            "and",
            "Pisani and Carlos",
            "501 Fifth Avenue",
            "New York 17, N. Y.",
            "MU 7-5499",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "The Displayers, Inc.",
            "635 West 54 Street",
            "New York 19, N. Y.",
            "PL 7-6500",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/austria02/line-drawing.jpg",
        width: 600,
        height: 506,
        alt: "Austria pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Austrian Pavilion will be &quot;A&quot; shaped in design to
              symbolize Austria as a land of mountains and tourism; and will be
              constructed of wood to symbolize the richness of the timber and
              industry. The exterior decor will be predominantly the natural
              color of wood combined with red and white Eternit finish. Seats
              and exhibition items in a landscaped area will provide an
              attractive haven for visitors to rest. A modern sculpture will be
              featured outside the pavilion.
            </>
          ),
        },
        {
          body: (
            <>
              The pavilion, with a simple but effective interior, will be
              divided into three main sections; promotion of Austria, promotion
              of tourism, and promotion of economy. The exhibition hall will
              have hanging aluminum drums, groups of plastic domes containing
              display items and glass cases for the display of exhibits. The
              ceiling will have exposed beams and indirect illumination, while
              natural colored coconut mats will cover the floor.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/austria02/produced-photo.jpg",
        width: 600,
        height: 368,
        alt: "Austria",
        bordered: true,
        title: "Austria",
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
