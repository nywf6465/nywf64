import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { UnNavChrome } from "@/components/UnNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — United Nations — nywf64.com",
  description:
    "United Nations pavilion photograph album from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Nations photograph album — “photographs” standard.
 * Body from legacy un03.html (no Scrap Book banner). Layout: PhotographsPage.
 */
export default function Un03Page() {
  return (
    <PhotographsPage
      heroLabel="United Nations"
      titleId="un03-title"
      hero={{
        src: "/images/unoverview/hero-banner.jpg",
        alt: "United Nations exhibit at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnNavChrome />}
      previousHref="/un02"
      overviewHref="/unoverview"
      nextHref="/unistaoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/un03/un01.jpg",
                width: 400,
                height: 263,
                alt: "United Nations Pavilion",
              },
              title: "United Nations Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/un03/un02.jpg",
                width: 400,
                height: 209,
                alt: "United Nations Pavilion",
              },
              title: "United Nations Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/un03/un03.jpg",
                width: 400,
                height: 261,
                alt: "United Nations Pavilion",
              },
              title: "United Nations Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}
