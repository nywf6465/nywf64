import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Saturday Evening Post | March 28, 1964 | Vol. 237, No. 12 — nywf64.com",
  description:
    "Saturday Evening Post | March 28, 1964 | Vol. 237, No. 12 — The Pieta: Masterpiece at the fair — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    tiles: [
      { src: "/images/post640328/collage-01.jpg", width: 898, height: 1293, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640328/collage-02.jpg", width: 898, height: 1108, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640328/collage-03.jpg", width: 898, height: 1108, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640328/collage-04.jpg", width: 898, height: 1109, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640328/collage-05.jpg", width: 898, height: 1110, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640328/collage-06.jpg", width: 899, height: 1108, alt: "" },
    ],
  },
];

/**
 * Saturday Evening Post | March 28, 1964 | Vol. 237, No. 12 — The Pieta.
 * Body from legacy post640328.html — tiled magazine scan panels.
 * Linked from the 1st cover on /post01. Nav bar shows Page 2. No NEXT.
 * Note: legacy references post640328.001 without a fetchable file; omitted.
 */
export default function Post640328Page() {
  return (
    <LifeMagazineArticlePage
      title="Saturday Evening Post | March 28, 1964 | Vol. 237, No. 12"
      titleId="post640328-title"
      previousHref="/post01"
      collages={COLLAGES}
    />
  );
}
