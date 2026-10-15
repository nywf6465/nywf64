import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Life Magazine | April 24, 1964 | Vol. 56, No. 17 — nywf64.com",
  description: "Life Magazine | April 24, 1964 | Vol. 56, No. 17 — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    tiles: [
      { src: "/images/life640424/collage-01.jpg", width: 898, height: 1109, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life640424/collage-02.jpg", width: 898, height: 1110, alt: "" },
    ],
  },
];

/**
 * Life Magazine | April 24, 1964 | Vol. 56, No. 17.
 * Body from legacy life640424.html — tiled magazine scan panels.
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → collages → Nav2Bar.
 * No NEXT.
 */
export default function Life640424Page() {
  return (
    <LifeMagazineArticlePage
      title="Life Magazine | April 24, 1964 | Vol. 56, No. 17"
      titleId="life640424-title"
      previousHref="/life01"
      collages={COLLAGES}
    />
  );
}
