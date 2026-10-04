import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Unisphere — nywf64.com",
  description:
    "Unisphere photograph album — fairgoer and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere photograph album II — “photographs” standard.
 * Body from legacy unisph06.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Unisph06Page() {
  return (
    <PhotographsPage
      heroLabel="Unisphere"
      titleId="unisph06-title"
      title="Photograph Album"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph05"
      overviewHref="/unisphoverview"
      nextHref="/unisph07"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/unisph06/unisph-unisph252.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere - Dusk",
              },
              title: "Unisphere - Dusk",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph255.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere - Night",
              },
              title: "Unisphere - Night",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph258.jpg",
                width: 400,
                height: 282,
                alt: "Unisphere - Night",
              },
              title: "Unisphere - Night",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph259.jpg",
                width: 400,
                height: 271,
                alt: "Unisphere - Night",
              },
              title: "Unisphere - Night",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph273.jpg",
                width: 400,
                height: 261,
                alt: "Unisphere - Night",
              },
              title: "Unisphere - Night",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph274.jpg",
                width: 400,
                height: 400,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph260.jpg",
                width: 262,
                height: 400,
                alt: "Unisphere - Night",
              },
              title: "Unisphere - Night",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph12.jpg",
                width: 400,
                height: 361,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph254.jpg",
                width: 400,
                height: 271,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph267.jpg",
                width: 400,
                height: 304,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph253.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere and Court of Nations",
              },
              title: "Unisphere and Court of Nations",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph256.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere and Court of Nations",
              },
              title: "Unisphere and Court of Nations",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph270.jpg",
                width: 400,
                height: 282,
                alt: "Unisphere and Court of Nations",
              },
              title: "Unisphere and Court of Nations",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph266.jpg",
                width: 400,
                height: 261,
                alt: "Unisphere and Court of Nations",
              },
              title: "Unisphere and Court of Nations",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph257.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere and Court of States",
              },
              title: "Unisphere and Court of States",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph268.jpg",
                width: 400,
                height: 277,
                alt: "Unisphere and Flower Beds",
              },
              title: "Unisphere and Flower Beds",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph269.jpg",
                width: 400,
                height: 266,
                alt: "Unisphere from the NY State Observation Tower",
              },
              title: "Unisphere from the NY State Observation Tower",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph261.jpg",
                width: 345,
                height: 400,
                alt: "Detail of Unisphere's surface",
              },
              title: "Detail of Unisphere's surface",
              source: "SOURCE: © Copyright Rich Post Collection",
            }
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/unisph06/unisph-unisph03.jpg",
                width: 400,
                height: 457,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: United States Steel 1963 Annual Report - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph07.jpg",
                width: 400,
                height: 456,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: United States Steel 1964 Annual Report - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph06/unisph-unisph262.jpg",
                width: 460,
                height: 296,
                alt: "CENTER OF ATTRACTION",
              },
              title: (
                <>
                  CENTER OF ATTRACTION
                  <br />
                  <br />
                  FOR TODAY'S SCRAPBOOK entry you're atop the United States pavilion looking along the state flag-lined Court of States toward the Unisphere, symbol of the Fair. Bordering the court at extreme left is the entrance to Thailand's pavilion; next is the Mexico pavilion with flat dome and paneled walls. Over on the right the New England complex lines the court. Beyond it are the masts and peaked roofs of New Jersey and New York's Theaterama and Tent of Tomorrow.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, June 14, 1964
                </>
              ),
            }
          ],
        }
      ]}
    />
  );
}
