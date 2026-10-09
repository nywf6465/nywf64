import type { Metadata } from "next";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Switzerland — nywf64.com",
  description:
    "Switzerland pavilion gallery of photographs — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Switzerland photograph gallery — “photographs” standard with legacy title.
 * Body from legacy switz03.html (Photograph Scrap Book banner omitted).
 */
export default function Switz03Page() {
  return (
    <PhotographsPage
      heroLabel="Switzerland"
      titleId="switz03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/switzoverview/hero-banner.jpg",
        alt: "Switzerland pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwitzNavChrome />}
      previousHref="/switz02"
      overviewHref="/switzoverview"
      nextHref="/switz04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/switz03/photolab-S308D.jpg",
                width: 400,
                height: 400,
                alt: "Pavilion of Switzerland",
              },
              title: "Pavilion of Switzerland",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/switz03/mainliner-555-60.jpg",
                width: 267,
                height: 400,
                alt: "Pavilion of Switzerland",
              },
              title: "Pavilion of Switzerland",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/switz03/swiss07.jpg",
                width: 400,
                height: 276,
                alt: "Pavilion of Switzerland",
              },
              title: "Pavilion of Switzerland",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/switz03/swiss06.jpg",
                width: 400,
                height: 309,
                alt: "Pavilion of Switzerland Exhibits",
              },
              title: "Pavilion of Switzerland Exhibits",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/switz03/swiss05.jpg",
                width: 300,
                height: 224,
                alt: "Inviting Alpine Swiss Pavilion with Swiss Sky Ride in the distance",
              },
              title: (
                <>
                  <strong>Inviting</strong> in its familiar Alpine appearance,
                  Switzerland houses a $2-million watch collection, a time
                  center, Le Chalet (Swiss restaurant), exhibit hall and shop.
                  Note Swiss Sky Ride in distance.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, August 15, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
