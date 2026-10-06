import type { Metadata } from "next";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — General Cigar — nywf64.com",
  description:
    "General Cigar pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar photograph album — “photographs” standard.
 * Body from legacy gencig05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Gencig05Page() {
  return (
    <PhotographsPage
      heroLabel="General Cigar"
      titleId="gencig05-title"
      hero={{
        src: "/images/gencigoverview/hero-banner.jpg",
        alt: "General Cigar at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GencigNavChrome />}
      previousHref="/gencig04"
      overviewHref="/gencigoverview"
      nextHref="/gencig06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/gencig05/gencig06.jpg",
                width: 600,
                height: 451,
                alt: "General Cigar Hall of Magic offers giant smoke rings, magic and sports movies",
              },
              title: (
                <>
                  GENERAL CIGAR HALL OF MAGIC OFFERS GIANT SMOKE RINGS, MAGIC AND
                  SPORTS MOVIES TO THRONGS AT WORLD&apos;S FAIR One of the
                  World&apos;s Fair&apos;s most popular exhibits - the General
                  Cigar Hall of Magic - offers a continuous live magic show,
                  thrilling sports action movies and other exhibits to the
                  throngs attracted by its unusual landmark - machine lofting
                  giant smoke rings high above the Fair. There is no admission
                  charge. The magic show - created and narrated by television&apos;s
                  renowned wizard Mark Wilson - plays three times an hour in an
                  ultra-modern Magic theatre, and includes such classic thrillers
                  as sawing a woman in half and levitation. The films of sports
                  including boxing, sky diving and baseball were shot from
                  overhead with a special camera and are projected onto a sunken
                  screen to give a feeling of immediate participation.
                </>
              ),
              source:
                "SOURCE: NY World's Fair Publicity Photo - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gencig05/5457Large.jpg",
                width: 400,
                height: 280,
                alt: "Artist's rendering of the General Cigar Pavilion",
              },
              title: "Artist's rendering of the General Cigar Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/gencig05/5476.jpg",
                width: 400,
                height: 267,
                alt: "General Cigar Pavilion",
              },
              title: "General Cigar Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/gencig05/gencig08.jpg",
                width: 300,
                height: 552,
                alt: 'The smoke machine blows "puffs of smoke" outside the General Cigar Pavilion',
              },
              title: (
                <>
                  The smoke machine blows &quot;puffs of smoke&quot; (non-tobacco)
                  outside the General Cigar Pavilion.
                </>
              ),
              source: <>&nbsp;</>,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/gencig05/gencig39.jpg",
                width: 400,
                height: 267,
                alt: "Solar Fountain and the General Cigar Pavilion",
              },
              title: "Solar Fountain and the General Cigar Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gencig05/gencig34.jpg",
                width: 400,
                height: 261,
                alt: "General Cigar Pavilion",
              },
              title: "General Cigar Pavilion",
              source: "SOURCE: Online Auction",
            },
          ],
        },
      ]}
    />
  );
}
