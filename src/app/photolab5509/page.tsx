import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5509 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5509 — West Virginia Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5509 (legacy plab5509.html).
 * Nav bar shows Page 40. NEXT → /photolab5510; PREVIOUS → /photolab5508.
 */
export default function PhotoLab5509Page() {
  return (
    <PhotoLabSlidePage
      slideId={5509}
      title="Photo Lab - Federal and State Area - Slide 5509"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5509.jpg",
        width: 400,
        height: 264,
        alt: "West Virginia Pavilion",
      }}
      captions={["West Virginia Pavilion"]}
      previousHref="/photolab5508"
      nextHref="/photolab5510"
    />
  );
}
