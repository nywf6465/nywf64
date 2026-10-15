import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Life Magazine | May 1, 1964 | Vol. 56, No. 18 — nywf64.com",
  description: "Life Magazine | May 1, 1964 | Vol. 56, No. 18 — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    tiles: [
      { src: "/images/life640501/collage-01.jpg", width: 900, height: 1197, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640501/collage-02.jpg", width: 898, height: 505, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640501/collage-03.jpg", width: 898, height: 219, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640501/collage-04.jpg", width: 898, height: 623, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640501/collage-05.jpg", width: 898, height: 165, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 350,
    tiles: [
      { src: "/images/life640501/collage-06.jpg", width: 350, height: 445, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 350,
    tiles: [
      { src: "/images/life640501/collage-07.jpg", width: 350, height: 532, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640501/collage-08.jpg", width: 898, height: 68, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640501/collage-09.jpg", width: 898, height: 573, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640501/collage-10.jpg", width: 898, height: 273, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 400,
    tiles: [
      { src: "/images/life640501/collage-11.jpg", width: 400, height: 385, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 400,
    tiles: [
      { src: "/images/life640501/collage-12.jpg", width: 400, height: 472, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 400,
    tiles: [
      { src: "/images/life640501/collage-13.jpg", width: 400, height: 403, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640501/collage-14.jpg", width: 900, height: 1261, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640501/collage-15.jpg", width: 898, height: 1197, alt: "" },
    ],
  },
];

/**
 * Life Magazine | May 1, 1964 | Vol. 56, No. 18.
 * Body from legacy life640501.html — tiled magazine scan panels.
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → collages → Nav2Bar.
 * No NEXT.
 */
export default function Life640501Page() {
  return (
    <LifeMagazineArticlePage
      title="Life Magazine | May 1, 1964 | Vol. 56, No. 18"
      titleId="life640501-title"
      previousHref="/life01"
      collages={COLLAGES}
    />
  );
}
