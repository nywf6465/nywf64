import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — nywf64.com",
  description:
    "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — Showcase of Our Times Opens April 22 / See it Now — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-01.jpg", width: 900, height: 1141, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-02.jpg", width: 898, height: 88, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-03.jpg", width: 900, height: 1155, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-04.jpg", width: 900, height: 1117, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-05.jpg", width: 900, height: 1139, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-06.jpg", width: 900, height: 998, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-07.jpg", width: 899, height: 378, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-08.jpg", width: 898, height: 898, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-09.jpg", width: 900, height: 1443, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211/collage-10.jpg", width: 900, height: 1051, alt: "" },
    ],
  },
];

/**
 * Look Magazine | February 11, 1964 | Vol. 28, No. 3.
 * Body from legacy look640211.html — tiled magazine scan panels.
 * Linked from the 2nd cover on /look01. Nav bar shows Page 2. No NEXT.
 */
export default function Look640211Page() {
  return (
    <LifeMagazineArticlePage
      title="Look Magazine | February 11, 1964 | Vol. 28, No. 3"
      titleId="look640211-title"
      previousHref="/look01"
      collages={COLLAGES}
    />
  );
}
