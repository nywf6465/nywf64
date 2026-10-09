import type { Metadata } from "next";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Thailand — nywf64.com",
  description:
    "Thailand pavilion photograph gallery — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thailand photograph gallery — photographs standard.
 * Body from legacy thai04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Thai04Page() {
  return (
    <PhotographsPage
      heroLabel="Thailand"
      titleId="thai04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/thaioverview/hero-banner.jpg",
        alt: "Thailand pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ThaiNavChrome />}
      previousHref="/thai03"
      overviewHref="/thaioverview"
      nextHref="/thai05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/thai04/S-182CLarge.jpg",
                width: 400,
                height: 388,
                alt: "Artist's rendering of the Thailand Pavilion",
              },
              title: "Artist's rendering of the Thailand Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/thai04/5637.jpg",
                width: 267,
                height: 400,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/thai04/5638.jpg",
                width: 267,
                height: 400,
                alt: "Native Costumed Figure inside Thailand Pavilion",
              },
              title: "Native Costumed Figure inside Thailand Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/thai04/5491.jpg",
                width: 267,
                height: 400,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/thai04/555-66.jpg",
                width: 267,
                height: 400,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source:
                "SOURCE: © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/thai04/555-67.jpg",
                width: 267,
                height: 400,
                alt: "Artwork inside Thailand Pavilion",
              },
              title: "Artwork inside Thailand Pavilion",
              source:
                "SOURCE: © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/thai04/79062Large.jpg",
                width: 400,
                height: 263,
                alt: "Thailand Pavilion - Night",
              },
              title: "Thailand Pavilion - Night",
              source: "SOURCE: © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/thai04/79063Large.jpg",
                width: 263,
                height: 400,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: "SOURCE: © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/thai04/thai12.jpg",
                width: 400,
                height: 289,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: 'SOURCE: Screen Shot - Film "To the Fair"',
            },
            {
              image: {
                src: "/images/thai04/thai11.jpg",
                width: 400,
                height: 297,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: 'SOURCE: Screen Shot - Film "To the Fair"',
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/thai04/thai09.jpg",
                width: 400,
                height: 312,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/thai04/thai08.jpg",
                width: 265,
                height: 400,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/thai04/thai05.jpg",
                width: 450,
                height: 322,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/thai04/thai04.jpg",
                width: 450,
                height: 314,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/thai04/thai10.jpg",
                width: 400,
                height: 388,
                alt: "Thailand Pavilion",
              },
              title: "Thailand Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/thai04/thai02.jpg",
                width: 400,
                height: 430,
                alt: "An exact replica of the gilded Mondop of Saraburi",
              },
              title:
                "An exact replica of the gilded Mondop of Saraburi, Buddhist shrine, is Thailand's offering",
              source:
                "SOURCE: News Colorfoto by Daniel Jacino and Arthur Sasse, New York Sunday News, June 21, 1964",
            },
            {
              image: {
                src: "/images/thai04/thai03.jpg",
                width: 300,
                height: 269,
                alt: "Authentic costumes at the Thailand pavilion",
              },
              title:
                "Though they date back to the 1800s, authentic costumes like these at the Thailand pavilion are still worn in dances for tourists in Thailand.",
              source:
                "SOURCE: News Colorfoto by Edmund Peters and Richard Lewis, New York Sunday News, June 27, 1965",
            },
          ],
        },
      ]}
    />
  );
}
