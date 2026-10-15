import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Life Magazine | January 17, 1964 | Vol. 56, No. 3 — nywf64.com",
  description: "Life Magazine | January 17, 1964 | Vol. 56, No. 3 — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    bordered: false,
    maxWidth: 600,
    tiles: [
      { src: "/images/life640117/collage-01.jpg", width: 600, height: 1142, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-02.jpg", width: 898, height: 861, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 300,
    tiles: [
      { src: "/images/life640117/collage-03.jpg", width: 300, height: 835, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-04.jpg", width: 898, height: 701, alt: "" },
    ],
    caption: "STANLEY MELTZOFF",
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640117/collage-05.jpg", width: 898, height: 228, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-06.jpg", width: 898, height: 489, alt: "" },
    ],
    caption: "ARTHUR LIDOV",
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-07.jpg", width: 898, height: 497, alt: "" },
    ],
    caption: "ARTHUR LIDOV",
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/life640117/collage-08.jpg", width: 898, height: 199, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 300,
    tiles: [
      { src: "/images/life640117/collage-09.jpg", width: 300, height: 849, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-10.jpg", width: 898, height: 701, alt: "" },
    ],
    caption: "STANLEY MELTZOFF",
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-11.jpg", width: 898, height: 585, alt: "" },
    ],
    caption: "MEL HUNTER",
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-12.jpg", width: 900, height: 1197, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640117/collage-13.jpg", width: 900, height: 1197, alt: "" },
    ],
  },
];

/**
 * Life Magazine | January 17, 1964 | Vol. 56, No. 3.
 * Body from legacy life640117.html — tiled magazine scan panels.
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → collages → Nav2Bar.
 * No NEXT.
 */
export default function Life640117Page() {
  return (
    <LifeMagazineArticlePage
      title="Life Magazine | January 17, 1964 | Vol. 56, No. 3"
      titleId="life640117-title"
      previousHref="/life01"
      collages={COLLAGES}
    />
  );
}
