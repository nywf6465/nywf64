import type { Metadata } from "next";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Florida — nywf64.com",
  description:
    "Florida Pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida photograph album.
 * Body from legacy florida05.html (Photograph Scrap Book banner omitted).
 * florida14 stitch composed as a single 699×510 image.
 * Layout: PhotographsPage (/aertow03).
 */
export default function Florida05Page() {
  return (
    <PhotographsPage
      heroLabel="Florida"
      titleId="florida05-title"
      hero={{
        src: "/images/floridaoverview/hero-banner.jpg",
        alt: "Florida Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FloridaNavChrome />}
      previousHref="/florida04"
      overviewHref="/floridaoverview"
      nextHref="/florida06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/florida05/5436Large.jpg",
                width: 400,
                height: 280,
                alt: "Architectural model of the Florida Pavilion",
              },
              title: "Architectural model of the Florida Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/florida05/florida23.jpg",
                width: 319,
                height: 400,
                alt: "Construction of the Florida Citrus Tower",
              },
              title: "Construction of the Florida Citrus Tower",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/florida05/555-96.jpg",
                width: 400,
                height: 267,
                alt: "Lake Amusement Area and the Florida Pavilion",
              },
              title: "Lake Amusement Area and the Florida Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/florida05/633-97.jpg",
                width: 400,
                height: 267,
                alt: "Florida Pavilion",
              },
              title: "Florida Pavilion",
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
                src: "/images/florida05/florida15.jpg",
                width: 400,
                height: 262,
                alt: "A taste of Florida in New York",
              },
              title: "A taste of Florida in New York",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/florida05/florida16.jpg",
                width: 400,
                height: 273,
                alt: "Flamingos on Florida Pavilion's Flamingo Island",
              },
              title: "Flamingos on Florida Pavilion's Flamingo Island",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/florida05/florid02.jpg",
                width: 400,
                height: 267,
                alt: "Flamingos at the Florida Exhibit",
              },
              title: "Flamingos at the Florida Exhibit",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/florida05/florida25.jpg",
                width: 265,
                height: 400,
                alt: "The Florida Pavilion's Citrus Tower",
              },
              title: "The Florida Pavilion's Citrus Tower",
              source: "SOURCE: Online Auction",
            },
            {
              image: {
                src: "/images/florida05/florida17.jpg",
                width: 400,
                height: 352,
                alt: "The Florida Pavilion's Citrus Tower",
              },
              title: "The Florida Pavilion's Citrus Tower",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/florida05/florida18.jpg",
                width: 400,
                height: 253,
                alt: "A Florida Vacation Home on display",
              },
              title: "A Florida Vacation Home on display",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/florida05/florida19.jpg",
                width: 400,
                height: 269,
                alt: "The Florida Pavilion Exhibit Hall",
              },
              title: "The Florida Pavilion Exhibit Hall",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/florida05/florida20.jpg",
                width: 400,
                height: 253,
                alt: "The Florida Development Commission building",
              },
              title: "The Florida Development Commission building",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/florida05/florida21.jpg",
                width: 400,
                height: 272,
                alt: "Entrance to the Live Porpoise Show and the base of the Citrus Tower",
              },
              title:
                "Entrance to the Live Porpoise Show and the base of the Citrus Tower",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/florida05/florida24.jpg",
                width: 400,
                height: 265,
                alt: "Rear view of the Porpoise Show Theater",
              },
              title: "Rear view of the Porpoise Show Theater",
              source: "SOURCE:Online auction",
            },
            {
              image: {
                src: "/images/florida05/florida11.jpg",
                width: 400,
                height: 267,
                alt: "Scene from the Live Porpoise Show",
              },
              title: "Scene from the Live Porpoise Show",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/florida05/florida12.jpg",
                width: 267,
                height: 400,
                alt: "Scene from the Live Porpoise Show",
              },
              title: "Scene from the Live Porpoise Show",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/florida05/florida13.jpg",
                width: 400,
                height: 267,
                alt: "Scene from the Live Porpoise Show",
              },
              title: "Scene from the Live Porpoise Show",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/florida05/florida26.jpg",
                width: 400,
                height: 238,
                alt: "Scene from the Live Porpoise Show",
              },
              title: "Scene from the Live Porpoise Show",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/florida05/florida22.jpg",
                width: 300,
                height: 321,
                alt: "Basketball is only one of many talents porpoises display",
              },
              title: (
                <>
                  Basketball is only one of many talents porpoises, the
                  &quot;second-smartest mammals,&quot; display in their show at
                  Florida&apos;s pavilion.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, Date unknown (1964)
                </>
              ),
            },
            {
              image: {
                src: "/images/florida05/florid01.jpg",
                width: 460,
                height: 275,
                alt: "Flamingos at Florida's Everglades exhibit",
              },
              title: (
                <>
                  A flock of pretty pink, though raucous-voiced, flamingos lends
                  authenticity to Florida&apos;s palm-shaded Everglades exhibit.
                  A few alligators are also included in the exhibit, but -
                  obviously - they are kept in a separate pen, well away from
                  the birds.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Richard Lewis,{" "}
                  <em>New York Sunday News</em>, July 18, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/florida05/florida14.jpg",
                width: 699,
                height: 510,
                alt: "Florida Pavilion electrical construction magazine spread",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>
                  , July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
