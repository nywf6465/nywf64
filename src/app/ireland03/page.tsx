import type { Metadata } from "next";
import { IrelandNavChrome } from "@/components/IrelandNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Ireland — nywf64.com",
  description:
    "Ireland pavilion photograph gallery from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ireland gallery — “photographs” standard.
 * Body from legacy ireland03.html (Adobe chrome omitted).
 * Layout: PhotographsPage.
 */
export default function Ireland03Page() {
  return (
    <PhotographsPage
      heroLabel="Ireland"
      titleId="ireland03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/irelandoverview/hero-banner.jpg",
        alt: "Ireland pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IrelandNavChrome />}
      previousHref="/ireland02"
      overviewHref="/irelandoverview"
      nextHref="/ireland04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/ireland03/633-37.jpg",
                width: 400,
                height: 267,
                alt: "Giant Map of Ireland in the Irish Pavilion",
              },
              title: "Giant Map of Ireland in the Irish Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/ireland03/ireland05.jpg",
                width: 400,
                height: 300,
                alt: "Origin of the name FLEMING in Ireland",
              },
              title: "Origin of the name FLEMING in Ireland",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}
