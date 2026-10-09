import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Coca-Cola — nywf64.com",
  description:
    "Coca-Cola pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola photograph album I — “photographs” standard.
 * Body from legacy coke04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Coke04Page() {
  return (
    <PhotographsPage
      heroLabel="Coca-Cola"
      titleId="coke04-title"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke03"
      overviewHref="/cokeoverview"
      nextHref="/coke05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/coke04/coke41.jpg",
                width: 597,
                height: 475,
                alt: "Aerial view of the Coca-Cola Pavilion",
              },
              title: "Aerial view of the Coca-Cola Pavilion",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/coke04/S-184CLarge.jpg",
                width: 400,
                height: 364,
                alt: "Artist's rendering of the Coca-Cola Pavilion",
              },
              title: "Artist's rendering of the Coca-Cola Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/coke04/5474.jpg",
                width: 400,
                height: 267,
                alt: "Coca-Cola Pavilion - Night",
              },
              title: "Coca-Cola Pavilion - Night",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/coke04/S302C.jpg",
                width: 400,
                height: 400,
                alt: "Entrance to the Coca-Cola Pavilion - Night",
              },
              title: "Entrance to the Coca-Cola Pavilion - Night",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/coke04/555-34.jpg",
                width: 400,
                height: 270,
                alt: "Coca-Cola Pavilion",
              },
              title: "Coca-Cola Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/coke04/633-67.jpg",
                width: 400,
                height: 267,
                alt: "Coca-Cola Pavilion Entrance",
              },
              title: "Coca-Cola Pavilion Entrance",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/coke04/79072Large.jpg",
                width: 400,
                height: 261,
                alt: "Taj Mahal through fountains at the Coca-Cola Pavilion",
              },
              title: "Taj Mahal through fountains at the Coca-Cola Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/coke04/79073Large.jpg",
                width: 400,
                height: 263,
                alt: "Alpine Lodge setting in the Coca-Cola Pavilion",
              },
              title: "Alpine Lodge setting in the Coca-Cola Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/coke04/coke38.jpg",
                width: 400,
                height: 267,
                alt: "Coca-Cola Pavilion",
              },
              title: "Coca-Cola Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/coke04/coke59.jpg",
                width: 400,
                height: 401,
                alt: "Coca-Cola Pavilion",
              },
              title: "Coca-Cola Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/coke04/coke58.jpg",
                width: 400,
                height: 266,
                alt: "Coca-Cola Tower Night View",
              },
              title: "Coca-Cola Tower Night View",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/coke04/coke39.jpg",
                width: 266,
                height: 400,
                alt: "Coca-Cola Pavilion Carillon",
              },
              title: "Coca-Cola Pavilion Carillon",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/coke04/coke02.jpg",
                width: 261,
                height: 400,
                alt: "Refreshing fountain outside the World of Refreshment - Coca-Cola Pavilion",
              },
              title:
                "Refreshing fountain outside the World of Refreshment - Coca-Cola Pavilion",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/coke04/coke01.jpg",
                width: 400,
                height: 301,
                alt: "Visitors waiting to embark on Coca-Cola's atmospheric Global Holiday",
              },
              title:
                "Visitors waiting to embark on Coca-Cola's atmospheric Global Holiday within may enjoy a carillon concert emanating from the bell tower. Pavilion also houses a USO lounge and ham radio facilities.",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, Date unknown (1964)
                </>
              ),
            },
            {
              image: {
                src: "/images/coke04/coke56.jpg",
                width: 300,
                height: 251,
                alt: 'A street in Hong Kong, re-created in Coca-Cola\'s "Global Holiday."',
              },
              title:
                'A street in Hong Kong, re-created in such detail as to include the voices and smells a visitor might encounter, is one stop on Coca-Cola\'s "Global Holiday."',
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, June 27, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/coke04/coke55-collage.jpg",
                width: 699,
                height: 532,
                alt: "Electrical Construction and Maintenance magazine pages on the Coca-Cola pavilion",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>
                  , July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
