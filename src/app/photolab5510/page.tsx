import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5510 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5510 — Missouri Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5510 (legacy plab5510.html).
 * Nav bar shows Page 41. NEXT → /photolab5511; PREVIOUS → /photolab5509.
 */
export default function PhotoLab5510Page() {
  return (
    <PhotoLabSlidePage
      slideId={5510}
      title="Photo Lab - Federal and State Area - Slide 5510"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5510.jpg",
        width: 400,
        height: 269,
        alt: "Missouri Pavilion",
      }}
      captions={["Missouri Pavilion"]}
      previousHref="/photolab5509"
      nextHref="/photolab5511"
    />
  );
}
