import type { Metadata } from "next";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Pool of Industry — nywf64.com",
  description:
    "Pool of Industry photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry photograph album — “photographs” standard.
 * Body from legacy poolin04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Poolin04Page() {
  return (
    <PhotographsPage
      heroLabel="Pool of Industry"
      titleId="poolin04-title"
      hero={{
        src: "/images/poolinoverview/hero-banner.jpg",
        alt: "Pool of Industry at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<PoolinNavChrome />}
      previousHref="/poolin03"
      overviewHref="/poolinoverview"
      nextHref="/poolin05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/poolin04/fount60.jpg",
                width: 460,
                height: 458,
                alt: "A fabulous aerial shot of the fountain showing the inner workings of pipes and light boxes.",
              },
              title: "A fabulous aerial shot of the fountain showing the inner workings of pipes and light boxes.",
              source: "SOURCE: NY World's Fair publicity photo presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/poolin04/5408Large.jpg",
                width: 400,
                height: 280,
                alt: "Architect's rendering of the Fountain of the Planets",
              },
              title: "Architect's rendering of the Fountain of the Planets",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/poolin04/S-181CLarge.jpg",
                width: 400,
                height: 387,
                alt: "Architect's rendering of the Fountain of the Planets",
              },
              title: "Architect's rendering of the Fountain of the Planets",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/poolin04/5626.jpg",
                width: 400,
                height: 267,
                alt: "Fountain of the Planets",
              },
              title: "Fountain of the Planets",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/poolin04/5649.jpg",
                width: 400,
                height: 267,
                alt: "The Rocket Thrower silhouetted against the Fountain of the Planets",
              },
              title: "The Rocket Thrower silhouetted against the Fountain of the Planets",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/poolin04/5481.jpg",
                width: 400,
                height: 267,
                alt: "Fountain of the Planets at twilight",
              },
              title: "Fountain of the Planets at twilight",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/poolin04/S303D.jpg",
                width: 400,
                height: 400,
                alt: "Fountain of the Planets",
              },
              title: "Fountain of the Planets",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/poolin04/633-98.jpg",
                width: 400,
                height: 267,
                alt: "Fireworks and Fountain of the Planets display",
              },
              title: "Fireworks and Fountain of the Planets display",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/poolin04/79026Large.jpg",
                width: 259,
                height: 400,
                alt: "Fireworks and Fountain of the Planets display",
              },
              title: "Fireworks and Fountain of the Planets display",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/poolin04/79150Large.jpg",
                width: 400,
                height: 262,
                alt: "Fountain of the Planets",
              },
              title: "Fountain of the Planets",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/poolin04/fount52.jpg",
                width: 400,
                height: 265,
                alt: "Fountain of the Planets",
              },
              title: "Fountain of the Planets",
              source: (
                <>
                  SOURCE: Commercial Transparency from 
                  <em>United Air Lines Presents</em> Promotional Slide Show
                  presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin04/fount53.jpg",
                width: 400,
                height: 265,
                alt: "Fountain of the Planets",
              },
              title: "Fountain of the Planets",
              source: (
                <>
                  SOURCE: Commercial Transparency from 
                  <em>United Air Lines Presents</em> Promotional Slide Show
                  presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin04/fount54.jpg",
                width: 400,
                height: 254,
                alt: "Fountain of the Planets",
              },
              title: "Fountain of the Planets",
              source: (
                <>
                  SOURCE: Commercial Transparency from 
                  <em>United Air Lines Presents</em> Promotional Slide Show
                  presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin04/fount55.jpg",
                width: 400,
                height: 267,
                alt: "Fountain of the Planets",
              },
              title: "Fountain of the Planets",
              source: (
                <>
                  SOURCE: Commercial Transparency from 
                  <em>United Air Lines Presents</em> Promotional Slide Show
                  presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin04/fount56.jpg",
                width: 400,
                height: 270,
                alt: "Fireworks explode over the Fountain of the Planets",
              },
              title: "Fireworks explode over the Fountain of the Planets",
              source: (
                <>
                  SOURCE: Commercial Transparency from 
                  <em>United Air Lines Presents</em> Promotional Slide Show
                  presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin04/fount57.jpg",
                width: 400,
                height: 268,
                alt: "Fireworks explode over the Fountain of the Planets",
              },
              title: "Fireworks explode over the Fountain of the Planets",
              source: (
                <>
                  SOURCE: Commercial Transparency from 
                  <em>United Air Lines Presents</em> Promotional Slide Show
                  presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin04/fount86.jpg",
                width: 460,
                height: 367,
                alt: "Even in black and white, the fountains are stunning!",
              },
              title: "Even in black and white, the fountains are stunning!",
              source: "SOURCE: NY World's Fair publicity photo presented courtesy Craig Bavaro Collection",
            }
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/poolin04/fount105.jpg",
                width: 400,
                height: 267,
                alt: "A calm Pool of Industry with the Fountains of the Planets turned off affords a better view of the screens that hid the fountain works",
              },
              title: "A calm Pool of Industry with the Fountains of the Planets turned off affords a better view of the screens that hid the fountain works",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount137.jpg",
                width: 400,
                height: 297,
                alt: "The spraying Fountains of the Planets - Day",
              },
              title: "The spraying Fountains of the Planets - Day",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/poolin04/fount106.jpg",
                width: 400,
                height: 267,
                alt: "The spraying Fountains of the Planets - Day",
              },
              title: "The spraying Fountains of the Planets - Day",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount64.jpg",
                width: 400,
                height: 192,
                alt: "The spraying Fountains of the Planets - Day",
              },
              title: "The spraying Fountains of the Planets - Day",
              source: "SOURCE: © Copyright Ray Dashner Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount107.jpg",
                width: 400,
                height: 262,
                alt: "Fountains of the Planets and the Bell System Pavilion",
              },
              title: "Fountains of the Planets and the Bell System Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount108.jpg",
                width: 400,
                height: 267,
                alt: "Fountains of the Planets and the Bell System Pavilion",
              },
              title: "Fountains of the Planets and the Bell System Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount109.jpg",
                width: 400,
                height: 267,
                alt: "Fountains of the Planets and the swirling lights of the General Electric Pavilion",
              },
              title: "Fountains of the Planets and the swirling lights of the General Electric Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount124.jpg",
                width: 400,
                height: 274,
                alt: "Fountains of the Planets",
              },
              title: "Fountains of the Planets",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/poolin04/fount46.jpg",
                width: 400,
                height: 271,
                alt: "Fountains of the Planets - Note the street lighting that surrounds the pool. These tall thin luminaries were designed to compliment the heights of the water sprays of the fountains.",
              },
              title: "Fountains of the Planets - Note the street lighting that surrounds the pool. These tall thin luminaries were designed to compliment the heights of the water sprays of the fountains.",
              source: "SOURCE: © Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount40.jpg",
                width: 400,
                height: 261,
                alt: "Fountains of the Planets",
              },
              title: "Fountains of the Planets",
              source: "SOURCE: © Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount41.jpg",
                width: 400,
                height: 257,
                alt: "Fountains of the Planets",
              },
              title: "Fountains of the Planets",
              source: "SOURCE: © Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/poolin04/fount128.jpg",
                width: 400,
                height: 390,
                alt: "Fountains of the Planets",
              },
              title: "Fountains of the Planets",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/poolin04/fount125.jpg",
                width: 400,
                height: 400,
                alt: "Fountains of the Planets",
              },
              title: "Fountains of the Planets",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/poolin04/fount126.jpg",
                width: 400,
                height: 389,
                alt: "Fountains of the Planets",
              },
              title: "Fountains of the Planets",
              source: "SOURCE: Online auction",
            }
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/poolin04/fount87.jpg",
                width: 460,
                height: 359,
                alt: "Fountains of the Planets",
              },
              title: "Fountains of the Planets",
              source: (
                <>
                  SOURCE: Book <em>Flushing Meadows-Corona Park Public Ceremonies</em>
                </>
              ),
            },
            {
              image: {
                src: "/images/poolin04/fount36-collage.jpg",
                width: 699,
                height: 903,
                alt: "Pool of Industry photograph",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>, July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            }
          ],
        }
      ]}
    />
  );
}
