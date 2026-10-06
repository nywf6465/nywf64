import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Better Living Center — nywf64.com",
  description:
    "Better Living Center photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab =
  "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.";
const blackhawk =
  "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines";
const wolfe =
  "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films";
const auction = "SOURCE: Online auction";

/**
 * Better Living Center photograph album — “photographs” standard.
 * Body from legacy betliv04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Betliv04Page() {
  return (
    <PhotographsPage
      heroLabel="Better Living Center"
      titleId="betliv04-title"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      previousHref="/betliv03"
      overviewHref="/betliv01"
      nextHref="/betliv05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/betliv04/photolab-S309A.jpg",
                width: 400,
                height: 400,
                alt: "Better Living",
              },
              title: "Better Living",
              source: photoLab,
            },
            {
              image: {
                src: "/images/betliv04/mainliner-633-85.jpg",
                width: 400,
                height: 267,
                alt: "Better Living Center with Life Savers Tower",
              },
              title: "Better Living Center with Life Savers Tower",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/betliv04/wolfe-79068.jpg",
                width: 400,
                height: 261,
                alt: "Dining at Hilton Cafe International atop the Better Living Building",
              },
              title:
                "Dining at Hilton Cafe International atop the Better Living Building",
              source: wolfe,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/betliv04/betliv101.jpg",
                width: 270,
                height: 400,
                alt: "Life Savers Tower",
              },
              title: "Life Savers Tower",
              source: auction,
            },
            {
              image: {
                src: "/images/betliv04/betliv102.jpg",
                width: 400,
                height: 276,
                alt: "Fairgrounds view with Better Living Building",
              },
              title: "Fairgrounds view with Better Living Building",
              source: auction,
            },
          ],
        },
      ]}
    />
  );
}
