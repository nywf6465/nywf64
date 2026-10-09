import type { Metadata } from "next";
import { IntplaNavChrome } from "@/components/IntplaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — International Plaza — nywf64.com",
  description:
    "International Plaza photograph gallery — commercial, publication, and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * International Plaza gallery — “photographs” standard.
 * Body from legacy intpla04.html (Adobe chrome omitted).
 * Layout: PhotographsPage. Legacy typo “Internation Plaza” preserved.
 */
export default function Intpla04Page() {
  return (
    <PhotographsPage
      heroLabel="International Plaza"
      titleId="intpla04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/intplaoverview/hero-banner.jpg",
        alt: "International Plaza at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IntplaNavChrome />}
      previousHref="/intpla03"
      overviewHref="/intplaoverview"
      nextHref="/intplaoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/intpla04/5430Large.jpg",
                width: 400,
                height: 273,
                alt: "Artist's rendering of the International Plaza",
              },
              title: "Artist's rendering of the International Plaza",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/intpla04/555-17.jpg",
                width: 400,
                height: 272,
                alt: "Internation Plaza can be seen to the left on this photograph",
              },
              title: "Internation Plaza can be seen to the left on this photograph",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/intpla04/intpla02.jpg",
                width: 400,
                height: 274,
                alt: "International Plaza can be seen in the center of this photo",
              },
              title:
                "International Plaza can be seen in the center of this photo",
              source:
                "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/intpla04/intpla01.jpg",
                width: 320,
                height: 463,
                alt: 'English-styled "stone" Tower in International Plaza',
              },
              title:
                'English-styled "stone" Tower in International Plaza has replicas of world-famous diamonds, British Crown Jewels and an art exhibit',
              source:
                "SOURCE: News Colorfoto by Daniel Jacino, New York Sunday News, September 12, 1965",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/intpla04/intpla05.jpg",
                width: 600,
                height: 391,
                alt: "Artist's rendering of the Luxembourg Pavilion in the International Plaza",
              },
              title:
                "Artist's rendering of the Luxembourg Pavilion in the International Plaza",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
