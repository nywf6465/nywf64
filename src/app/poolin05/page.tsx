import type { Metadata } from "next";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Construction — Pool of Industry — nywf64.com",
  description:
    "Pool of Industry / Fountain of the Planets construction photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry construction gallery.
 * Body from legacy poolin05.html. Layout: PhotographsPage with Construction
 * title (Photograph Scrap Book banner omitted).
 */
export default function Poolin05Page() {
  return (
    <PhotographsPage
      heroLabel="Pool of Industry"
      titleId="poolin05-title"
      title="Construction"
      hero={{
        src: "/images/poolinoverview/hero-banner.jpg",
        alt: "Pool of Industry at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<PoolinNavChrome />}
      previousHref="/poolin04"
      overviewHref="/poolinoverview"
      nextHref="/poolin06"
      sections={[
        {
          heading: "Construction Photographs",
          photos: [
            {
              image: {
                src: "/images/poolin05/fount11.jpg",
                width: 344,
                height: 236,
                alt: "Winter '61/'62 Shot",
              },
              title:
                "Winter (top) 1961/1962 and Spring (bottom) 1962 construction shots show the old course of the Flushing River as it cut through the Fairgrounds. By Spring, the outline of the pool is beginning to take shape.",
              source:
                "SOURCE: (top) N.Y. World's Fair 1964-1965 Corporation Progress Report #4 - January 17, 1962",
            },
            {
              image: {
                src: "/images/poolin05/fount10.jpg",
                width: 431,
                height: 285,
                alt: "Spring '62 Shot",
              },
              title:
                "Winter (top) 1961/1962 and Spring (bottom) 1962 construction shots show the old course of the Flushing River as it cut through the Fairgrounds. By Spring, the outline of the pool is beginning to take shape.",
              source:
                "SOURCE: (bottom) N.Y. World's Fair 1964-1965 Corporation Progress Report #5 - May 17, 1962",
            },
            {
              image: {
                src: "/images/poolin05/fount79.jpg",
                width: 160,
                height: 157,
                alt: "Fountain Planners/Designers",
              },
              title:
                "Inspecting construction for the Fountain of the Planets are Gilmore D. Clark, Sam Hamel, William E. Whipple and Robert Langer.",
              source:
                "SOURCE: New York World's Fair 1964-1965 Corporation Progress Report #9 - September 26, 1963",
            },
            {
              image: {
                src: "/images/poolin05/fount78.jpg",
                width: 208,
                height: 222,
                alt: "Summer '63 Shot",
              },
              title:
                "By late summer of 1963, the intricate piping has been installed.",
              source:
                "SOURCE: New York World's Fair 1964-1965 Corporation Progress Report #9 - September 26, 1963",
            },
            {
              image: {
                src: "/images/poolin05/fount06.jpg",
                width: 458,
                height: 255,
                alt: "Model of Fountain of the Planets",
              },
              title:
                "Models prepared to study the layout and operation of the Fountain of the Planets in the Pool of Industry. The many pipes and floodlights were created in miniature. To right is full size of one floodlight unit with its sliding color filters. In the model above, each small box is a floodlight unit, demonstrating the size of the final spectacular production.",
              source:
                "SOURCE: New York World's Fair 1964-1965 Corporation Progress Report #8 - April 22, 1963",
            },
            {
              image: {
                src: "/images/poolin05/fount07.jpg",
                width: 161,
                height: 203,
                alt: "Floodlight Unit",
              },
              title: "Floodlight unit with sliding color filters.",
              source:
                "SOURCE: New York World's Fair 1964-1965 Corporation Progress Report #8 - April 22, 1963",
            },
            {
              image: {
                src: "/images/poolin05/fount33.jpg",
                width: 460,
                height: 499,
                alt: "Pipes and Units installed",
              },
              title: (
                <>
                  <em>Fountain of the Planets</em>
                  <br />
                  The largest and most spectacular of the Fair&apos;s nine
                  fountains is this one. The island parts of the Fountain of the
                  Planets, located in the Pool of Industry, offer an automated
                  display of water, music, lights, and fireworks. Pneumatic
                  butterfly valves help vary water jet heights, and nozzles and
                  headers can be moved pneumatically or electrically to achieve
                  various effects. Lamps are in water-tight boxes equipped with
                  rotatable dichronic color filters.
                </>
              ),
              source: (
                <>
                  SOURCE: Consulting Engineer Magazine -{" "}
                  <em>(Courtesy of Bill Cotter)</em>
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin05/fount34.jpg",
                width: 460,
                height: 362,
                alt: "Block of Pipes and Units with Screens",
              },
              source: (
                <>
                  SOURCE: Consulting Engineer Magazine -{" "}
                  <em>(Courtesy of Bill Cotter)</em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
