import type { Metadata } from "next";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Singer Bowl — nywf64.com",
  description:
    "Singer Bowl photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl photograph gallery — “photographs” standard.
 * Body from legacy singer04.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Singer04Page() {
  return (
    <PhotographsPage
      heroLabel="Singer Bowl"
      titleId="singer04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/singeroverview/hero-banner.jpg",
        alt: "Singer Bowl at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SingerNavChrome />}
      previousHref="/singer03"
      overviewHref="/singeroverview"
      nextHref="/singer05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/singer04/arch-5428Large.jpg",
                width: 400,
                height: 278,
                alt: "Artist's rendering of the Singer Bowl",
              },
              title: "Artist's rendering of the Singer Bowl",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/singer04/mainliner-633-83.jpg",
                width: 400,
                height: 267,
                alt: "Singer Bowl",
              },
              title: "Singer Bowl",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/singer04/sinbow30.jpg",
                width: 400,
                height: 218,
                alt: "The Singer Bowl",
              },
              title: "The Singer Bowl",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/singer04/sinbow32.jpg",
                width: 400,
                height: 309,
                alt: "A Singer Bowl Performance",
              },
              title: "A Singer Bowl Performance",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/singer04/sinbow25.jpg",
                width: 400,
                height: 272,
                alt: "Singer Bowl - Singer Sewing exhibit section",
              },
              title: "The Singer Bowl - Singer Sewing exhibit section",
              source: "SOURCE: © Copyright Randy Treadway Collection",
            },
            {
              image: {
                src: "/images/singer04/sinbow24.jpg",
                width: 400,
                height: 264,
                alt: "The Singer Bowl",
              },
              title: "The Singer Bowl",
              source: "SOURCE: © Copyright Randy Treadway Collection",
            },
            {
              image: {
                src: "/images/singer04/sinbow28.jpg",
                width: 400,
                height: 270,
                alt: "The Singer Bowl",
              },
              title: "The Singer Bowl",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/singer04/sinbow27.jpg",
                width: 400,
                height: 376,
                alt: "The Singer Bowl",
              },
              title: "The Singer Bowl",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/singer04/sinbow01.jpg",
                width: 253,
                height: 375,
                alt: "Model stitches flags in Singer display area",
              },
              title:
                "Pretty model stitches up flags of all states and nations in Singer display area beneath the Bowl. Flags are presented to visiting VIPs.",
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, May 23, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
