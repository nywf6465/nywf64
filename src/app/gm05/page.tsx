import type { Metadata } from "next";
import { GmNavChrome } from "@/components/GmNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — General Motors — nywf64.com",
  description:
    "General Motors Pavilion photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Motors Photograph Album — photographs standard.
 * Body from legacy gm05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Gm05Page() {
  return (
    <PhotographsPage
      heroLabel="General Motors Pavilion"
      titleId="gm05-title"
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm04"
      overviewHref="/gmoverview"
      nextHref="/gm06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/gm05/S-183ALarge.jpg",
                width: 400,
                height: 387,
                alt: "Artist's rendering of the General Motors Pavilion",
              },
              title: (<>
                Artist&apos;s rendering of the General Motors Pavilion
              </>),
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/gm05/5645.jpg",
                width: 400,
                height: 266,
                alt: "General Motors - Evening",
              },
              title: "General Motors - Evening",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/gm05/S301B.jpg",
                width: 400,
                height: 400,
                alt: "General Motors Canopy illuminated at night",
              },
              title: "General Motors Canopy illuminated at night",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/gm05/555-08.jpg",
                width: 400,
                height: 272,
                alt: "General Motors Pavilion",
              },
              title: "General Motors Pavilion",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/gm05/633-11.jpg",
                width: 400,
                height: 271,
                alt: "General Motors Pavilion",
              },
              title: "General Motors Pavilion",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/gm05/79114Large.jpg",
                width: 400,
                height: 262,
                alt: "General Motors Pavilion - Night",
              },
              title: "General Motors Pavilion - Night",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/gm05/79115Large.jpg",
                width: 400,
                height: 270,
                alt: "General Motors Pavilion - Crowds wait to board the Futurama ride",
              },
              title: "General Motors Pavilion - Crowds wait to board the Futurama ride",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/gm05/79120Large.jpg",
                width: 400,
                height: 262,
                alt: "General Motors Pavilion - Futurama Ride Train",
              },
              title: "General Motors Pavilion - Futurama Ride Train",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/gm05/gm169.jpg",
                width: 400,
                height: 288,
                alt: "General Motors Pavilion - Futurama Ride - Lunar Landscape",
              },
              title: "General Motors Pavilion - Futurama Ride - Lunar Landscape",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/5647.jpg",
                width: 400,
                height: 267,
                alt: "General Motors - Futurama Ride - Exploring the Lunar Surface",
              },
              title: "General Motors - Futurama Ride - Exploring the Lunar Surface",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/gm05/gm168.jpg",
                width: 400,
                height: 274,
                alt: "General Motors Pavilion - Futurama Ride - Space Station",
              },
              title: "General Motors Pavilion - Futurama Ride - Space Station",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/gm161.jpg",
                width: 400,
                height: 268,
                alt: "General Motors Pavilion - Futurama Ride - Antarctic Exploration",
              },
              title: "General Motors Pavilion - Futurama Ride - Antarctic Exploration",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/gm162.jpg",
                width: 400,
                height: 274,
                alt: "General Motors Pavilion - Futurama Ride - Antarctic Exploration",
              },
              title: "General Motors Pavilion - Futurama Ride - Antarctic Exploration",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/gm163.jpg",
                width: 400,
                height: 283,
                alt: "General Motors Pavilion - Futurama Ride - Weather Central",
              },
              title: "General Motors Pavilion - Futurama Ride - Weather Central",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/gm145.jpg",
                width: 400,
                height: 274,
                alt: "General Motors - Futurama Ride - Underseas Exploration",
              },
              title: "General Motors - Futurama Ride - Underseas Exploration",
              source: "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/gm05/gm164.jpg",
                width: 400,
                height: 263,
                alt: "General Motors Pavilion - Futurama Ride - Hotel Atlantis",
              },
              title: "General Motors Pavilion - Futurama Ride - Hotel Atlantis",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/gm144.jpg",
                width: 400,
                height: 273,
                alt: "General Motors - Futurama Ride - Undersea Hotel Atlantis",
              },
              title: "General Motors - Futurama Ride - Undersea Hotel Atlantis",
              source: "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/gm05/79121Large.jpg",
                width: 400,
                height: 264,
                alt: "General Motors Pavilion - Futurama Ride - Jungle Scene",
              },
              title: "General Motors Pavilion - Futurama Ride - Jungle Scene",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/gm05/gm160.jpg",
                width: 400,
                height: 276,
                alt: "General Motors Pavilion - Futurama Ride - Desert Farming",
              },
              title: "General Motors Pavilion - Futurama Ride - Desert Farming",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/79124Large.jpg",
                width: 400,
                height: 264,
                alt: "General Motors Pavilion - Futurama Ride - Home of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - Home of the Future",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/gm05/gm167.jpg",
                width: 400,
                height: 253,
                alt: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              },
              title: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/gm165.jpg",
                width: 400,
                height: 258,
                alt: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              },
              title: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/gm166.jpg",
                width: 400,
                height: 302,
                alt: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              },
              title: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
            {
              image: {
                src: "/images/gm05/79123Large.jpg",
                width: 400,
                height: 263,
                alt: "General Motors Pavilion - Futurama Ride - City of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - City of the Future",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/gm05/gm159.jpg",
                width: 400,
                height: 260,
                alt: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              },
              title: "General Motors Pavilion - Futurama Ride - City of Tomorrow",
              source: "SOURCE: www.rarehistoricalphotos.com website",
            },
          ],
        },
      ]}
    />
  );
}
