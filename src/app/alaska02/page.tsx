import type { Metadata } from "next";
import { AlaskaNavChrome } from "@/components/AlaskaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Alaska — nywf64.com",
  description:
    "Alaska pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Alaska Information Manual page — “manual” standard.
 * Body from legacy alaska02.html. Layout: InformationManualPage (/bell02).
 */
export default function Alaska02Page() {
  return (
    <InformationManualPage
      heroLabel="Alaska"
      titleId="alaska02-title"
      hero={{
        src: "/images/alaskaoverview/hero-banner.jpg",
        alt: "Alaska at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AlaskaNavChrome />}
      previousHref="/alaska01"
      overviewHref="/alaska01"
      nextHref="/alaska03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Alaska, State of"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Morris Ford, Director",
            "Travel Division, Department of",
            "Economic Development & Planning",
            "Post Office Box 2391",
            "Juneau, Alaska",
            "907 JU 65284",
            "and",
            "Mr. Jack Anderson",
            "Director of Alaska Pavilion Concessions",
            "Alaska Crafts & Culture Corp.",
            "1016 E. Fourth Avenue",
            "P.O. 3-098 E.C.B.",
            "Anchorage, Alaska",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Michael Pender"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 28, 1961"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "CONTRACTOR",
          lines: ["F. D. Rich", "Stamford, Conn."],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 41, Lot 4", "State Area"],
        },
        {
          label: "AREA",
          lines: ["32,277 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Olson and Sands",
            "Post Office Box 2331",
            "Juneau, Alaska",
            "and",
            "Mr. Gordon Mandeville",
            "Mandeville and Burge",
            "500 Union Street",
            "Seattle 1, Washington",
            "206 MU 2-1020",
            "and",
            "Mr. Walter Stengel",
            "343 Manville Road",
            "Pleasantville, New York",
            "914 RO 9-54431",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/alaska02/line-drawing.jpg",
        width: 600,
        height: 302,
        alt: "Alaska Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Alaska Pavilion is a white, igloo-shaped building. Three 30
              foot totem poles, originally carved by Indians for the St. Louis
              Fair of 1904 are in front of the building.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibits show Eskimo and Indian life, the Alaskan fishing
              industry and the state&apos;s booming development-especially a new
              coastal ferry system and plans for the largest dam in the free
              world. There is an exhibit by Alaskan artists, and wild life is
              represented by stuffed specimens of bears, a walrus head, a 74
              pound salmon, plus moose, caribou and others.
            </>
          ),
        },
        {
          body: (
            <>
              In the igloo&apos;s second floor is a theatre with a 32 square foot
              topographical model of Alaska. During a narration, portions of the
              model light up, and the dome itself becomes a planetarium
              portraying the skies over Alaska from twilight to dawn. Slides
              depict the state&apos;s industries and people at work. The show
              ends with a colorful display of simulated northern lights (aurora
              borealis).
            </>
          ),
        },
        {
          body: (
            <>
              In the area behind the Pavilion, Indian and Eskimo dance groups
              perform and craftsmen carve in wood and whalebone. Some of these
              handiworks are for sale.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/alaska02/produced-photo.jpg",
        width: 600,
        height: 344,
        alt: "State of Alaska",
        bordered: true,
        title: "State of Alaska",
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
