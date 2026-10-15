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
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/collage-01.jpg", width: 899, height: 1109, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/collage-02.jpg", width: 899, height: 1108, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/collage-03.jpg", width: 900, height: 1108, alt: "" },
    ],
  },
  {
    columns: 1,
    bordered: false,
    tiles: [
      { src: "/images/look640211d/collage-04.jpg", width: 900, height: 1108, alt: "" },
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
