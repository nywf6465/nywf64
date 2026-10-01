import type { Metadata } from "next";
import { AertowNavChrome } from "@/components/AertowNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Aerial Tower Ride — nywf64.com",
  description:
    "Aerial Tower Ride photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Aerial Tower Ride photograph album — canonical “photographs” standard instance.
 * Body from legacy aertow03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 * Future attraction photograph albums should copy this page and fill `sections`
 * from their legacy HTML (see AGENTS.md “Photographs standard”).
 */
export default function Aertow03Page() {
  return (
    <PhotographsPage
      heroLabel="Aerial Tower Ride"
      titleId="aertow03-title"
      hero={{
        src: "/images/aertowoverview/hero-banner.jpg",
        alt: "Aerial Tower Ride & Waffle Restaurant at the 1964/1965 New York World’s Fair",
        width: 1911,
        height: 823,
      }}
      nav={<AertowNavChrome />}
      previousHref="/aertow02"
      overviewHref="/aertowoverview"
      nextHref="/aertowoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/aertow03/S304C.jpg",
                width: 400,
                height: 389,
                alt: "Aerial Ride",
              },
              title: "Aerial Ride",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/aertow03/555-98.jpg",
                width: 267,
                height: 400,
                alt: "One of Amusement Park's fun attractions",
              },
              title: (
                <>One of Amusement Park&apos;s &quot;fun&quot; attractions</>
              ),
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
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
                src: "/images/aertow03/aertow02.jpg",
                width: 263,
                height: 400,
                alt: "Aerial Tower Ride from AMF Monorail",
              },
              title: "Aerial Tower Ride from AMF Monorail",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
          ],
        },
      ]}
    />
  );
}
