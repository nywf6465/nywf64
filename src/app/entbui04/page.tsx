import type { Metadata } from "next";
import { EntbuiNavChrome } from "@/components/EntbuiNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Entrance Building — nywf64.com",
  description:
    "Entrance Building photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Building photograph album.
 * Body from legacy entbui04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03). Last topic — NEXT returns to overview.
 */
export default function Entbui04Page() {
  return (
    <PhotographsPage
      heroLabel="Entrance Building"
      titleId="entbui04-title"
      hero={{
        src: "/images/entbuioverview/hero-banner.jpg",
        alt: "Entrance Building at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<EntbuiNavChrome />}
      previousHref="/entbui03"
      overviewHref="/entbuioverview"
      nextHref="/entbuioverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/entbui04/entbui01.jpg",
                width: 600,
                height: 482,
                alt: "Aerial view of the Entrance Building under construction",
              },
              title: "Aerial view of the Entrance Building under construction",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/entbui04/entbui07.jpg",
                width: 500,
                height: 623,
                alt: "Aerial view of the Entrance Building - Opening Day 1965",
              },
              title: "Aerial view of the Entrance Building - Opening Day 1965",
              source:
                "SOURCE: NY World's Fair Publicity Photograph nywf64.com Collection",
            },
            {
              image: {
                src: "/images/entbui04/555-01.jpg",
                width: 400,
                height: 271,
                alt: "Entrance Building - Gate No. 1 - Main Entrance to the Fair",
              },
              title:
                "Entrance Building - Gate No. 1 - Main Entrance to the Fair",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/entbui04/79003Large.jpg",
                width: 400,
                height: 263,
                alt: "Crowds throng Main Entrance to the Fair",
              },
              title: "Crowds throng Main Entrance to the Fair",
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
                src: "/images/entbui04/entbui02.jpg",
                width: 400,
                height: 249,
                alt: "Exiting the subway station and onto the platform heading to the Main Gate of the Entrance Building",
              },
              title:
                "Exiting the subway station and onto the platform heading to the Main Gate of the Entrance Building",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/entbui04/entbui03.jpg",
                width: 400,
                height: 247,
                alt: "Main Gate and Ticket Booths",
              },
              title: "Main Gate and Ticket Booths",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/entbui04/entbui08.jpg",
                width: 400,
                height: 274,
                alt: "Through the gates and into the Fairgrounds",
              },
              title: "Through the gates and into the Fairgrounds",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/entbui04/entbui04.jpg",
                width: 400,
                height: 241,
                alt: "Through the gates and into the Fairgrounds",
              },
              title: "Through the gates and into the Fairgrounds",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/entbui04/entbui05.jpg",
                width: 400,
                height: 217,
                alt: "Looking back at the Entrance Building",
              },
              title: "Looking back at the Entrance Building",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/entbui04/entbui06.jpg",
                width: 400,
                height: 262,
                alt: "View of the Fair from the Entrance Building",
              },
              title: "View of the Fair from the Entrance Building",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}
