import type { Metadata } from "next";
import { DemocrNavChrome } from "@/components/DemocrNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Demonstration Center — nywf64.com",
  description:
    "Demonstration Center photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Demonstration Center photograph album — “photographs” standard.
 * Body from legacy democr04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Democr04Page() {
  return (
    <PhotographsPage
      heroLabel="Demonstration Center"
      titleId="democr04-title"
      hero={{
        src: "/images/democroverview/hero-banner.jpg",
        alt: "Demonstration Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<DemocrNavChrome />}
      previousHref="/democr03"
      overviewHref="/democroverview"
      nextHref="/democr05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/arch/S-186ALarge.jpg",
                width: 400,
                height: 388,
                alt: "Artist's rendering of the Demonstration Center/Hall of Education",
              },
              title:
                "Artist's rendering of the Demonstration Center/Hall of Education",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/photolab/S309D.jpg",
                width: 400,
                height: 404,
                alt: "Demonstration Center",
              },
              title: "Demonstration Center",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/democr/democr06.jpg",
                width: 400,
                height: 418,
                alt: "Demonstration Center",
              },
              title: "Demonstration Center",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/democr/democr07.jpg",
                width: 400,
                height: 297,
                alt: "Demonstration Center",
              },
              title: "Demonstration Center",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/democr/democr05.jpg",
                width: 400,
                height: 267,
                alt: "Demonstration Center and Travelers Insurance Pavilion",
              },
              title: "Demonstration Center and Travelers Insurance Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/democr/democr01.jpg",
                width: 600,
                height: 310,
                alt: "Architectural rendering of the Demonstration Center",
              },
              title: "Architectural rendering of the Demonstration Center",
              source: (
                <>
                  SOURCE: Pamphlet, <em>Concrete at the Fair</em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
