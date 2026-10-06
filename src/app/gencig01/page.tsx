import type { Metadata } from "next";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — General Cigar — nywf64.com",
  description:
    "General Cigar pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy gencig01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Preserve legacy wording (“had machine”).
 */
export default function Gencig01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="General Cigar"
      titleId="gencig01-title"
      hero={{
        src: "/images/gencigoverview/hero-banner.jpg",
        alt: "General Cigar at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GencigNavChrome />}
      previousHref="/gencigoverview"
      nextHref="/gencig02"
      guide1964={{
        cover: {
          src: "/images/gencig01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/gencig01/genciglogo64.gif",
          width: 144,
          height: 105,
          alt: "",
        },
        name: "GENERAL CIGAR",
        copy: (
          <>
            This is a small pavilion, but it has a lot going on. There is a Hall
            of Magic in which people are made to disappear; spectators watch
            movies of sports events - including parachute-jumping - filmed from
            startling angles; a machine blows 12-foot smoke rings 150 feet into
            the air every 20 seconds.
          </>
        ),
        admission: "* Admission: free.",
        highlights: [
          {
            label: "MAGIC SHOW.",
            body: (
              <>
                A magician causes human beings and objects to appear from
                nowhere, float about and vanish, in this 10-minute show staged
                three times an hour in the pavilion&apos;s theater. Visitors may
                also puzzle over a &quot;had machine&quot; - two life-sized hands
                projecting from strips of metal with nothing behind them, which
                move and make human gestures.
              </>
            ),
          },
          {
            label: "MOVIE IN THE ROUND.",
            body: (
              <>
                General Cigar and SPORTS ILLUSTRATED co-sponsor a bird&apos;s-eye
                view of sports in motion, projected on a 360° screen sunk in a
                well. Visitors may move freely around the well, looking down at
                baseball, football, hockey and other games photographed from
                above. The climax is a parachute sequence in which the viewer
                himself seems to be descending; it was filmed with a camera
                strapped to an actual jumper.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/gencig01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/gencig01/genciglogo.gif",
          width: 144,
          height: 105,
          alt: "",
        },
        name: "GENERAL CIGAR",
        summary:
          "There are two highlights: a live magic show in which people disappear, and spectacular aerial movies of sports events.",
        copy: (
          <>
            In a 12-minute show staged every 25 minutes, a magician makes people
            and things emerge from nowhere, float about and vanish. Outside the
            pavilion, a machine blows giant smoke rings into the air.
          </>
        ),
        admission: "¶ Admission: free.",
        highlights: [
          {
            label: "MOVIE IN THE ROUND.",
            body: (
              <>
                SPORTS ILLUSTRATED and General Cigar present movies of sports
                events photographed from above and projected on a circular screen
                at the bottom of a well. Visitors look down on films of baseball,
                football and other games. The climax is a parachute descent in
                which the viewer seems to be falling with the jumper.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/gencig01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/gencig01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/gencigmap",
      }}
    />
  );
}
