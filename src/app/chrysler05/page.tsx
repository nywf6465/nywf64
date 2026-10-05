import type { Metadata } from "next";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Chrysler — nywf64.com",
  description:
    "Chrysler photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler photograph album I — “photographs” standard.
 * Body from legacy chrysler05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Legacy wording (Gazeebo, Junie) preserved.
 */
export default function Chrysler05Page() {
  return (
    <PhotographsPage
      heroLabel="Chrysler"
      titleId="chrysler05-title"
      title="Photograph Album"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler04"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [

            {
              image: {
                src: "/images/chrysler05/chrysler94.jpg",
                width: 400,
                height: 295,
                alt: "Chrysler's autofare Islands under construction - Winter 1964",
              },
              title: <>Chrysler&apos;s <em>autofare</em> Islands under construction - Winter 1964</>,
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/5537.jpg",
                width: 270,
                height: 400,
                alt: "Chrysler's Auto Parts Zoo Zookeeper",
              },
              title: "Chrysler's Auto Parts Zoo Zookeeper",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/chrysler05/5536.jpg",
                width: 268,
                height: 400,
                alt: "Chrysler's Rocket",
              },
              title: "Chrysler's Rocket",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/chrysler05/S307B.jpg",
                width: 400,
                height: 406,
                alt: "Chrysler's Giant Auto",
              },
              title: "Chrysler's Giant Auto",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/chrysler05/S307D.jpg",
                width: 400,
                height: 402,
                alt: "Chrysler's Giant Engine",
              },
              title: "Chrysler's Giant Engine",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/chrysler05/555-12.jpg",
                width: 400,
                height: 271,
                alt: "Giant Engine - part of Chrysler's autofare Islands",
              },
              title: <>Giant Engine - part of Chrysler&apos;s <em>autofare</em> Islands</>,
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/chrysler05/555-13.jpg",
                width: 271,
                height: 400,
                alt: "Rocket symbolizes Chrysler's space and missile work",
              },
              title: "Rocket symbolizes Chrysler's space and missile work",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/chrysler05/633-12.jpg",
                width: 400,
                height: 272,
                alt: "Chrysler's Rocket and Giant Auto",
              },
              title: "Chrysler's Rocket and Giant Auto",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler90.jpg",
                width: 400,
                height: 273,
                alt: "Chrysler's Giant Auto",
              },
              title: "Chrysler's Giant Auto",
              source: "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler105.jpg",
                width: 400,
                height: 221,
                alt: "Chrysler's Giant Auto",
              },
              title: "Chrysler's Giant Auto",
              source: "SOURCE: Screen Shot - Film:  To the Fair",
            },
            {
              image: {
                src: "/images/chrysler05/chry59.jpg",
                width: 400,
                height: 392,
                alt: "Panorama of the Chrysler autofare Islands as seen from the top of the Heliport",
              },
              title: <>Panorama of the Chrysler <em>autofare</em> Islands as seen from the top of the Heliport</>,
              source: "SOURCE: Commercial Transparencies by © Pana-Vue presented courtesy Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chry57.jpg",
                width: 400,
                height: 350,
                alt: "Panorama of the Chrysler autofare Islands as seen from the top of the Heliport",
              },
              title: <>Panorama of the Chrysler <em>autofare</em> Islands as seen from the top of the Heliport</>,
              source: "SOURCE: Commercial Transparencies by © Pana-Vue presented courtesy Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chry58.jpg",
                width: 400,
                height: 402,
                alt: "Panorama of the Chrysler autofare Islands as seen from the top of the Heliport",
              },
              title: <>Panorama of the Chrysler <em>autofare</em> Islands as seen from the top of the Heliport</>,
              source: "SOURCE: Commercial Transparencies by © Pana-Vue presented courtesy Bill Cotter Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [

            {
              image: {
                src: "/images/chrysler05/chrysler83.jpg",
                width: 400,
                height: 267,
                alt: "Chrysler's autofare Islands as seen in 1965",
              },
              title: <>Chrysler&apos;s <em>autofare</em> Islands as seen in 1965</>,
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler101.jpg",
                width: 400,
                height: 295,
                alt: "Chrysler's autofare Islands as seen in 1965",
              },
              title: <>Chrysler&apos;s <em>autofare</em> Islands as seen in 1965</>,
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler95.jpg",
                width: 400,
                height: 423,
                alt: "Chrysler's giant engine as seen in 1964",
              },
              title: "Chrysler's giant engine as seen in 1964",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler84.jpg",
                width: 400,
                height: 267,
                alt: "Chrysler's autofare Islands as seen in 1965",
              },
              title: <>Chrysler&apos;s <em>autofare</em> Islands as seen in 1965</>,
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler86.jpg",
                width: 400,
                height: 267,
                alt: "Giant license plate - a photo-op for the kids",
              },
              title: "Giant license plate - a photo-op for the kids",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler98.jpg",
                width: 400,
                height: 297,
                alt: "Giant license plate - a photo-op for the kids",
              },
              title: "Giant license plate - a photo-op for the kids",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler87.jpg",
                width: 400,
                height: 267,
                alt: "Chrysler's Giant Auto",
              },
              title: "Chrysler's Giant Auto",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler100.jpg",
                width: 400,
                height: 399,
                alt: "Chrysler's Giant Auto",
              },
              title: "Chrysler's Giant Auto",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler88.jpg",
                width: 400,
                height: 269,
                alt: "Chrysler autofare Islands showing new car fountains",
              },
              title: <>Chrysler <em>autofare</em> Islands showing new car fountains</>,
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler89.jpg",
                width: 400,
                height: 267,
                alt: "Chrysler autofare Islands in 1965",
              },
              title: <>Chrysler <em>autofare</em> Islands in 1965</>,
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chry23.jpg",
                width: 400,
                height: 306,
                alt: "Chrysler Giant Auto in 1965",
              },
              title: "Chrysler Giant Auto in 1965",
              source: "SOURCE: © Copyright Craig Konowal Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chry01.jpg",
                width: 308,
                height: 258,
                alt: "Spraying Auto Fountain at Chrysler autofare",
              },
              title: <>Spraying Auto Fountain at Chrysler <em>autofare</em></>,
              source: "SOURCE: © Copyright Larry Hubbel Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chry62.jpg",
                width: 400,
                height: 312,
                alt: "Chrysler Giant Auto in 1964",
              },
              title: "Chrysler Giant Auto in 1964",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler85.jpg",
                width: 400,
                height: 267,
                alt: "Inside Chrysler's Show-Go-Round",
              },
              title: "Inside Chrysler's Show-Go-Round",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler99.jpg",
                width: 400,
                height: 286,
                alt: "Chrysler Auto Parts Zoo",
              },
              title: "Chrysler Auto Parts Zoo",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler102.jpg",
                width: 400,
                height: 292,
                alt: "Chrysler Gazeebo 1965",
              },
              title: "Chrysler Gazeebo 1965",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler92.jpg",
                width: 400,
                height: 387,
                alt: "Chrysler Gazeebo 1965",
              },
              title: "Chrysler Gazeebo 1965",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler96.jpg",
                width: 260,
                height: 400,
                alt: "Chrysler Auto Parts Zoo - Zookeeper",
              },
              title: "Chrysler Auto Parts Zoo - Zookeeper",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler104.jpg",
                width: 400,
                height: 391,
                alt: "Chrysler Auto Parts Zoo - Zookeeper",
              },
              title: "Chrysler Auto Parts Zoo - Zookeeper",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler103.jpg",
                width: 400,
                height: 394,
                alt: "Chrysler Auto Parts Zoo",
              },
              title: "Chrysler Auto Parts Zoo",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler93.jpg",
                width: 400,
                height: 382,
                alt: "Chrysler Auto Parts Zoo",
              },
              title: "Chrysler Auto Parts Zoo",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler97.jpg",
                width: 400,
                height: 278,
                alt: "Chrysler Auto Parts Zoo",
              },
              title: "Chrysler Auto Parts Zoo",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler106.jpg",
                width: 400,
                height: 400,
                alt: "Night View 1964",
              },
              title: "Night View 1964",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler107.jpg",
                width: 400,
                height: 400,
                alt: "Night View 1964",
              },
              title: "Night View 1964",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler108.jpg",
                width: 400,
                height: 400,
                alt: "Night View 1964",
              },
              title: "Night View 1964",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler109.jpg",
                width: 400,
                height: 387,
                alt: "Night View 1964",
              },
              title: "Night View 1964",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chrysler05/chrysler91.jpg",
                width: 400,
                height: 282,
                alt: "Night View 1965",
              },
              title: "Night View 1965",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [

            {
              image: {
                src: "/images/chrysler05/chry13.01.jpg",
                width: 233,
                height: 262,
                alt: "chry13.01.jpg",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
                  July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/chry13.02.jpg",
                width: 233,
                height: 262,
                alt: "chry13.02.jpg",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
                  July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/chry13.03.jpg",
                width: 233,
                height: 262,
                alt: "chry13.03.jpg",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
                  July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/chry13.04.jpg",
                width: 233,
                height: 262,
                alt: "chry13.04.jpg",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
                  July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/chry13.05.jpg",
                width: 233,
                height: 262,
                alt: "chry13.05.jpg",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
                  July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/chry13.06.jpg",
                width: 233,
                height: 262,
                alt: "chry13.06.jpg",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
                  July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/chry21.jpg",
                width: 400,
                height: 299,
                alt: "Tribute to Transportation — Chrysler engineering island",
              },
              title: (
                <>
                  TRIBUTE TO TRANSPORTATION From the wheel to the rocket, the
                  story of locomotion can be traced in the Fair&apos;s
                  Transportation Area. But the major emphasis is on the automobile
                  -- past, present and future, which is no surprise inasmuch as
                  the area&apos;s (and Fair&apos;s) three largest tenants are
                  Chrysler, Ford and General Motors. Here, from the Avenue of
                  Automation, we see Chrysler&apos;s engineering island, one of
                  five that are set in a man-made lake. Beyond is the &quot;crown
                  roast&quot; atop Ford&apos;s exhibit.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto, <em>New York Sunday News</em>, Date
                  unknown
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/chry22.jpg",
                width: 180,
                height: 192,
                alt: "Puppets Carby Carburetor and Grease Monkeys",
              },
              title:
                'Puppets Carby Carburetor and Grease Monkeys introduce unique "Show-Go-Round" at Chrysler.',
              source: (
                <>
                  SOURCE: News Colorfoto by William Klein and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, Junie 13, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/chrysler05/building116.jpg",
                width: 300,
                height: 194,
                alt: "Chrysler's Pentastar Theater gets a roof!",
              },
              title: "Chrysler's Pentastar Theater gets a roof!",
              source:
                "SOURCE: NY World's Fair Progress Report No. 9, September 26, 1963",
            },
            {
              image: {
                src: "/images/chrysler05/building131.jpg",
                width: 400,
                height: 335,
                alt: "Chrysler's autofare in the autumn of 1963",
              },
              title: (
                <>
                  Chrysler&apos;s <em>autofare</em> in the autumn of 1963 (left
                  center)
                </>
              ),
              source:
                "SOURCE: NY World's Fair Progress Report No. 9, September 26, 1963",
            },
          ],
        },
      ]}
    />
  );
}
