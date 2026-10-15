import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Life Magazine | December 6, 1963 | Vol. 55, No. 23 — nywf64.com",
  description: "Life Magazine | December 6, 1963 | Vol. 55, No. 23 — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 1,
    tiles: [
      { src: "/images/life631206/collage-01.jpg", width: 898, height: 1108, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life631206/collage-02.jpg", width: 898, height: 589, alt: "" },
    ],
  },
  {
    columns: 1,
    tiles: [
      { src: "/images/life631206/collage-03.jpg", width: 900, height: 1108, alt: "" },
    ],
  },
];

/**
 * Life Magazine | December 6, 1963 | Vol. 55, No. 23.
 * Body from legacy life631206.html — tiled magazine scan panels.
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → collages → Nav2Bar.
 * No NEXT.
 */
export default function Life631206Page() {
  return (
    <LifeMagazineArticlePage
      title="Life Magazine | December 6, 1963 | Vol. 55, No. 23"
      titleId="life631206-title"
      previousHref="/life01"
      collages={COLLAGES}
    />
  );
}
