import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5502 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5502 — Hollywood - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5502 (legacy plab5502.html).
 * Nav bar shows Page 33. NEXT → /photolab5503; PREVIOUS → /photolab5501.
 */
export default function PhotoLab5502Page() {
  return (
    <PhotoLabSlidePage
      slideId={5502}
      title="Photo Lab - Federal and State Area - Slide 5502"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5502.jpg",
        width: 263,
        height: 400,
        alt: "Hollywood - Night",
      }}
      captions={["Hollywood - Night"]}
      previousHref="/photolab5501"
      nextHref="/photolab5503"
    />
  );
}
