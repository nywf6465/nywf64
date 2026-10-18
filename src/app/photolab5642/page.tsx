import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5642 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5642 — “The Pieta” - Special Effect — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5642 (legacy plab5642.html).
 * Nav bar shows Page 43. NEXT → /photolab5643; PREVIOUS → /photolab5641.
 */
export default function PhotoLab5642Page() {
  return (
    <PhotoLabSlidePage
      slideId={5642}
      title="Photo Lab - General Tour - Slide 5642"
      image={{
        src: "/images/photolab/5642.jpg",
        width: 267,
        height: 400,
        alt: '"The Pieta" - Special Effect',
      }}
      captions={['"The Pieta" - Special Effect']}
      previousHref="/photolab5641"
      nextHref="/photolab5643"
    />
  );
}
