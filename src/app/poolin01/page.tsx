import type { Metadata } from "next";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Pool of Industry — nywf64.com",
  description:
    "Pool of Industry entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy poolin01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Poolin01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Pool of Industry"
      titleId="poolin01-title"
      hero={{
        src: "/images/poolinoverview/hero-banner.jpg",
        alt: "Pool of Industry at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<PoolinNavChrome />}
      previousHref="/poolinoverview"
      nextHref="/poolin02"
      guide1964={{
        cover: {
          src: "/images/poolin01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/poolin01/poolinlogo64.gif",
          width: 144,
          height: 109,
          alt: "",
        },
        name: "POOL OF INDUSTRY",
        copy: (
          <>
            Every night as darkness falls a spectacular display of synchronized
            water, fireworks, color and music at the Pool of Industry caps the
            day and launches the evening at the Fair. The largest fountain in
            the world, the Fountain of the Planets, sends roughly 10,000 tons of
            water into the air in shifting patterns, sometimes as high as 150
            feet. Rockets are released from 464 launchers, lights casting close
            to 150 million candle power throw color effects on water and sky,
            and the music of a 60-piece symphony orchestra sounds over
            loudspeakers - all with coordinated timing and effects. The
            fountain, covering 25,000 square feet, composes its patterns through
            2,000 nozzles and is completely automated - allowing split-second
            timing so the water can be synchronized with the fireworks, lights
            and music. Each night, one of five different musical programs is
            presented.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/poolin01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/poolin01/poolinlogo.gif",
          width: 144,
          height: 109,
          alt: "",
        },
        name: "POOL OF INDUSTRY",
        nameFace: "arial",
        summary:
          "A gigantic symphony of fireworks, water, color and music occurs every evening.",
        copy: (
          <>
            The Fountain of the Planets, largest in the world, shoots 10,000
            tons of water as high as 150 feet into the air in ever-changing
            patterns. Rockets are fired from 464 launchers; lights totaling 150
            million candle power cast their brilliant colors at water and sky;
            and music plays over loudspeakers. The fountain is automated,
            allowing split-second coordination of water jets, lights and music
            in five completely different shows.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/poolin01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/poolin01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/poolinmap",
        subjectNoun: "fountain",
      }}
    />
  );
}
