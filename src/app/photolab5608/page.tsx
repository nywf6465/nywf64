import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5608 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5608 — Map of Oklahoma — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5608 (legacy plab5608.html).
 * Nav bar shows Page 9. NEXT → /photolab5609; PREVIOUS → /photolab5607.
 */
export default function PhotoLab5608Page() {
  return (
    <PhotoLabSlidePage
      slideId={5608}
      title="Photo Lab - General Tour - Slide 5608"
      image={{
        src: "/images/photolab/5608.jpg",
        width: 400,
        height: 267,
        alt: "Map of Oklahoma",
      }}
      captions={["Map of Oklahoma"]}
      previousHref="/photolab5607"
      nextHref="/photolab5609"
    />
  );
}
