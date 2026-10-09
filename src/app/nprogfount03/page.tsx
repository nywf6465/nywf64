import type { Metadata } from "next";
import { NprogfountNavChrome } from "@/components/NprogfountNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Fountain of Progress North — nywf64.com",
  description:
    "Fountain of Progress North photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress North photograph album — “photographs” standard.
 * Body from legacy nprogfount03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Nprogfount03Page() {
  return (
    <PhotographsPage
      heroLabel="Fountain of Progress North"
      titleId="nprogfount03-title"
      hero={{
        src: "/images/nprogfountoverview/hero-banner.jpg",
        alt: "Fountain of Progress North at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<NprogfountNavChrome />}
      previousHref="/nprogfount02"
      overviewHref="/nprogfountoverview"
      nextHref="/nprogfountoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/nprogfount03/fount143.jpg",
                width: 400,
                height: 334,
                alt: "Fountain of Progress North",
              },
              title: "Fountain of Progress North",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/nprogfount03/fount110.jpg",
                width: 400,
                height: 267,
                alt: "Fountain of Progress North",
              },
              title: "Fountain of Progress North",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/nprogfount03/fount111.jpg",
                width: 400,
                height: 267,
                alt: "Fountain of Progress North",
              },
              title: "Fountain of Progress North",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/nprogfount03/fount113.jpg",
                width: 400,
                height: 353,
                alt: "Fountain of Progress North",
              },
              title: "Fountain of Progress North",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/nprogfount03/fount145.jpg",
                width: 400,
                height: 391,
                alt: "Fountain of Progress North Illuminated at Night",
              },
              title: "Fountain of Progress North Illuminated at Night",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
