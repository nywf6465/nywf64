import type { Metadata } from "next";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album I — Space Park — nywf64.com",
  description:
    "Space Park Photograph Album I — photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park Photograph Album I — “photographs” standard.
 * Body from legacy spacpark04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Spacpark04Page() {
  return (
    <PhotographsPage
      heroLabel="Space Park"
      titleId="spacpark04-title"
      title="Photograph Album I"
      hero={{
        src: "/images/spacparkoverview/hero-banner.jpg",
        alt: "Space Park at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SpacparkNavChrome />}
      previousHref="/spacpark03"
      overviewHref="/spacparkoverview"
      nextHref="/spacpark05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/spacpark04/ussppk71.jpg",
                width: 348,
                height: 400,
                alt: "Space Park Concept Art",
              },
              title: "Space Park Concept Art",
              source: "SOURCE: US Department of Defence & NASA via www.create-space.art website",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk66.jpg",
                width: 400,
                height: 289,
                alt: "Space Park Concept Art",
              },
              title: "Space Park Concept Art",
              source: "SOURCE: US Department of Defence & NASA via www.create-space.art website",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk65.jpg",
                width: 400,
                height: 264,
                alt: "US Space Park Aerial View with the Hall of Science Under Construction",
              },
              title: "US Space Park Aerial View with the Hall of Science Under Construction",
              source: "SOURCE: Bill Cotter via www.create-space.art website",
            },
            {
              image: {
                src: "/images/spacpark04/photolab-5529.jpg",
                width: 400,
                height: 262,
                alt: "NASA Space Park Exhibit",
              },
              title: "NASA Space Park Exhibit",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk69.jpg",
                width: 400,
                height: 241,
                alt: "X-15 Display",
              },
              title: "X-15 Display",
              source: "SOURCE: www.create-space.art website",
            },
            {
              image: {
                src: "/images/spacpark04/photolab-5538.jpg",
                width: 400,
                height: 268,
                alt: "Gemini Space Capsule inside US Space Park",
              },
              title: "Gemini Space Capsule inside US Space Park",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/spacpark04/mainliner-633-08.jpg",
                width: 400,
                height: 270,
                alt: "US Space Park Exhibit",
              },
              title: "US Space Park Exhibit",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/spacpark04/mainliner-633-09.jpg",
                width: 265,
                height: 400,
                alt: "Telstar - US Space Park Exhibit",
              },
              title: "Telstar - US Space Park Exhibit",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/spacpark04/wolfe-79165Large.jpg",
                width: 400,
                height: 264,
                alt: "Gordon Cooper's Mercury Space Capsule at US Space Park",
              },
              title: "Gordon Cooper's Mercury Space Capsule at US Space Park",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk68.jpg",
                width: 400,
                height: 377,
                alt: "Mercury & Gemini Displays",
              },
              title: "Mercury & Gemini Displays",
              source: "SOURCE: www.create-space.art website",
            },
            {
              image: {
                src: "/images/spacpark04/wolfe-79167Large.jpg",
                width: 400,
                height: 262,
                alt: "Gemini Space Capsule at US Space Park",
              },
              title: "Gemini Space Capsule at US Space Park",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/spacpark04/wolfe-79168Large.jpg",
                width: 260,
                height: 400,
                alt: "Saturn V Boat Tail at US Space Park",
              },
              title: "Saturn V Boat Tail at US Space Park",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk67.jpg",
                width: 400,
                height: 384,
                alt: "Lunar Lading Module on display at US Space Park",
              },
              title: "Lunar Lading Module on display at US Space Park",
              source: "SOURCE: NASA via www.create-space.art website",
            },
            {
              image: {
                src: "/images/spacpark04/wolfe-79169Large.jpg",
                width: 400,
                height: 262,
                alt: "Lunar Lading Module on display at US Space Park",
              },
              title: "Lunar Lading Module on display at US Space Park",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk48.jpg",
                width: 273,
                height: 400,
                alt: "US Space Park",
              },
              title: "US Space Park",
              source: "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk64.jpg",
                width: 400,
                height: 384,
                alt: "US Space Park at Night",
              },
              title: "US Space Park at Night",
              source: "SOURCE: NASA via www.create-space.art website",
            }
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/spacpark04/ussppk53.jpg",
                width: 400,
                height: 253,
                alt: "Entering the US Space Park",
              },
              title: "Entering the US Space Park",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk51.jpg",
                width: 400,
                height: 256,
                alt: "US Space Park - X15",
              },
              title: "US Space Park - X15",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk52.jpg",
                width: 400,
                height: 268,
                alt: "US Space Park - X15",
              },
              title: "US Space Park - X15",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk47.jpg",
                width: 288,
                height: 400,
                alt: "Rocket display at the US Space Park",
              },
              title: "Rocket display at the US Space Park",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk49.jpg",
                width: 400,
                height: 266,
                alt: "US Space Park",
              },
              title: "US Space Park",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk72.jpg",
                width: 400,
                height: 300,
                alt: "US Space Park - Mercury Space Capsule",
              },
              title: "US Space Park - Mercury Space Capsule",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk57.jpg",
                width: 400,
                height: 254,
                alt: "US Space Park - Gemini Space Capsule",
              },
              title: "US Space Park - Gemini Space Capsule",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk50.jpg",
                width: 400,
                height: 255,
                alt: "US Space Park",
              },
              title: "US Space Park",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk63.jpg",
                width: 400,
                height: 279,
                alt: "US Space Park & Fountain of Progress North",
              },
              title: "US Space Park & Fountain of Progress North",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk46.jpg",
                width: 400,
                height: 268,
                alt: "Saturn V \"Boat Tail\" on display at US Space Park",
              },
              title: "Saturn V \"Boat Tail\" on display at US Space Park",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk54.jpg",
                width: 400,
                height: 267,
                alt: "Saturn V \"Boat Tail\" engines",
              },
              title: "Saturn V \"Boat Tail\" engines",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk55.jpg",
                width: 400,
                height: 259,
                alt: "Apollo Vehicles",
              },
              title: "Apollo Vehicles",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk56.jpg",
                width: 400,
                height: 264,
                alt: "Apollo Command and Service Modules",
              },
              title: "Apollo Command and Service Modules",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk58.jpg",
                width: 400,
                height: 268,
                alt: "Apollo's Lunar Landing Module",
              },
              title: "Apollo's Lunar Landing Module",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk59.jpg",
                width: 400,
                height: 273,
                alt: "Alouette Research Satellite",
              },
              title: "Alouette Research Satellite",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk60.jpg",
                width: 400,
                height: 266,
                alt: "Mariner IV Mars Explorer",
              },
              title: "Mariner IV Mars Explorer",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk61.jpg",
                width: 400,
                height: 252,
                alt: "Ranger Moon Probe Spacecraft",
              },
              title: "Ranger Moon Probe Spacecraft",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            }
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/spacpark04/ussppk62.jpg",
                width: 460,
                height: 513,
                alt: "Having been piloted at twice the speed of a bullet and half as high as an orbiting spaceship in more than 100 flights, the X-15 plane-rocket spacecraft at the U.S. Space Park still points to the future.",
              },
              title: "Having been piloted at twice the speed of a bullet and half as high as an orbiting spaceship in more than 100 flights, the X-15 plane-rocket spacecraft at the U.S. Space Park still points to the future.",
              source: "SOURCE: News Colorfoto by Daniel Jacino, New York Sunday News, June 20, 1965",
            },
            {
              image: {
                src: "/images/spacpark04/ussppk43.jpg",
                width: 350,
                height: 291,
                alt: "Elevated view of the Space Park from the roof of the Ford Pavilion",
              },
              title: "Elevated view of the Space Park from the roof of the Ford Pavilion",
              source: "SOURCE: Unknown - presented courtesy Rod Smith Collection",
            }
          ],
        }
      ]}
    />
  );
}
