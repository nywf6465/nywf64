import type { Metadata } from "next";
import { LogfluNavChrome } from "@/components/LogfluNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Flume Ride — nywf64.com",
  description:
    "Flume Ride photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Flume Ride photograph album.
 * Body from legacy logflu03.html (Photograph Scrap Book banner omitted).
 * Preserve typo: Publication Photographas.
 * Layout: PhotographsPage (/aertow03).
 */
export default function Logflu03Page() {
  return (
    <PhotographsPage
      heroLabel="Flume Ride"
      titleId="logflu03-title"
      hero={{
        src: "/images/logfluoverview/hero-banner.jpg",
        alt: "Flume Ride at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<LogfluNavChrome />}
      previousHref="/logflu02"
      overviewHref="/logfluoverview"
      nextHref="/logfluoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/logflu03/S304D.jpg",
                width: 400,
                height: 393,
                alt: "Log Flume Ride",
              },
              title: "Log Flume Ride",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/logflu03/633-92.jpg",
                width: 267,
                height: 400,
                alt: "Log Flume Ride",
              },
              title: "Log Flume Ride",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/logflu03/logflu03.jpg",
                width: 400,
                height: 266,
                alt: "Flume Ride",
              },
              title: "Flume Ride",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/logflu03/logflu02.jpg",
                width: 400,
                height: 271,
                alt: "Flume Ride",
              },
              title: "Flume Ride",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/logflu03/logflu05.jpg",
                width: 400,
                height: 219,
                alt: "Flume Ride",
              },
              title: "Flume Ride",
              source: "SOURCE:Online Auction",
            },
          ],
        },
        {
          heading: "Publication Photographas",
          photos: [
            {
              image: {
                src: "/images/logflu03/logflu04.jpg",
                width: 300,
                height: 355,
                alt: "The log flume ride splashes to its climax",
              },
              title: (
                <>
                  The log flume ride, a cross between the shoot-the-chutes and a
                  roller coaster, splashes to its damply thrilling climax.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, Date unknown (1964)
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
