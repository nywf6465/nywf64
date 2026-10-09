import type { Metadata } from "next";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Billy Graham — nywf64.com",
  description:
    "Billy Graham Pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab =
  "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.";
const blackhawk =
  "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines";

/**
 * Billy Graham photograph album — “photographs” standard.
 * Body from legacy bilgra05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Bilgra05Page() {
  return (
    <PhotographsPage
      heroLabel="Billy Graham"
      titleId="bilgra05-title"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      previousHref="/bilgra04"
      overviewHref="/bilgra01"
      nextHref="/bilgra06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/bilgra05/S-187CLarge.jpg",
                width: 400,
                height: 384,
                alt: "Artist's Rendering of Billy Graham's Pavilion",
              },
              title: "Artist's Rendering of Billy Graham's Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/bilgra05/5630.jpg",
                width: 400,
                height: 267,
                alt: "Billy Graham Pavilion",
              },
              title: "Billy Graham Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/bilgra05/633-64.jpg",
                width: 267,
                height: 400,
                alt: "100-foot tower with golden sunburst marks Billy Graham Pavilion",
              },
              title:
                "100-foot tower with golden sunburst marks Billy Graham Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/bilgra05/555-38.jpg",
                width: 400,
                height: 267,
                alt: "Billy Graham Pavilion",
              },
              title: "Billy Graham Pavilion",
              source: blackhawk,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/bilgra05/bilgra62.jpg",
                width: 400,
                height: 392,
                alt: "Billy Graham Pavilion",
              },
              title: "Billy Graham Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/bilgra05/bilgra09.jpg",
                width: 481,
                height: 362,
                alt: "Billy Graham Pavilion",
              },
              title: "Billy Graham Pavilion",
              source: (
                <>
                  SOURCE: Souvenir Book <em>Man in the Fifth Dimension</em>
                </>
              ),
            },
            {
              image: {
                src: "/images/bilgra05/bilgra01.jpg",
                width: 300,
                height: 438,
                alt: "Its tower is a beacon inviting visitors to the Billy Graham pavilion",
              },
              title:
                "Its tower is a beacon inviting visitors to the Billy Graham pavilion.  Inside a Todd-AO film and a variety of exhibits present the religious message of the evangelist.",
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, October 4, 1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
