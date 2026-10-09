import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { WfmarNavChrome } from "@/components/WfmarNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — World's Fair Marina — nywf64.com",
  description:
    "World's Fair Marina photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Marina photograph album.
 * Body from legacy wfmar04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Wfmar04Page() {
  return (
    <PhotographsPage
      heroLabel="World's Fair Marina"
      titleId="wfmar04-title"
      hero={{
        src: "/images/wfmaroverview/hero-banner.jpg",
        alt: "World's Fair Marina at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfmarNavChrome />}
      previousHref="/wfmar03"
      overviewHref="/wfmaroverview"
      nextHref="/wfmaroverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/wfmar04/5420Large.jpg",
                width: 400,
                height: 278,
                alt: "Artis's rendering of the Marina's Administration Building",
              },
              title: "Artis's rendering of the Marina's Administration Building",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
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
                src: "/images/wfmar04/wfmar05.jpg",
                width: 400,
                height: 189,
                alt: "Marina Administration Building",
              },
              title: "Marina Administration Building",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/wfmar04/wfmar01.jpg",
                width: 400,
                height: 258,
                alt: "Marina Administration Building - World's Fair Marina",
              },
              title: "Marina Administration Building - World's Fair Marina",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/wfmar04/wfmar06.jpg",
                width: 400,
                height: 209,
                alt: "Marina View",
              },
              title: "Marina View",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/wfmar04/wfmar07.jpg",
                width: 400,
                height: 136,
                alt: "Marina View",
              },
              title: "Marina View",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/wfmar04/wfmar08.jpg",
                width: 400,
                height: 164,
                alt: "Marina View",
              },
              title: "Marina View",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/wfmar04/wfmar11.jpg",
                width: 280,
                height: 400,
                alt: "Marina View",
              },
              title: "Marina View",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/wfmar04/wfmar09.jpg",
                width: 400,
                height: 192,
                alt: "Candela Structures exhibit buildings at the Marina",
              },
              title: "Candela Structures exhibit buildings at the Marina",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/wfmar04/wfmar10.jpg",
                width: 400,
                height: 200,
                alt: "Candela Structure exhibit building for the U.S. Coast Guard",
              },
              title:
                "Candela Structure exhibit building for the U.S. Coast Guard",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/wfmar04/wfmar02.jpg",
                width: 400,
                height: 290,
                alt: "Artist's rendering of the World's Fair Marina",
              },
              title: "Artist's rendering of the World's Fair Marina",
              source: (
                <>
                  SOURCE: <i>Johnson at the World's Fair Marina</i>, Online
                  auction
                </>
              ),
            },
            {
              image: {
                src: "/images/wfmar04/wfmar12.jpg",
                width: 400,
                height: 253,
                alt: "Artist's rendering of the World's Fair Marina Administration Building",
              },
              title:
                "Artist's rendering of the World's Fair Marina Administration Building",
              source: <>SOURCE: Presented courtesy Mike Kraus Collection</>,
            },
          ],
        },
      ]}
    />
  );
}
