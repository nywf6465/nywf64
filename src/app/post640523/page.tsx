import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Saturday Evening Post | May 23, 1964 | Vol. 237, No. 20 — nywf64.com",
  description:
    "Saturday Evening Post | May 23, 1964 | Vol. 237, No. 20 — The great fair / The old s.o.b. does it again / Who needs the World's Fair? — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    bordered: false,
    maxWidth: 600,
    tiles: [
      { src: "/images/post640523/collage-01.jpg", width: 600, height: 1042, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-02.jpg", width: 898, height: 834, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-03.jpg", width: 898, height: 592, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 400,
    tiles: [
      { src: "/images/post640523/collage-04.jpg", width: 399, height: 544, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 400,
    tiles: [
      { src: "/images/post640523/collage-05.jpg", width: 399, height: 604, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-06.jpg", width: 900, height: 1083, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-07.jpg", width: 900, height: 1123, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-08.jpg", width: 898, height: 468, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-09.jpg", width: 898, height: 421, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-10.jpg", width: 898, height: 393, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-11.jpg", width: 898, height: 638, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-12.jpg", width: 898, height: 617, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-13.jpg", width: 900, height: 1123, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    maxWidth: 267,
    tiles: [
      { src: "/images/post640523/collage-14.jpg", width: 399, height: 926, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/post640523/collage-15.jpg", width: 898, height: 782, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640523/collage-16.jpg", width: 900, height: 1173, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640523/collage-17.jpg", width: 900, height: 1189, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640523/collage-18.jpg", width: 900, height: 1139, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/post640523/collage-19.jpg", width: 900, height: 1101, alt: "" },
    ],
  },
];

/**
 * Saturday Evening Post | May 23, 1964 | Vol. 237, No. 20.
 * Body from legacy post640523.html — tiled magazine scan panels.
 * Linked from the 2nd cover on /post01. Nav bar shows Page 2. No NEXT.
 */
export default function Post640523Page() {
  return (
    <LifeMagazineArticlePage
      title="Saturday Evening Post | May 23, 1964 | Vol. 237, No. 20"
      titleId="post640523-title"
      previousHref="/post01"
      collages={COLLAGES}
    />
  );
}
