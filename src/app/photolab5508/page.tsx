import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5508 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5508 — Minnesota Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5508 (legacy plab5508.html).
 * Nav bar shows Page 39. NEXT → /photolab5509; PREVIOUS → /photolab5507.
 */
export default function PhotoLab5508Page() {
  return (
    <PhotoLabSlidePage
      slideId={5508}
      title="Photo Lab - Federal and State Area - Slide 5508"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5508.jpg",
        width: 400,
        height: 268,
        alt: "Minnesota Pavilion",
      }}
      captions={["Minnesota Pavilion"]}
      previousHref="/photolab5507"
      nextHref="/photolab5509"
    />
  );
}
