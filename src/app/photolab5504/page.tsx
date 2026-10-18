import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5504 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5504 — Night View from New York State Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5504 (legacy plab5504.html).
 * Nav bar shows Page 35. NEXT → /photolab5505; PREVIOUS → /photolab5503.
 */
export default function PhotoLab5504Page() {
  return (
    <PhotoLabSlidePage
      slideId={5504}
      title="Photo Lab - Federal and State Area - Slide 5504"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5504.jpg",
        width: 400,
        height: 269,
        alt: "Night View from New York State Pavilion",
      }}
      captions={["Night View from New York State Pavilion"]}
      previousHref="/photolab5503"
      nextHref="/photolab5505"
    />
  );
}
