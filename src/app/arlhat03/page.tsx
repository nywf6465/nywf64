import type { Metadata } from "next";
import { ArlhatNavChrome } from "@/components/ArlhatNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Arlington Hat — nywf64.com",
  description:
    "Arlington Hat photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Arlington Hat photograph album — “photographs” standard.
 * Body from legacy arlhat03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Arlhat03Page() {
  return (
    <PhotographsPage
      heroLabel="Arlington Hat"
      titleId="arlhat03-title"
      hero={{
        src: "/images/arlhatoverview/hero-banner.jpg",
        alt: "Arlington Hat at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ArlhatNavChrome />}
      previousHref="/arlhat02"
      overviewHref="/arlhatoverview"
      nextHref="/arlhatoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/arlhat03/oil-paintings.jpg",
                width: 480,
                height: 322,
                alt: "Arlington Hat Stand selling oil paintings for 50c",
              },
              title: "Arlington Hat Stand selling oil paintings for 50c",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/arlhat03/stand-berksboy.jpg",
                width: 400,
                height: 280,
                alt: "Arlington Hat Stand",
              },
              title: "Arlington Hat Stand",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/arlhat03/stand-kraus.jpg",
                width: 400,
                height: 235,
                alt: "Arlington Hat Stand",
              },
              title: "Arlington Hat Stand",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/arlhat03/busy-stand.jpg",
                width: 480,
                height: 318,
                alt: "A busy Arlington Hat Stand",
              },
              title: "A busy Arlington Hat Stand",
              source: "SOURCE: Online Auction",
            },
            {
              image: {
                src: "/images/arlhat03/night-stand.jpg",
                width: 480,
                height: 347,
                alt: "Arlington Hat Stand illuminated at night",
              },
              title: "Arlington Hat Stand illuminated at night",
              source: "SOURCE: Online Auction",
            },
          ],
        },
      ]}
    />
  );
}
