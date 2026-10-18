import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5540 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5540 — SKF Industries — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5540 (legacy plab5540.html), published at /photolab55340.
 * Nav bar shows Page 71. NEXT → /photolab5471; PREVIOUS → /photolab5539.
 */
export default function PhotoLab55340Page() {
  return (
    <PhotoLabSlidePage
      slideId={5540}
      title="Photo Lab - Transportation Area - Slide 5540"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5540.jpg",
        width: 273,
        height: 400,
        alt: "SKF Industries",
      }}
      captions={["SKF\u00A0Industries"]}
      previousHref="/photolab5539"
      nextHref="/photolab5471"
    />
  );
}
