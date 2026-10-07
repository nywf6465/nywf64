import type { Metadata } from "next";
import { KoreaNavChrome } from "@/components/KoreaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Korea, Republic of — nywf64.com",
  description:
    "Korea, Republic of pavilion photograph gallery from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Korea gallery — “photographs” standard.
 * Body from legacy korea04.html (Adobe / scrap-book chrome omitted).
 * Layout: PhotographsPage.
 */
export default function Korea04Page() {
  return (
    <PhotographsPage
      heroLabel="Korea, Republic of"
      titleId="korea04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/koreaoverview/hero-banner.jpg",
        alt: "Korea, Republic of pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<KoreaNavChrome />}
      previousHref="/korea03"
      overviewHref="/koreaoverview"
      nextHref="/koreaoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/korea04/5448Large.jpg",
                width: 400,
                height: 282,
                alt: "Artist's rendering of the Pavilion of Korea",
              },
              title: "Artist's rendering of the Pavilion of Korea",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/korea04/555-53.jpg",
                width: 267,
                height: 400,
                alt: "Korea Pavilion",
              },
              title: "Korea Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/korea04/633-39.jpg",
                width: 267,
                height: 400,
                alt: "Korea Pavilion",
              },
              title: "Korea Pavilion",
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
                src: "/images/korea04/korea06.jpg",
                width: 400,
                height: 340,
                alt: "Korea Pavilion",
              },
              title: "Korea Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/korea04/korea07.jpg",
                width: 400,
                height: 320,
                alt: "Korea Pavilion Restaurant",
              },
              title: "Korea Pavilion Restaurant",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/korea04/korea05.jpg",
                width: 267,
                height: 400,
                alt: "Inside the Korea Pavilion",
              },
              title: "Inside the Korea Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/korea04/korea01.jpg",
                width: 300,
                height: 270,
                alt: "Waitresses at Korea House",
              },
              title: (
                <>
                  <strong>Wearing</strong> traditional costumes, waitresses Ronny
                  Lee (l.) and Chung Ja Kim await guests at Korea House,
                  refreshments adjunct to pavilion.
                </>
              ),
              source:
                "SOURCE: News Colorfoto by Daniel Jacino and Arthur Sasse, New York Sunday News, June 21, 1964",
            },
          ],
        },
      ]}
    />
  );
}
