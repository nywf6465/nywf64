import type { Metadata } from "next";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Hawaii — nywf64.com",
  description:
    "Hawaii pavilion photograph gallery — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hawaii photograph gallery — “photographs” standard.
 * Body from legacy hawaii03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03). Title matches legacy “Gallery of Photographs”.
 */
export default function Hawaii03Page() {
  return (
    <PhotographsPage
      heroLabel="Hawaii"
      titleId="hawaii03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/hawaiioverview/hero-banner.jpg",
        alt: "Hawaii at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HawaiiNavChrome />}
      previousHref="/hawaii02"
      overviewHref="/hawaiioverview"
      nextHref="/hawaii04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/hawaii03/5432Large.jpg",
                width: 400,
                height: 277,
                alt: "Architectural model of the Hawaii Pavilion",
              },
              title: "Architectural model of the Hawaii Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/hawaii03/5526.jpg",
                width: 400,
                height: 267,
                alt: "The Hawaii Pavilion",
              },
              title: "The Hawaii Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/hawaii03/633-95.jpg",
                width: 267,
                height: 400,
                alt: "Aloha Theater of the Hawaii Pavilion",
              },
              title: "Aloha Theater of the Hawaii Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/hawaii03/hawaii08.jpg",
                width: 400,
                height: 292,
                alt: "Receiving Leis at the Hawaii Pavilion",
              },
              title: "Receiving Leis at the Hawaii Pavilion",
              source: <>SOURCE: Screen Shot - Film &quot;To the Fair&quot;</>,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/hawaii03/hawaii01.jpg",
                width: 400,
                height: 267,
                alt: "Hawaiian Handicrafts",
              },
              title: "Hawaiian Handicrafts",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/hawaii03/hawaii02.jpg",
                width: 400,
                height: 279,
                alt: 'Hawaiian "Lagoon" - view from Meadow Lake',
              },
              title: <>Hawaiian &quot;Lagoon&quot; - view from Meadow Lake</>,
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/hawaii03/hawaii07.jpg",
                width: 400,
                height: 246,
                alt: "Aloha Theatre of the Hawaii Pavilion",
              },
              title: "Aloha Theatre of the Hawaii Pavilion",
              source: <>SOURCE: Online auction</>,
            },
          ],
        },
      ]}
    />
  );
}
