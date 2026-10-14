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
    columns: 3,
    tiles: [
      { src: "/images/life631206/life631206.009.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.008.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.007.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.006.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.005.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.004.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.003.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.002.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.001.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    tiles: [
      { src: "/images/life631206/life631206.015.jpg", width: 300, height: 295, alt: "" },
      { src: "/images/life631206/life631206.014.jpg", width: 300, height: 295, alt: "" },
      { src: "/images/life631206/life631206.013.jpg", width: 300, height: 295, alt: "" },
      { src: "/images/life631206/life631206.012.jpg", width: 300, height: 295, alt: "" },
      { src: "/images/life631206/life631206.011.jpg", width: 300, height: 295, alt: "" },
      { src: "/images/life631206/life631206.010.jpg", width: 300, height: 295, alt: "" },
    ],
  },
  {
    columns: 3,
    tiles: [
      { src: "/images/life631206/life631206.024.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/life631206/life631206.023.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/life631206/life631206.022.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.021.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/life631206/life631206.020.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/life631206/life631206.019.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/life631206/life631206.018.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/life631206/life631206.017.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/life631206/life631206.016.jpg", width: 300, height: 370, alt: "" },
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
