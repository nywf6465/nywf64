import type { Metadata } from "next";
import { FairStoryNavChrome } from "@/components/FairStoryNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — The Story of the Fair — nywf64.com",
  description:
    "The Story of the Fair photograph album — fairgoer and commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * The Story of the Fair photograph album — fair_story02.
 * Body from legacy fair_story02.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (“photographs” standard). Shared storyhero.
 * Stack: storyhero → FairStoryNavChrome → navy title → sections → Nav2Bar.
 * Next returns to fair_story01 (matches legacy morebutton).
 */
export default function FairStory02Page() {
  return (
    <PhotographsPage
      heroLabel="The Story of the Fair"
      titleId="fair-story02-title"
      hero={{
        src: "/images/fair_story/storyhero.jpg",
        alt: "The Story of the Fair — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<FairStoryNavChrome />}
      previousHref="/fair_story01"
      nextHref="/fair_story01"
      sections={[
        {
          photos: [
            {
              image: {
                src: "/images/fair_story02/fairstory25.jpg",
                width: 700,
                height: 463,
                alt: "Aerial view of the entire Fairgrounds looking north toward Flushing Bay and LaGuardia Airport in Queens",
              },
              title: <>Aerial view of the entire Fairgrounds looking north toward Flushing Bay and LaGuardia Airport in Queens</>,
              source: <>SOURCE: NY World&apos;s Fair Publicity Photo courtesy Bradd Schiffman Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory26.jpg",
                width: 700,
                height: 554,
                alt: "Aerial view of the Fairgrounds looking southwest",
              },
              title: <>Aerial view of the Fairgrounds looking southwest</>,
              source: <>SOURCE: NY World&apos;s Fair Publicity Photo - nywf64.com Collection</>,
            }
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/fair_story02/fairstory24.jpg",
                width: 400,
                height: 353,
                alt: "Strolling down the Court of Nations",
              },
              title: <>Strolling down the Court of Nations</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory27.jpg",
                width: 400,
                height: 273,
                alt: "Map of the Fair",
              },
              title: <>Map of the Fair</>,
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory11.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking northwest over the State &amp; Federal Area as viewed from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking northwest over the State &amp; Federal Area as viewed from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory10.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking north toward Unisphere and the United States Pavilion from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking north toward Unisphere and the United States Pavilion from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory29.jpg",
                width: 400,
                height: 282,
                alt: "The Fair looking northeast over the International Area from the Swiss Skyride",
              },
              title: <>The Fair looking northeast over the International Area from the Swiss Skyride</>,
              source: <>SOURCE: Online auiction</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory07.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking northeast over the International Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking northeast over the International Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory33.jpg",
                width: 400,
                height: 279,
                alt: "The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory13.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory22.jpg",
                width: 400,
                height: 283,
                alt: "Flower Gardens and the Lunar Fountain",
              },
              title: <>Flower Gardens and the Lunar Fountain</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory31.jpg",
                width: 400,
                height: 458,
                alt: "The Fair looking east over the International Area toward the Industrial Area from the Swiss Skyride",
              },
              title: <>The Fair looking east over the International Area toward the Industrial Area from the Swiss Skyride</>,
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory15.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory16.jpg",
                width: 400,
                height: 268,
                alt: "The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory28.jpg",
                width: 400,
                height: 282,
                alt: "Another view of the Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers",
              },
              title: <>Another view of the Fair looking east over the International Area toward the Industrial Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory08.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking southwest over the Industrial Area from the top of the Better Living Building",
              },
              title: <>The Fair looking southwest over the Industrial Area from the top of the Better Living Building</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory12.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking north over the Pool of Industry and the Industrial Area from the top of the Better Living Building",
              },
              title: <>The Fair looking north over the Pool of Industry and the Industrial Area from the top of the Better Living Building</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory06.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking southeast toward the Vatican Pavilion and Belgian Village from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking southeast toward the Vatican Pavilion and Belgian Village from the New York State Pavilion observation towers</>,
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory21.jpg",
                width: 400,
                height: 251,
                alt: "The Fair looking south over the Amusement Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking south over the Amusement Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory09.jpg",
                width: 400,
                height: 267,
                alt: "The Fair looking south over the Amusement Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking south over the Amusement Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory17.jpg",
                width: 400,
                height: 260,
                alt: "The Fair looking southwest over the Transportation Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking southwest over the Transportation Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory18.jpg",
                width: 400,
                height: 270,
                alt: "The Fair looking west over the Transportation Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking west over the Transportation Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory19.jpg",
                width: 400,
                height: 260,
                alt: "The Fair looking west over the Transportation Area from the New York State Pavilion observation towers",
              },
              title: <>The Fair looking west over the Transportation Area from the New York State Pavilion observation towers</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory32.jpg",
                width: 400,
                height: 276,
                alt: "The Fair at night",
              },
              title: <>The Fair at night</>,
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory30.jpg",
                width: 400,
                height: 278,
                alt: "The Fair at night from the Better Living Building",
              },
              title: <>The Fair at night from the Better Living Building</>,
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory23.jpg",
                width: 400,
                height: 303,
                alt: "Fireworks explode over the Fountain of the Planets",
              },
              title: <>Fireworks explode over the Fountain of the Planets</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            }
          ],
        },
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/mainliner/555-01.jpg",
                width: 400,
                height: 271,
                alt: "Main Entrance to the Fair",
              },
              title: <>Main Entrance to the Fair</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines</>,
            },
            {
              image: {
                src: "/images/photolab/5602.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere",
              },
              title: <>Unisphere</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory03.jpg",
                width: 400,
                height: 271,
                alt: "The Fair looking east down the Fair&apos;s Main Mall",
              },
              title: <>The Fair looking east down the Fair&apos;s Main Mall</>,
              source: <>SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection</>,
            },
            {
              image: {
                src: "/images/fair_story02/fairstory05.jpg",
                width: 400,
                height: 273,
                alt: "View down the Avenue of Africa",
              },
              title: <>View down the Avenue of Africa</>,
              source: <>SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection</>,
            },
            {
              image: {
                src: "/images/photolab/5534.jpg",
                width: 400,
                height: 270,
                alt: "Along the Avenue of Transportation",
              },
              title: <>Along the Avenue of Transportation</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.</>,
            },
            {
              image: {
                src: "/images/mainliner/633-100.jpg",
                width: 400,
                height: 272,
                alt: "Nighttime view of Unisphere",
              },
              title: <>Nighttime view of Unisphere</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines</>,
            },
            {
              image: {
                src: "/images/mainliner/633-99.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere, The Rocket Thrower and Fountains of the Fair",
              },
              title: <>Unisphere, The Rocket Thrower and Fountains of the Fair</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines</>,
            },
            {
              image: {
                src: "/images/mainliner/633-01.jpg",
                width: 400,
                height: 272,
                alt: "Nighttime view of the Fair",
              },
              title: <>Nighttime view of the Fair</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines</>,
            },
            {
              image: {
                src: "/images/photolab/5613.jpg",
                width: 400,
                height: 267,
                alt: "General Electric, Tower of Light and Johnson Wax Pavilion reflections",
              },
              title: <>General Electric, Tower of Light and Johnson Wax Pavilion reflections</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.</>,
            },
            {
              image: {
                src: "/images/photolab/5648.jpg",
                width: 400,
                height: 267,
                alt: "View from New York State Pavilion observation towers",
              },
              title: <>View from New York State Pavilion observation towers</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.</>,
            },
            {
              image: {
                src: "/images/photolab/5649.jpg",
                width: 400,
                height: 267,
                alt: "The Rocket Thrower silhouetted against Fountains and Fireworks",
              },
              title: <>The Rocket Thrower silhouetted against Fountains and Fireworks</>,
              source: <>SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.</>,
            }
          ],
        }
      ]}
    />
  );
}
