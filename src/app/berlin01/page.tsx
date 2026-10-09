import type { Metadata } from "next";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Berlin — nywf64.com",
  description:
    "Berlin pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Berlin guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy berlin01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Berlin01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Berlin"
      titleId="berlin01-title"
      hero={{
        src: "/images/berlinoverview/hero-banner.jpg",
        alt: "Berlin at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BerlinNavChrome />}
      nextHref="/berlin02"
      guide1964={{
        cover: {
          src: "/images/berlin01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/berlin01/berlin-logo-1964.gif",
          width: 144,
          height: 60,
          alt: "",
        },
        name: "BERLIN",
        copy: (
          <>
            The industry, cultural heritage and future of German&apos;s free
            world outpost are the themes of this privately sponsored pavilion.
            The round building is surrounded by a free-flowing blue awning and
            has a tentlike roof of flexible plastic. Showcases inside display
            samples of products made in West Berlin, and a short newsreel shows
            cultural, social and technological events in the city. There are
            portraits of Berliners who have won renown in many fields, and the
            work of current artists and sculptors is on display. A cartoon film
            shows West Berliners going about their daily chores. A map with
            special lighting effects shows the Berlin of the future.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/berlin01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/berlin01/berlin-logo-1965.gif",
          width: 144,
          height: 60,
          alt: "",
        },
        name: "BERLIN",
        nameFace: "arial",
        summary: (
          <>
            A film and color transparencies depict day-to-day life in this
            outpost of freedom.
          </>
        ),
        copy: (
          <>
            Privately sponsored by the Berlin Marketing Council, this pavilion
            is a tribute to a city whose people have built a vital cultural and
            industrial life in the shadow of Communism. There are displays
            picturing the Berlin Wall, and exhibits of the city&apos;s expanding
            intellectual and economic horizons.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/berlin01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/berlin01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/berlinmap",
      }}
    />
  );
}
