import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { SprogfountNavChrome } from "@/components/SprogfountNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — Fountain of Progress South — nywf64.com",
  description:
    "Fountain of Progress South photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress South photograph album — “photographs” standard.
 * Body from legacy sprogfount03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Sprogfount03Page() {
  return (
    <PhotographsPage
      heroLabel="Fountain of Progress South"
      titleId="sprogfount03-title"
      hero={{
        src: "/images/sprogfountoverview/hero-banner.jpg",
        alt: "Fountain of Progress South at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SprogfountNavChrome />}
      previousHref="/sprogfount02"
      overviewHref="/sprogfountoverview"
      nextHref="/sprogfountoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/sprogfount03/fount22.jpg",
                width: 399,
                height: 263,
                alt: "Fountain of Progress South",
              },
              title: "Fountain of Progress South",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/sprogfount03/fount140.jpg",
                width: 400,
                height: 284,
                alt: "Fountain of Progress South",
              },
              title: "Fountain of Progress South",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/sprogfount03/fount23.jpg",
                width: 400,
                height: 272,
                alt: "Fountain of Progress South",
              },
              title: "Fountain of Progress South",
              source: "SOURCE: \u00a9 Copyright George Campbell Collection",
            },
          ],
        },
      ]}
    />
  );
}
