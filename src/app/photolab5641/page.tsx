import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5641 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5641 — Vatican Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5641 (legacy plab5641.html).
 * Nav bar shows Page 42. NEXT → /photolab5642; PREVIOUS → /photolab5640.
 */
export default function PhotoLab5641Page() {
  return (
    <PhotoLabSlidePage
      slideId={5641}
      title="Photo Lab - General Tour - Slide 5641"
      image={{
        src: "/images/photolab/5641.jpg",
        width: 400,
        height: 267,
        alt: "Vatican Pavilion",
      }}
      captions={["Vatican Pavilion"]}
      previousHref="/photolab5640"
      nextHref="/photolab5642"
    />
  );
}
