import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — nywf64.com",
  description:
    "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — For the Fair: Shoes to Pamper your Feet / Home for the Fair — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/collage-01.jpg", width: 898, height: 1108, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/collage-02.jpg", width: 900, height: 1108, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/collage-03.jpg", width: 898, height: 1109, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/collage-04.jpg", width: 899, height: 1109, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/collage-05.jpg", width: 898, height: 1108, alt: "" },
    ],
  },
];

/**
 * Look Magazine | February 11, 1964 | Vol. 28, No. 3 — Shoes / Home for the Fair.
 * Body from legacy look640211c.html — tiled magazine scan panels.
 * Linked from the 4th cover on /look01. Nav bar shows Page 2. No NEXT.
 */
export default function Look640211cPage() {
  return (
    <LifeMagazineArticlePage
      title="Look Magazine | February 11, 1964 | Vol. 28, No. 3"
      titleId="look640211c-title"
      previousHref="/look01"
      collages={COLLAGES}
    />
  );
}
