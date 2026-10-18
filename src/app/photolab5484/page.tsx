import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5484 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5484 — House of Good Taste — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5484 (legacy plab5484.html).
 * Nav bar shows Page 15. NEXT → /photolab5485; PREVIOUS → /photolab5483.
 */
export default function PhotoLab5484Page() {
  return (
    <PhotoLabSlidePage
      slideId={5484}
      title="Photo Lab - Industrial Area Set B - Slide 5484"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5484.jpg",
        width: 400,
        height: 267,
        alt: "House of Good Taste",
      }}
      captions={["House of Good Taste"]}
      previousHref="/photolab5483"
      nextHref="/photolab5485"
    />
  );
}
