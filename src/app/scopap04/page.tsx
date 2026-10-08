import type { Metadata } from "next";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Scott Paper — nywf64.com",
  description:
    "Scott Paper gallery of photographs — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper photograph gallery — “photographs” standard.
 * Body from legacy scopap04.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Scopap04Page() {
  return (
    <PhotographsPage
      heroLabel="Scott Paper"
      titleId="scopap04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/scopapoverview/hero-banner.jpg",
        alt: "Scott Paper at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ScopapNavChrome />}
      previousHref="/scopap03"
      overviewHref="/scopapoverview"
      nextHref="/scopap05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/scopap04/5466Large.jpg",
                width: 400,
                height: 286,
                alt: "Artist's rendering of the Scott Paper Pavilion",
              },
              title: "Artist's rendering of the Scott Paper Pavilion",
              source:
                "SOURCE: Commercial Transparency © Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/scopap04/scott35.jpg",
                width: 267,
                height: 400,
                alt: "Scott Paper Tower - Night",
              },
              title: "Scott Paper Tower - Night",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/scopap04/scott27.jpg",
                width: 300,
                height: 450,
                alt: "Scott Paper Tower",
              },
              title: "Scott Paper Tower",
              source: "SOURCE: Presented courtesy Ray Dashner Collection",
            },
            {
              image: {
                src: "/images/scopap04/scott28.jpg",
                width: 371,
                height: 240,
                alt: 'Crowds gather at entrance to Scott\'s "Enchanted Forest"',
              },
              title: 'Crowds gather at entrance to Scott\'s "Enchanted Forest"',
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/scopap04/scott29.jpg",
                width: 401,
                height: 260,
                alt: "Scott Paper Pavilion",
              },
              title: "Scott Paper Pavilion",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/scopap04/scott36.jpg",
                width: 285,
                height: 400,
                alt: "Scott Paper Tower - Night",
              },
              title: "Scott Paper Tower - Night",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}
