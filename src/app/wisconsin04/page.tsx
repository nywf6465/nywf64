import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — Wisconsin — nywf64.com",
  description:
    "Wisconsin pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin photograph album.
 * Body from legacy wisconsin04.html (Photograph Scrap Book banner omitted).
 * Three grey trays map to Commercial / Fairgoer / Publication sections.
 * Layout: PhotographsPage (/aertow03).
 */
export default function Wisconsin04Page() {
  return (
    <PhotographsPage
      heroLabel="Wisconsin"
      titleId="wisconsin04-title"
      hero={{
        src: "/images/wisconsinoverview/hero-banner.jpg",
        alt: "Wisconsin pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WisconsinNavChrome />}
      previousHref="/wisconsin03"
      overviewHref="/wisconsinoverview"
      nextHref="/wisconsin05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/wisconsin04/5439Large.jpg",
                width: 400,
                height: 272,
                alt: "An early concept for the Wisconsin Pavilion",
              },
              title: "An early concept for the Wisconsin Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/wisconsin04/555-76.jpg",
                width: 267,
                height: 400,
                alt: "The central rotunda of the Wisconsin Pavilion",
              },
              title: "The central rotunda of the Wisconsin Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/wisconsin04/wi18.jpg",
                width: 400,
                height: 265,
                alt: "Wisconsin Pavilion as seen from the New York State Pavilion observation towers",
              },
              title:
                "Wisconsin Pavilion as seen from the New York State Pavilion observation towers",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/wisconsin04/wi26.jpg",
                width: 400,
                height: 319,
                alt: "Wisconsin Pavilion as seen from the U.S. Rubber Ferris Wheel",
              },
              title:
                "Wisconsin Pavilion as seen from the U.S. Rubber Ferris Wheel",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/wisconsin04/wi20.jpg",
                width: 400,
                height: 274,
                alt: "Back side of the Wisconsin Pavilion from the Grand Central Parkway",
              },
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/wisconsin04/wi24.jpg",
                width: 400,
                height: 269,
                alt: "Back side of the Wisconsin Pavilion showing the red silo slide",
              },
              title:
                "Two views of the back side of the Wisconsin Pavilion as seen from the Grand Central Parkway. Note the red silo. It is actually a giant slide.",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/wisconsin04/wi23.jpg",
                width: 400,
                height: 196,
                alt: "Wisconsin Pavilion as seen from the United Nations (South) Bridge",
              },
              title:
                "Wisconsin Pavilion as seen from the United Nations (South) Bridge",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/wisconsin04/wi25.jpg",
                width: 267,
                height: 400,
                alt: "Whoppee! Down the giant Silo Slide at the Wisconsin Pavilion",
              },
              title:
                "Whoppee! Down the giant Silo Slide at the Wisconsin Pavilion",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/wisconsin04/wi27.jpg",
                width: 600,
                height: 478,
                alt: "Wisconsin Pavilion",
              },
              title: "Wisconsin Pavilion",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair Publicity Photograph - nywf64.com
                  Collection
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
