import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland advertisements from the Official Guide and national campaigns — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair advertising page — “advertising” standard.
 * Body from legacy sinclair04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Sinclair04Page() {
  return (
    <AdvertisingPage
      heroLabel="Sinclair"
      titleId="sinclair04-title"
      hero={{
        src: "/images/sinclairoverview/hero-banner.jpg",
        alt: "Sinclair Dinoland at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SinclairNavChrome />}
      previousHref="/sinclair03"
      overviewHref="/sinclairoverview"
      nextHref="/sinclair05"
      collages={[
      {
        columns: 2,
        tiles: [
          {
            src: "/images/sinclair04/sincla121.01.jpg",
            width: 300,
            height: 326,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla121.02.jpg",
            width: 300,
            height: 326,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla121.03.jpg",
            width: 300,
            height: 326,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla121.04.jpg",
            width: 300,
            height: 326,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla121.05.jpg",
            width: 300,
            height: 326,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla121.06.jpg",
            width: 300,
            height: 326,
            alt: "Sinclair advertisement",
          },
        ],
        sources: ["Source: Advertisement 1964 & 1965 Official Guide, 1964-1965 New York World's Fair"],
      },
      {
        columns: 3,
        tiles: [
          {
            src: "/images/sinclair04/sincla125.01.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.02.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.03.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.04.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.05.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.06.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.07.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.08.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla125.09.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
        ],
        sources: ["Source: National Advertising"],
      },
      {
        columns: 3,
        tiles: [
          {
            src: "/images/sinclair04/sincla122.01.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.02.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.03.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.04.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.05.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.06.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.07.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.08.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla122.09.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
        ],
        sources: ["Source: National Advertising"],
      },
      {
        columns: 3,
        tiles: [
          {
            src: "/images/sinclair04/sincla123.01.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.02.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.03.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.04.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.05.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.06.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.07.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.08.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla123.09.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
        ],
        sources: ["Source: National Advertising"],
      },
      {
        columns: 3,
        tiles: [
          {
            src: "/images/sinclair04/sincla124.01.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.02.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.03.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.04.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.05.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.06.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.07.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.08.jpg",
            width: 301,
            height: 438,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla124.09.jpg",
            width: 300,
            height: 438,
            alt: "Sinclair advertisement",
          },
        ],
        sources: ["Source: National Advertising"],
      },
      {
        columns: 3,
        tiles: [
          {
            src: "/images/sinclair04/sincla126.01.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.02.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.03.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.04.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.05.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.06.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.07.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.08.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
          {
            src: "/images/sinclair04/sincla126.09.jpg",
            width: 300,
            height: 364,
            alt: "Sinclair advertisement",
          },
        ],
        sources: ["Source: National Advertising"],
      }
      ]}
    />
  );
}
