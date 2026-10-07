import type { Metadata } from "next";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album I — Indonesia — nywf64.com",
  description:
    "Indonesia Pavilion photograph album I — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy indones06.html (Photograph Scrap Book banner omitted). */
export default function Indones06Page() {
  return (
    <PhotographsPage
      heroLabel="Indonesia"
      titleId="indones06-title"
      title="Photograph Album I"
      hero={{
        src: "/images/indonesoverview/hero-banner.jpg",
        alt: "Indonesia at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IndonesNavChrome />}
      previousHref="/indones05"
      overviewHref="/indonesoverview"
      nextHref="/indones07"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/indones06/S-185DLarge.jpg",
                width: 400,
                height: 390,
                alt: "Architect's rendering of the Indonesia Pavilion",
              },
              title: "Architect's rendering of the Indonesia Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/indones06/indones34.jpg",
                width: 400,
                height: 220,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source: "SOURCE: Screen Shot - Film: To the Fair",
            },
            {
              image: {
                src: "/images/indones06/5500.jpg",
                width: 400,
                height: 267,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/indones06/indones24.jpg",
                width: 400,
                height: 400,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Pana-Vue presented courtesy Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/indones06/indones19.jpg",
                width: 400,
                height: 297,
                alt: "Outstanding Aerial View of the Pavilion of Indonesia",
              },
              title:
                "Outstanding Aerial View of the Pavilion of Indonesia (note Tjandi Benthar gate is still a work in progress)",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/indones06/indones33.jpg",
                width: 400,
                height: 388,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/indones06/indones29.jpg",
                width: 400,
                height: 267,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/indones06/indones30.jpg",
                width: 267,
                height: 400,
                alt: "Indonesian Artifacts",
              },
              title: "Indonesian Artifacts",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/indones06/indones32.jpg",
                width: 300,
                height: 189,
                alt: "Indonesia pavilion from across the Fairgrounds",
              },
              title: (
                <>
                  <b>From the other side,</b> see Indonesia&apos;s flower-topped
                  tower close by and Hong Kong, etc., farther off.
                </>
              ),
              source:
                "SOURCE: News Colorfoto by Edmund Peters, New York Sunday News, Date unknown (1964)",
            },
            {
              image: {
                src: "/images/indones06/indones31.jpg",
                width: 460,
                height: 253,
                alt: "Umbrella Dance at Indonesia pavilion",
              },
              title: (
                <>
                  <b>Lovely girls and their escorts</b> perform popular Umbrella
                  Dance on stage centered in elegant theatre-restaurant of the
                  Indonesian pavilion. Exquisite grace characterizes the dancers.
                </>
              ),
              source:
                "SOURCE: News Colorfoto by Daniel Jacino and Arthur Sasse, New York Sunday News, August 16, 1964",
            },
          ],
        },
      ]}
    />
  );
}
