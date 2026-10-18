import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5482 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5482 — Bell System Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5482 (legacy plab5482.html).
 * Nav bar shows Page 13. NEXT → /photolab5483; PREVIOUS → /photolab5481.
 */
export default function PhotoLab5482Page() {
  return (
    <PhotoLabSlidePage
      slideId={5482}
      title="Photo Lab - Industrial Area Set B - Slide 5482"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5482.jpg",
        width: 400,
        height: 267,
        alt: "Bell System Exhibit",
      }}
      captions={["Bell System Exhibit"]}
      previousHref="/photolab5481"
      nextHref="/photolab5483"
    />
  );
}
