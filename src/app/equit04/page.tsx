import type { Metadata } from "next";
import { EquitNavChrome } from "@/components/EquitNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Equitable Life — nywf64.com",
  description:
    "Equitable Life Assurance Society photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Life photograph album.
 * Body from legacy equit04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Equit04Page() {
  return (
    <PhotographsPage
      heroLabel="Equitable Life Assurance Society"
      titleId="equit04-title"
      hero={{
        src: "/images/equitoverview/hero-banner.jpg",
        alt: "Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair",
        width: 2066,
        height: 761,
      }}
      nav={<EquitNavChrome />}
      previousHref="/equit03"
      overviewHref="/equitoverview"
      nextHref="/equit05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/equit04/5455Large.jpg",
                width: 400,
                height: 287,
                alt: "Artist's rendering of the Equitable Pavilion",
              },
              title: "Artist's rendering of the Equitable Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/equit04/5485.jpg",
                width: 400,
                height: 267,
                alt: "Night scene showing the IBM and Equitable Pavilions",
              },
              title: "Night scene showing the IBM and Equitable Pavilions",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/equit04/555-84.jpg",
                width: 400,
                height: 267,
                alt: "The Equitable Pavilion",
              },
              title: "The Equitable Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/equit04/79145Large.jpg",
                width: 400,
                height: 262,
                alt: "The Equitable Demograph",
              },
              title: "The Equitable Demograph",
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
                src: "/images/equit04/equit32.jpg",
                width: 400,
                height: 409,
                alt: "The Equitable Pavilion",
              },
              title: "The Equitable Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/equit04/equit30.jpg",
                width: 400,
                height: 394,
                alt: "The Equitable Demograph",
              },
              title: "The Equitable Demograph",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
