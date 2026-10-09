import type { Metadata } from "next";
import { CitservNavChrome } from "@/components/CitservNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Cities Service Band — nywf64.com",
  description:
    "Cities Service World's Fair Band of America photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Cities Service Band photograph album — “photographs” standard.
 * Body from legacy citserv04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Citserv04Page() {
  return (
    <PhotographsPage
      heroLabel="Cities Service World's Fair Band of America"
      titleId="citserv04-title"
      hero={{
        src: "/images/citservoverview/hero-banner.jpg",
        alt: "Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CitservNavChrome />}
      previousHref="/citserv03"
      overviewHref="/citservoverview"
      nextHref="/citserv05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/citserv04/citserv02.jpg",
                width: 460,
                height: 370,
                alt: "Paul Lavalle directs the World's Fair Band of America",
              },
              title: "Paul Lavalle directs the World's Fair Band of America",
              source: "SOURCE: Unknown",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/citserv04/citserv01.jpg",
                width: 400,
                height: 243,
                alt: "The World's Fair Band of America",
              },
              title: "The World's Fair Band of America",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/citserv04/citserv05.jpg",
                width: 400,
                height: 254,
                alt: "The World's Fair Band of America",
              },
              title: "The World's Fair Band of America",
              source: "SOURCE: © Copyright George Campbell Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/citserv04/citserv06.jpg",
                width: 500,
                height: 238,
                alt: "MUSIC OF THE SPHERE — Paul Lavalle and the Cities Service World's Fair Band of America",
              },
              title: (
                <>
                  <strong>MUSIC OF THE SPHERE</strong> With the Fair&apos;s
                  Unisphere as a symbol, maestro Paul Lavalle stands ready to
                  lead his 50-piece band of rolling players - the Cities Service
                  World&apos;s Fair Band of America - in concert. Musically
                  versatile group travels about grounds in its unique bandwagon
                  participating in official Fair functions and giving at least
                  six concerts a day.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto, <em>New York Sunday News</em>, Date
                  unknown
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
