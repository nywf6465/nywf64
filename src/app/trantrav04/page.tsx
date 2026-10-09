import type { Metadata } from "next";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album I — Transportation & Travel — nywf64.com",
  description:
    "Transportation & Travel Pavilion photograph album I — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab = (
  <>
    SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
  </>
);

const blackhawk = (
  <>
    SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air
    Lines
  </>
);

/**
 * Transportation & Travel photograph album I — “photographs” standard.
 * Body from legacy trantrav04.html (Photograph Scrap Book banner omitted).
 */
export default function Trantrav04Page() {
  return (
    <PhotographsPage
      heroLabel="Transportation & Travel"
      titleId="trantrav04-title"
      title="Photograph Album I"
      hero={{
        src: "/images/trantravoverview/hero-banner.jpg",
        alt: "Transportation & Travel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TrantravNavChrome />}
      previousHref="/trantrav03"
      overviewHref="/trantravoverview"
      nextHref="/trantrav05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/trantrav04/tratra06.jpg",
                width: 400,
                height: 265,
                alt: "Proposed Transportation & Travel Pavilion",
              },
              title: (
                <>
                  <strong>Proposed Transportation &amp; Travel Pavilion -</strong>{" "}
                  Charles Luckman Associates, Architects
                </>
              ),
              source: (
                <>
                  SOURCE: NY World&apos;s Fair Corporation{" "}
                  <em>Progress Report No. 4,</em> January 17, 1962
                </>
              ),
            },
            {
              image: {
                src: "/images/trantrav04/5429Large.jpg",
                width: 400,
                height: 277,
                alt: "Artist's rendering of the Transportation & Travel Pavilion",
              },
              title: (
                <strong>
                  Artist&apos;s rendering of the Transportation &amp; Travel
                  Pavilion
                </strong>
              ),
              source: photoLab,
            },
            {
              image: {
                src: "/images/trantrav04/5533.jpg",
                width: 400,
                height: 275,
                alt: "Transportation & Travel Pavilion",
              },
              title: (
                <strong>Transportation &amp; Travel Pavilion</strong>
              ),
              source: photoLab,
            },
            {
              image: {
                src: "/images/trantrav04/5539.jpg",
                width: 400,
                height: 267,
                alt: "Transportation & Travel Pavilion",
              },
              title: (
                <strong>Transportation &amp; Travel Pavilion</strong>
              ),
              source: photoLab,
            },
            {
              image: {
                src: "/images/trantrav04/5534.jpg",
                width: 400,
                height: 270,
                alt: "Transportation & Travel Pavilion on the Avenue of Automation",
              },
              title: (
                <strong>
                  Transportation &amp; Travel Pavilion on the Avenue of
                  Automation
                </strong>
              ),
              source: photoLab,
            },
            {
              image: {
                src: "/images/trantrav04/S313B.jpg",
                width: 400,
                height: 412,
                alt: "Transportation & Travel Pavilion on the Avenue of Automation",
              },
              title: (
                <strong>
                  Transportation &amp; Travel Pavilion on the Avenue of
                  Automation
                </strong>
              ),
              source: photoLab,
            },
            {
              image: {
                src: "/images/trantrav04/555-20.jpg",
                width: 400,
                height: 271,
                alt: "Transportation & Travel Pavilion",
              },
              title: (
                <strong>Transportation &amp; Travel Pavilion</strong>
              ),
              source: blackhawk,
            },
            {
              image: {
                src: "/images/trantrav04/633-14.jpg",
                width: 400,
                height: 267,
                alt: "Transportation & Travel Pavilion",
              },
              title: (
                <strong>Transportation &amp; Travel Pavilion</strong>
              ),
              source: blackhawk,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/trantrav04/tratra99.jpg",
                width: 400,
                height: 274,
                alt: "Transportation & Travel Pavilion from NY State Observation Tower",
              },
              title: (
                <strong>
                  Transportation &amp; Travel Pavilion from NY State
                  Observation Tower
                </strong>
              ),
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/trantrav04/tratra62.jpg",
                width: 400,
                height: 274,
                alt: "Transportation & Travel Pavilion as seen from the Heliport",
              },
              title: (
                <strong>
                  Transportation &amp; Travel Pavilion as seen from the Heliport
                </strong>
              ),
              source: <>SOURCE: © Copyright Bill Cotter Collection</>,
            },
            {
              image: {
                src: "/images/trantrav04/tratra97.jpg",
                width: 400,
                height: 267,
                alt: "Transportation & Travel Pavilion",
              },
              title: (
                <strong>Transportation &amp; Travel Pavilion</strong>
              ),
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/trantrav04/tratra98.jpg",
                width: 400,
                height: 252,
                alt: "Transportation & Travel Pavilion",
              },
              title: (
                <strong>Transportation &amp; Travel Pavilion</strong>
              ),
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/trantrav04/tratra100.jpg",
                width: 400,
                height: 390,
                alt: "Transportation & Travel Pavilion's Moon Dome",
              },
              title: (
                <strong>
                  Transportation &amp; Travel Pavilion&apos;s Moon Dome
                </strong>
              ),
              source: <>SOURCE: Online auction</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/trantrav04/tratra04.jpg",
                width: 400,
                height: 274,
                alt: "Everything about T&T suggests color and motion",
              },
              title: (
                <>
                  <strong>Everything about T&amp;T</strong> suggests color and
                  motion. Plastic covering on the &quot;Moon Dome&quot; at left
                  forms a relief map of the lunar surface.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Richard Lewis,{" "}
                  <em>New York Sunday News</em>, July 12, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/trantrav04/tratra05.jpg",
                width: 400,
                height: 271,
                alt: "We're flying high over Chrysler autofare and T&T pavilion",
              },
              title: (
                <>
                  <strong>We&apos;re flying high ...</strong> this time over
                  part of the sprawling, fun-oriented Chrysler
                  &quot;autofare&quot; and a vast, moon-domed Transportation
                  &amp; Travel pavilion.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Richard Lewis,{" "}
                  <em>New York Sunday News</em>, September 5, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
