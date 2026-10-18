import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5503 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5503 — New York State Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5503 (legacy plab5503.html).
 * Nav bar shows Page 34. NEXT → /photolab5504; PREVIOUS → /photolab5502.
 */
export default function PhotoLab5503Page() {
  return (
    <PhotoLabSlidePage
      slideId={5503}
      title="Photo Lab - Federal and State Area - Slide 5503"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5503.jpg",
        width: 400,
        height: 270,
        alt: "New York State Pavilion",
      }}
      captions={["New York State Pavilion"]}
      previousHref="/photolab5502"
      nextHref="/photolab5504"
    />
  );
}
