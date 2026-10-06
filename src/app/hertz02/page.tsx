import type { Metadata } from "next";
import { HertzNavChrome } from "@/components/HertzNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Hertz — nywf64.com",
  description:
    "Hertz Travel Center photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hertz photograph gallery — “photographs” standard.
 * Body from legacy hertz02.html (Photograph Scrap Book / Adobe chrome omitted).
 * Layout: PhotographsPage (/aertow03). Title matches legacy “Gallery of Photographs”.
 */
export default function Hertz02Page() {
  return (
    <PhotographsPage
      heroLabel="Hertz"
      titleId="hertz02-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/hertzoverview/hero-banner.jpg",
        alt: "Hertz Travel Center at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<HertzNavChrome />}
      previousHref="/hertz01"
      overviewHref="/hertzoverview"
      nextHref="/hertzoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/hertz02/hertz01.jpg",
                width: 400,
                height: 227,
                alt: "Hertz Travel Center",
              },
              title: "Hertz Travel Center",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
          ],
        },
      ]}
    />
  );
}
