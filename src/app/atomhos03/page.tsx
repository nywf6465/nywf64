import type { Metadata } from "next";
import { AtomhosNavChrome } from "@/components/AtomhosNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Atomedic Hospital — nywf64.com",
  description:
    "Atomedic Hospital photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Atomedic Hospital photograph album — “photographs” standard.
 * Body from legacy atomhos03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Atomhos03Page() {
  return (
    <PhotographsPage
      heroLabel="Atomedic Hospital"
      titleId="atomhos03-title"
      hero={{
        src: "/images/atomhosoverview/hero-banner.jpg",
        alt: "Atomedic Hospital at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AtomhosNavChrome />}
      previousHref="/atomhos02"
      overviewHref="/atomhos01"
      nextHref="/atomhos01"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/atomhos03/exterior.jpg",
                width: 400,
                height: 196,
                alt: "Atomedic Hospital",
              },
              title: "Atomedic Hospital",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}
