import type { Metadata } from "next";
import { SanmarNavChrome } from "@/components/SanmarNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Santa Maria — nywf64.com",
  description:
    "Santa Maria gallery of photographs — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Santa Maria photograph gallery — “photographs” standard.
 * Body from legacy sanmar03.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Sanmar03Page() {
  return (
    <PhotographsPage
      heroLabel="Santa Maria"
      titleId="sanmar03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/sanmaroverview/hero-banner.jpg",
        alt: "Santa Maria at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SanmarNavChrome />}
      previousHref="/sanmar02"
      overviewHref="/sanmaroverview"
      nextHref="/sanmaroverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/sanmar03/5525.jpg",
                width: 400,
                height: 267,
                alt: "Entrance to the Santa Maria",
              },
              title: "Entrance to the Santa Maria",
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
                src: "/images/sanmar03/sanmar03.jpg",
                width: 400,
                height: 267,
                alt: "Entrance to the Santa Maria",
              },
              title: "Entrance to the Santa Maria",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sanmar03/sanmar01.jpg",
                width: 400,
                height: 268,
                alt: '"Space Ship 1492"',
              },
              title: '"Space Ship 1492"',
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sanmar03/sanmar04.jpg",
                width: 400,
                height: 282,
                alt: "Santa Maria",
              },
              title: "Santa Maria",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sanmar03/sanmar09.jpg",
                width: 400,
                height: 403,
                alt: "Santa Maria",
              },
              title: "Santa Maria",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/sanmar03/sanmar05.jpg",
                width: 400,
                height: 270,
                alt: "Santa Maria",
              },
              title: "Santa Maria",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/sanmar03/sanmar08.jpg",
                width: 400,
                height: 269,
                alt: "Santa Maria",
              },
              title: "Santa Maria",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/sanmar03/sanmar06.jpg",
                width: 400,
                height: 260,
                alt: "Santa Maria",
              },
              title: "Santa Maria",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/sanmar03/sanmar07.jpg",
                width: 400,
                height: 250,
                alt: "Santa Maria - The Ships Galley Restaurant",
              },
              title: "Santa Maria - The Ships Galley Restaurant",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/sanmar03/sanmar02.jpg",
                width: 600,
                height: 447,
                alt: "Santa Maria",
              },
              title: "Santa Maria",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair Publication{" "}
                  <em>
                    For Those Who Produced the 1964-1965 New York World&apos;s
                    Fair
                  </em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
