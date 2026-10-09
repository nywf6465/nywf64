import type { Metadata } from "next";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album I — Vatican — nywf64.com",
  description:
    "Vatican Pavilion photograph album I — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab = (
  <>SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.</>
);

const blackhawk = (
  <>
    SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air
    Lines
  </>
);

const wolfe = (
  <>SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films</>
);

const roloc = (
  <>
    SOURCE: Commercial Transparency by © Copyright ROLOC Color Films presented
    courtesy Bradd Schiffman Collection
  </>
);

/**
 * Vatican photograph album I — “photographs” standard.
 * Body from legacy vatican04.html (Photograph Scrap Book banner omitted).
 */
export default function Vatican04Page() {
  return (
    <PhotographsPage
      heroLabel="Vatican Pavilion"
      titleId="vatican04-title"
      title="Photograph Album I"
      hero={{
        src: "/images/vaticanoverview/hero-banner.jpg",
        alt: "Vatican Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<VaticanNavChrome />}
      previousHref="/vatican03"
      overviewHref="/vaticanoverview"
      nextHref="/vatican05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/vatican04/S-182DLarge.jpg",
                width: 400,
                height: 371,
                alt: "Architect's rendering of the Vatican Pavilion",
              },
              title: "Architect's rendering of the Vatican Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/vatican04/vat43.jpg",
                width: 400,
                height: 343,
                alt: "Construction - Spring 1964",
              },
              title: "Construction - Spring 1964",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/vatican04/5641.jpg",
                width: 400,
                height: 267,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/vatican04/5512.jpg",
                width: 400,
                height: 275,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/vatican04/79032Large.jpg",
                width: 400,
                height: 263,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: wolfe,
            },
            {
              image: {
                src: "/images/vatican04/vat36.jpg",
                width: 400,
                height: 274,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: roloc,
            },
            {
              image: {
                src: "/images/vatican04/555-90.jpg",
                width: 267,
                height: 400,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/vatican04/633-61.jpg",
                width: 267,
                height: 400,
                alt: "Stylized Cross at Vatican Pavilion entrance",
              },
              title: "Stylized Cross at Vatican Pavilion entrance",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/vatican04/555-91.jpg",
                width: 267,
                height: 400,
                alt: "Stylized Cross at Vatican Pavilion entrance",
              },
              title: "Stylized Cross at Vatican Pavilion entrance",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/vatican04/5642.jpg",
                width: 267,
                height: 400,
                alt: "The Pieta on display in the Vatican Pavilion",
              },
              title: "The Pieta on display in the Vatican Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/vatican04/79033Large.jpg",
                width: 400,
                height: 263,
                alt: "The Pieta as seen from the moving platforms",
              },
              title: "The Pieta as seen from the moving platforms",
              source: wolfe,
            },
            {
              image: {
                src: "/images/vatican04/633-62.jpg",
                width: 267,
                height: 400,
                alt: "The Pieta on display in the Vatican Pavilion",
              },
              title: "The Pieta on display in the Vatican Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/vatican04/633-63.jpg",
                width: 267,
                height: 400,
                alt: "The Pieta on display in the Vatican Pavilion",
              },
              title: "The Pieta on display in the Vatican Pavilion",
              source: blackhawk,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/vatican04/vat39.jpg",
                width: 400,
                height: 267,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/vatican04/vat45.jpg",
                width: 400,
                height: 264,
                alt: "Vatican Pavilion and the Special Lighting of the Astral Fountain",
              },
              title:
                "Vatican Pavilion and the Special Lighting of the Astral Fountain",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/vatican04/vat44.jpg",
                width: 400,
                height: 282,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/vatican04/vat41.jpg",
                width: 400,
                height: 267,
                alt: "Vatican Pavilion",
              },
              title: "Vatican Pavilion",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/vatican04/vat38.jpg",
                width: 400,
                height: 274,
                alt: "Chapel inside the Vatican Pavilion",
              },
              title: "Chapel inside the Vatican Pavilion",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/vatican04/vat40.jpg",
                width: 400,
                height: 267,
                alt: "Chapel alter",
              },
              title: "Chapel alter",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
          ],
        },
      ]}
    />
  );
}
