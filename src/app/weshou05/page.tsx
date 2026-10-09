import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — Westinghouse — nywf64.com",
  description:
    "Westinghouse photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse photograph album.
 * Body from legacy weshou05.html (Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Weshou05Page() {
  return (
    <PhotographsPage
      heroLabel="Westinghouse"
      titleId="weshou05-title"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshou04"
      overviewHref="/weshouoverview"
      nextHref="/weshou06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/weshou05/weshou72.jpg",
                width: 400,
                height: 274,
                alt: "Westinghouse Pavilion",
              },
              title: "Westinghouse Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © ROLOC Color Films
                  presented courtesy Bradd Schiffman Collection
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
                src: "/images/weshou05/weshou74.jpg",
                width: 400,
                height: 271,
                alt: "Westinghouse Pavilion as viewed from the observation towers of the New York State Pavilion",
              },
              title:
                "Westinghouse Pavilion as viewed from the observation towers of the New York State Pavilion",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/weshou05/weshou75.jpg",
                width: 400,
                height: 289,
                alt: "Westinghouse Pavilion",
              },
              title: "Westinghouse Pavilion",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/weshou05/weshou76.jpg",
                width: 286,
                height: 400,
                alt: "Westinghouse Pavilion",
              },
              title: "Westinghouse Pavilion",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/weshou05/weshou77.jpg",
                width: 400,
                height: 266,
                alt: "Westinghouse Pavilion",
              },
              title: "Westinghouse Pavilion",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/weshou05/weshou73.jpg",
                width: 400,
                height: 267,
                alt: "Signing the Book of Record at the Westinghouse Pavilion",
              },
              title: "Signing the Book of Record at the Westinghouse Pavilion",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/weshou05/weshou79.jpg",
                width: 316,
                height: 400,
                alt: "Signing the Book of Record at the Westinghouse Pavilion",
              },
              title: "Signing the Book of Record at the Westinghouse Pavilion",
              source: <>SOURCE: Getty Images</>,
            },
            {
              image: {
                src: "/images/weshou05/weshou81.jpg",
                width: 400,
                height: 411,
                alt: "Westinghouse Pavilion Illuminated at Night",
              },
              title: "Westinghouse Pavilion Illuminated at Night",
              source: <>SOURCE: Online auction</>,
            },
          ],
        },
      ]}
    />
  );
}
