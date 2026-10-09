import type { Metadata } from "next";
import { SolfountNavChrome } from "@/components/SolfountNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Solar Fountain — nywf64.com",
  description:
    "Solar Fountain photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Solar Fountain photograph album — “photographs” standard.
 * Body from legacy solfount04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Magazine six-panel layout stitched as fount32-collage.jpg.
 */
export default function Solfount04Page() {
  return (
    <PhotographsPage
      heroLabel="Solar Fountain"
      titleId="solfount04-title"
      hero={{
        src: "/images/solfountoverview/hero-banner.jpg",
        alt: "Solar Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SolfountNavChrome />}
      previousHref="/solfount03"
      overviewHref="/solfountoverview"
      nextHref="/solfountoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/solfount04/arch-5405Large.jpg",
                width: 400,
                height: 274,
                alt: "Architect's rendering of the Solar Fountain",
              },
              title: "Architect's rendering of the Solar Fountain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/solfount04/arch-S-181DLarge.jpg",
                width: 400,
                height: 378,
                alt: "Architect's rendering of the Solar Fountain",
              },
              title: "Architect's rendering of the Solar Fountain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/solfount04/photolab-S303A.jpg",
                width: 400,
                height: 394,
                alt: "Solar Fountain",
              },
              title: "Solar Fountain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/solfount04/fount112.jpg",
                width: 400,
                height: 271,
                alt: "Solar Fountain",
              },
              title: "Solar Fountain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 ROLOC\u00a0Color Films presented courtesy Bradd Schiffman Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/solfount04/gencig-gencig39.jpg",
                width: 400,
                height: 267,
                alt: "Solar Fountain and the General Cigar Pavilion",
              },
              title: "Solar Fountain and the General Cigar Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/solfount04/fount127.jpg",
                width: 400,
                height: 285,
                alt: "Solar Fountain and the Austria Pavilion",
              },
              title: "Solar Fountain and the Austria Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/solfount04/fount12.jpg",
                width: 288,
                height: 400,
                alt: "Solar Fountain and the Johnson Wax Pavilion",
              },
              title: "Solar Fountain and the Johnson Wax Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/solfount04/fount130.jpg",
                width: 400,
                height: 398,
                alt: "Solar Fountain",
              },
              title: "Solar Fountain",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Magazine Photographs",
          photos: [
            {
              image: {
                src: "/images/solfount04/fount32-collage.jpg",
                width: 699,
                height: 392,
                alt: "Solar Fountain construction and detail panels from Electrical Construction and Maintenance, July 1964",
              },
              source: (
                <>
                  SOURCE: Magazine{" "}
                  <em>Electrical Construction and Maintenance</em>, July 1964 -
                  presented courtesy Wayne Bretl Collection
                </>
              ),
            },
          ],
        },
        {
          heading: "Construction Photographs",
          photos: [
            {
              image: {
                src: "/images/solfount04/fount82.jpg",
                width: 460,
                height: 565,
                alt: "Under construction showing a detail of the central bubble and the base fountain nozzles",
              },
              title:
                "Under construction showing a detail of the central bubble and the base fountain nozzles",
              source:
                "SOURCE: NY\u00a0World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/solfount04/fount77.jpg",
                width: 460,
                height: 284,
                alt: "Aerial View shows the Solar Fountain",
              },
              title: "Aerial View shows the Solar Fountain",
              source:
                "SOURCE: NY\u00a0World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
          ],
        },
      ]}
    />
  );
}
