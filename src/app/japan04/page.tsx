import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Japan — nywf64.com",
  description:
    "Japan pavilion photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy japan04.html (Photograph Scrap Book banner omitted). */
export default function Japan04Page() {
  return (
    <PhotographsPage
      heroLabel="Japan"
      titleId="japan04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      previousHref="/japan03"
      overviewHref="/japanoverview"
      nextHref="/japan05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/japan04/japan147.jpg",
                width: 500,
                height: 290,
              },
              title: "Japan Pavilion",
              source: "SOURCE:Getty Images",
            },
            {
              image: {
                src: "/images/japan04/5518.jpg",
                width: 400,
                height: 267,
              },
              title: "House of Japan",
              source: "SOURCE:Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/japan04/japan02.jpg",
                width: 400,
                height: 273,
              },
              title: "House of Japan",
              source: "SOURCE:Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/japan04/555-56.jpg",
                width: 267,
                height: 400,
              },
              title: "Pavilion of Japan",
              source: "SOURCE:Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/japan04/japan146.jpg",
                width: 400,
                height: 391,
              },
              title: "Beautiful Stone Wall of the Japan Pavilion at Entrance",
              source: "SOURCE:Online auction",
            },
            {
              image: {
                src: "/images/japan04/japan144.jpg",
                width: 400,
                height: 267,
              },
              title: "Beautiful Stone Wall of the Japan Pavilion",
              source: "SOURCE:© Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/japan04/japan01.jpg",
                width: 440,
                height: 250,
              },
              title: "A hit at House of Japan",
              source: "SOURCE:News Colorfoto by Daniel jacino and Arthur Sasse, New York Sunday News , August 16, 1964",
            },
            {
              image: {
                src: "/images/japan04/japan145.jpg",
                width: 460,
                height: 273,
              },
              title: "Diners at teriyaki",
              source: "SOURCE:News Colorfoto by Edmund Peters, New York Sunday News , June 27, 1965",
            },
          ],
        },
      ]}
    />
  );
}
