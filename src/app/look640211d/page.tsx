import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — nywf64.com",
  description:
    "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — Look's Map of the New York World's Fair / Fairs: Builders of Dreams — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/look640211.204.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.203.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.202.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.201.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/look640211d/look640211.200.jpg", width: 301, height: 371, alt: "" },
      { src: "/images/look640211d/look640211.199.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/look640211d/look640211.198.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.197.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.196.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/look640211.213.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.212.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.211.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.210.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.209.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.208.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.207.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.206.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.205.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/look640211.222.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.221.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.220.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.219.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.218.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.217.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.216.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.215.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.214.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/look640211.231.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.230.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.229.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.228.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.227.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.226.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.225.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.224.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211d/look640211.223.jpg", width: 300, height: 370, alt: "" },
    ],
  },
];

/**
 * Look Magazine | February 11, 1964 | Vol. 28, No. 3 — Map / Builders of Dreams.
 * Body from legacy look640211d.html — tiled magazine scan panels.
 * Linked from the 5th cover on /look01. Nav bar shows Page 2. No NEXT.
 */
export default function Look640211dPage() {
  return (
    <LifeMagazineArticlePage
      title="Look Magazine | February 11, 1964 | Vol. 28, No. 3"
      titleId="look640211d-title"
      previousHref="/look01"
      collages={COLLAGES}
    />
  );
}
