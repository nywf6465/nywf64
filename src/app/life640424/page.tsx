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
    columns: 3,
    tiles: [
      { src: "/images/life640424/life640424.009.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640424/life640424.008.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640424/life640424.007.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640424/life640424.006.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.005.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.004.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.003.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640424/life640424.002.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640424/life640424.001.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    tiles: [
      { src: "/images/life640424/life640424.018.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.017.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.016.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.015.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.014.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.013.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/life640424/life640424.012.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640424/life640424.011.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life640424/life640424.010.jpg", width: 300, height: 370, alt: "" },
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
