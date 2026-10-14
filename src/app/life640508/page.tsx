import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Life Magazine | May 8, 1964 | Vol. 56, No. 19 — nywf64.com",
  description: "Life Magazine | May 8, 1964 | Vol. 56, No. 19 — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 3,
    tiles: [
      { src: "/images/life640508/life640508.009.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640508/life640508.008.jpg", width: 301, height: 371, alt: "" },
      { src: "/images/life640508/life640508.007.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640508/life640508.006.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640508/life640508.005.jpg", width: 301, height: 371, alt: "" },
      { src: "/images/life640508/life640508.004.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640508/life640508.003.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640508/life640508.002.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/life640508/life640508.001.jpg", width: 300, height: 370, alt: "" },
    ],
  },
];

/**
 * Life Magazine | May 8, 1964 | Vol. 56, No. 19.
 * Body from legacy life640508.html — tiled magazine scan panels.
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → collages → Nav2Bar.
 * No NEXT.
 */
export default function Life640508Page() {
  return (
    <LifeMagazineArticlePage
      title="Life Magazine | May 8, 1964 | Vol. 56, No. 19"
      titleId="life640508-title"
      previousHref="/life01"
      collages={COLLAGES}
    />
  );
}
