import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { TexasNavChrome } from "@/components/TexasNavChrome";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Texas Pavilions & Music Hall photograph gallery — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall photograph gallery — photographs standard.
 * Body from legacy texas04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Texas04Page() {
  return (
    <PhotographsPage
      heroLabel="Texas Pavilions & Music Hall"
      titleId="texas04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/texasoverview/hero-banner.jpg",
        alt: "Texas Pavilions & Music Hall at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TexasNavChrome />}
      previousHref="/texas03"
      overviewHref="/texasoverview"
      nextHref="/texas05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/texas04/5423Large.jpg",
                width: 400,
                height: 248,
                alt: "Artist's rendering of the Music Hall",
              },
              title: "Artist's rendering of the Music Hall",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab,
                  Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/texas04/5530.jpg",
                width: 400,
                height: 267,
                alt: "The Music Hall",
              },
              title: "The Music Hall",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab,
                  Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/texas04/S304A.jpg",
                width: 400,
                height: 403,
                alt: "The Texas Music Hall",
              },
              title: "The Texas Music Hall",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab,
                  Inc.
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
                src: "/images/texas04/texas139.jpg",
                width: 400,
                height: 267,
                alt: "The Music Hall",
              },
              title: "The Music Hall",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
          ],
        },
      ]}
    />
  );
}
