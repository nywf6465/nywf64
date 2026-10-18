import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5501 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5501 — Unisphere - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5501 (legacy plab5501.html).
 * Nav bar shows Page 32. NEXT → /photolab5502; PREVIOUS → /photolab5500.
 */
export default function PhotoLab5501Page() {
  return (
    <PhotoLabSlidePage
      slideId={5501}
      title="Photo Lab - Federal and State Area - Slide 5501"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5501.jpg",
        width: 400,
        height: 268,
        alt: "Unisphere - Night",
      }}
      captions={["Unisphere - Night"]}
      previousHref="/photolab5500"
      nextHref="/photolab5502"
    />
  );
}
