import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Newsweek Magazine | January 13, 1964 | Vol. 63, No. 2 — nywf64.com",
  description:
    "Newsweek Magazine | January 13, 1964 | Vol. 63, No. 2 — World's Fair '64: A Preview — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    tiles: [
      { src: "/images/newsweek640113/collage-01.jpg", width: 900, height: 1186, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/newsweek640113/collage-02.jpg", width: 900, height: 1197, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/newsweek640113/collage-03.jpg", width: 900, height: 1237, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/newsweek640113/collage-04.jpg", width: 900, height: 1221, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/newsweek640113/collage-05.jpg", width: 898, height: 961, alt: "" },
    ],
  },
];

/**
 * Newsweek Magazine | January 13, 1964 | Vol. 63, No. 2.
 * Body from legacy newsweek640113.html — tiled magazine scan panels.
 * Linked from /newsweek01 cover. Nav bar shows Page 2. No NEXT.
 */
export default function Newsweek640113Page() {
  return (
    <LifeMagazineArticlePage
      title="Newsweek Magazine | January 13, 1964 | Vol. 63, No. 2"
      titleId="newsweek640113-title"
      previousHref="/newsweek01"
      collages={COLLAGES}
    />
  );
}
