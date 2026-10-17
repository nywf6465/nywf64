import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5613 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5613 — G.E., Tower of Light & Johnson’s Wax Reflections — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5613 (legacy plab5613.html).
 * Nav bar shows Page 14. NEXT → /photolab5614; PREVIOUS → /photolab5612.
 */
export default function PhotoLab5613Page() {
  return (
    <PhotoLabSlidePage
      slideId={5613}
      title="Photo Lab - General Tour - Slide 5613"
      image={{
        src: "/images/photolab/5613.jpg",
        width: 400,
        height: 267,
        alt: "G.E., Tower of Light & Johnson's Wax Reflections",
      }}
      captions={["G.E., Tower of Light & Johnson's Wax Reflections"]}
      previousHref="/photolab5612"
      nextHref="/photolab5614"
    />
  );
}
