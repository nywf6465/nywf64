import type { Metadata } from "next";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — SKF — nywf64.com",
  description:
    "SKF pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy skf01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Skf01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="SKF"
      titleId="skf01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/skfoverview/hero-banner.jpg",
        alt: "SKF pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SkfNavChrome />}
      previousHref="/skfoverview"
      nextHref="/skf02"
      guide1964={{
        cover: {
          src: "/images/skf01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/skf01/logo64.gif",
          width: 118,
          height: 144,
          alt: "",
        },
        name: "SKF",
        copy: (
          <>
            Motion engineering is the theme expressed under the SKF parasol, a
            circular roof which soars to an 82-foot needle at its apex. SKF
            Industries, Inc., the American affiliate of a worldwide complex of
            ball and roller bearing manufacturers, uses an illustrated lecture
            and an exhibit of finished products to show how it helps keep the
            machines of civilization running.
          </>
        ),
        admission: ["Admission: free."],
        highlights: [
          {
            label: "SOUND AND LIGHT.",
            body: (
              <>
                In a 70-seat theater to the right of the main entrance,
                brilliantly lit stylized images illustrate a six-minute sound
                track tracing the history of motion engineering and roller
                bearings. The continuous show starts with the wheel and ends with
                rockets.
              </>
            ),
          },
          {
            label: "MATTER IN MOTION.",
            body: (
              <>
                Beside the theater is a display of objects that use bearings from
                a kitchen mixer to a truck axle, cut away to disclose their
                mechanical interiors. Another display area demonstrates some of
                the industry&apos;s production problems and how they are solved.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/skf01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/skf01/logo65.gif",
          width: 118,
          height: 144,
          alt: "",
        },
        name: "SKF",
        copy: (
          <>
            A mechanical man introduces a film showing man&apos;s progress in
            locomotion; a wide range of equipment using ball and roller bearings
            is displayed. SKF Industries, Inc., a world-wide manufacturer of ball
            and roller bearings, dramatizes its part in building the machines
            that make civilization run.
          </>
        ),
        highlights: [
          {
            label: "PROGRESS.",
            body: (
              <>
                Four screens and stop-motion techniques are used in a humorous
                film on the evolution of antifriction devices through history.
              </>
            ),
          },
          {
            label: "PRODUCTS.",
            body: (
              <>
                On display, full scale or in models, are many machines that use
                bearings: kitchen equipment, autos and trucks, railroad cars,
                submarines, helicopters and missiles.
              </>
            ),
          },
        ],
        admission: ["Admission: free."],
      }}
      map={{
        cover: {
          src: "/images/skf01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/skf01/transportation-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/skfmap",
      }}
    />
  );
}
