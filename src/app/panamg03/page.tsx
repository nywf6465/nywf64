import type { Metadata } from "next";
import { PanamgNavChrome } from "@/components/PanamgNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Pan American Highway Gardens — nywf64.com",
  description:
    "Pan American Highway Gardens photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pan American Highway Gardens photograph album — “photographs” standard.
 * Body from legacy panamg03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Panamg03Page() {
  return (
    <PhotographsPage
      heroLabel="Pan American Highway Gardens"
      titleId="panamg03-title"
      hero={{
        src: "/images/panamgoverview/hero-banner.jpg",
        alt: "Pan American Highway Gardens at the 1964/1965 New York World’s Fair",
        width: 2164,
        height: 727,
      }}
      nav={<PanamgNavChrome />}
      previousHref="/panamg02"
      overviewHref="/panamg01"
      nextHref="/panamg01"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/panamg03/fairgoer-gardens.jpg",
                width: 400,
                height: 232,
                alt: "Avis Pan American Highway Gardens",
              },
              title: "Avis Pan American Highway Gardens",
              source:
                "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/panamg03/fairgoer-aerial.jpg",
                width: 600,
                height: 309,
                alt: "Aerial view of the Pan American Highway Gardens",
              },
              title: "Aerial view of the Pan American Highway Gardens",
              source:
                "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}
