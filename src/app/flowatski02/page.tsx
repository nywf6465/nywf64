import type { Metadata } from "next";
import { FlowatskiNavChrome } from "@/components/FlowatskiNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Florida Citrus Water Ski Show — nywf64.com",
  description:
    "Florida Citrus Water Ski Show photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida Citrus Water Ski Show photograph album.
 * Body from legacy flowatski02.html (Photograph Scrap Book banner omitted).
 * Preserve typo: Commercial Photogrsphs.
 * Layout: PhotographsPage (/aertow03).
 */
export default function Flowatski02Page() {
  return (
    <PhotographsPage
      heroLabel="Florida Citrus Water Ski Show"
      titleId="flowatski02-title"
      hero={{
        src: "/images/flowatskioverview/hero-banner.jpg",
        alt: "Florida Citrus Water Ski Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<FlowatskiNavChrome />}
      previousHref="/flowatski01"
      overviewHref="/flowatskioverview"
      nextHref="/flowatski03"
      sections={[
        {
          heading: "Commercial Photogrsphs",
          photos: [
            {
              image: {
                src: "/images/flowatski02/flowatski17.jpg",
                width: 300,
                height: 400,
                alt: "A Poster Advertising the Florida Water Ski Show",
              },
              title: "A Poster Advertising the Florida Water Ski Show",
              source: "SOURCE: Unknown.",
            },
            {
              image: {
                src: "/images/flowatski02/5524.jpg",
                width: 400,
                height: 267,
                alt: "Amphitheatre - Florida Water Ski Show",
              },
              title: "Amphitheatre - Florida Water Ski Show",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski03.jpg",
                width: 600,
                height: 342,
                alt: "State of Florida - Amphitheatre",
              },
              title: "State of Florida - Amphitheatre",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair Publication{" "}
                  <em>
                    For Those Who Produced the New York World&apos;s Fair
                    1964-1965
                  </em>
                </>
              ),
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/flowatski02/flowatski04.jpg",
                width: 400,
                height: 271,
                alt: "Entrance to the Florida Citrus Water Ski Show",
              },
              title: "Entrance to the Florida Citrus Water Ski Show",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski02.jpg",
                width: 400,
                height: 353,
                alt: "Scene from the Florida Citrus Water Ski Show",
              },
              title: "Scene from the Florida Citrus Water Ski Show",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski05.jpg",
                width: 400,
                height: 254,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski06.jpg",
                width: 400,
                height: 249,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski07.jpg",
                width: 400,
                height: 275,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski08.jpg",
                width: 400,
                height: 264,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski09.jpg",
                width: 400,
                height: 273,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski14.jpg",
                width: 400,
                height: 419,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski15.jpg",
                width: 400,
                height: 438,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/flowatski02/flowatski16.jpg",
                width: 400,
                height: 433,
                alt: "The Florida Citrus Water Ski Show",
              },
              title: "The Florida Citrus Water Ski Show",
              source: "SOURCE:Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/flowatski02/flowatski01.jpg",
                width: 400,
                height: 283,
                alt: "Florida Citrus Water Ski Show pyramid act",
              },
              title: (
                <>
                  <strong>A PLACE IN THE SUN</strong> FLORIDA the Sunshine
                  State, always its own best booster, has expanded its
                  activities at the Fair this year. This has not only promoted
                  the state&apos;s own virtues, but has also helped perk up the
                  whole Lake Amusement Area. Sparking the upswing is the new
                  free Florida Citrus Water Ski Show. Also on the house are the
                  porpoise show (especially great for kids), &quot;Pieces of
                  Eight&quot; (treasure ship booty), Everglades exhibit (with
                  alligators and flamingos), art show and information from
                  cities and counties for vacationers and prospective residents.
                  In line with this there&apos;s a model retirement house. And,
                  of course, you can buy lots of orange juice!
                  <br />
                  <br />
                  [Above] <strong>New, exciting and free,</strong> the
                  state&apos;s water ski show in the Amphitheatre is a prime
                  attraction. This pyramid, or Roman stand, is one of 21 acts by
                  professional skiers and boatmen. Starting at 1 P.M., there are
                  six performances daily, including two at night.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, July 18, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
