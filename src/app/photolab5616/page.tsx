import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5616 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5616 — Bell System — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5616 (legacy plab5616.html).
 * Nav bar shows Page 17. NEXT → /photolab5617; PREVIOUS → /photolab5615.
 */
export default function PhotoLab5616Page() {
  return (
    <PhotoLabSlidePage
      slideId={5616}
      title="Photo Lab - General Tour - Slide 5616"
      image={{
        src: "/images/photolab/5616.jpg",
        width: 400,
        height: 267,
        alt: "Bell System",
      }}
      captions={["Bell System"]}
      previousHref="/photolab5615"
      nextHref="/photolab5617"
    />
  );
}
