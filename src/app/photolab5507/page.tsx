import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5507 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5507 — United States Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5507 (legacy plab5507.html).
 * Nav bar shows Page 38. NEXT → /photolab5508; PREVIOUS → /photolab5506.
 */
export default function PhotoLab5507Page() {
  return (
    <PhotoLabSlidePage
      slideId={5507}
      title="Photo Lab - Federal and State Area - Slide 5507"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5507.jpg",
        width: 400,
        height: 268,
        alt: "United States Pavilion",
      }}
      captions={["United States Pavilion"]}
      previousHref="/photolab5506"
      nextHref="/photolab5508"
    />
  );
}
