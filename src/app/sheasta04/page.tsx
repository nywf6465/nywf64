import type { Metadata } from "next";
import { SheastaNavChrome } from "@/components/SheastaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Shea Stadium — nywf64.com",
  description:
    "Shea Stadium photograph gallery from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Shea Stadium photograph gallery — “photographs” standard.
 * Body from legacy sheasta04.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Sheasta04Page() {
  return (
    <PhotographsPage
      heroLabel="Shea Stadium"
      titleId="sheasta04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/sheastaoverview/hero-banner.jpg",
        alt: "Shea Stadium at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SheastaNavChrome />}
      previousHref="/sheasta03"
      overviewHref="/sheastaoverview"
      nextHref="/sheasta05"
      sections={[
        {
          heading: "Fair Photographs",
          photos: [
            {
              image: {
                src: "/images/sheasta04/shea02.jpg",
                width: 400,
                height: 269,
                alt: "Shea Stadium from the Main Entrance to the Fair",
              },
              title: "Shea Stadium from the Main Entrance to the Fair",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/sheasta04/shea16.jpg",
                width: 400,
                height: 267,
                alt: "Shea Stadium",
              },
              title: "Shea Stadium",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/sheasta04/shea17.jpg",
                width: 400,
                height: 272,
                alt: "Shea Stadium",
              },
              title: "Shea Stadium",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/sheasta04/shea18.jpg",
                width: 400,
                height: 267,
                alt: "Shea Stadium",
              },
              title: "Shea Stadium",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}
