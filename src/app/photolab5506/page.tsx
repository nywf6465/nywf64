import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5506 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5506 — Illinois Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5506 (legacy plab5506.html).
 * Nav bar shows Page 37. NEXT → /photolab5507; PREVIOUS → /photolab5505.
 */
export default function PhotoLab5506Page() {
  return (
    <PhotoLabSlidePage
      slideId={5506}
      title="Photo Lab - Federal and State Area - Slide 5506"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5506.jpg",
        width: 400,
        height: 268,
        alt: "Illinois Pavilion",
      }}
      captions={["Illinois Pavilion"]}
      previousHref="/photolab5505"
      nextHref="/photolab5507"
    />
  );
}
