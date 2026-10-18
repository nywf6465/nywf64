import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Federal and State Area - Slide 5505 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Federal and State Area slide 5505 — Aerial View — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5505 (legacy plab5505.html).
 * Nav bar shows Page 36. NEXT → /photolab5506; PREVIOUS → /photolab5504.
 */
export default function PhotoLab5505Page() {
  return (
    <PhotoLabSlidePage
      slideId={5505}
      title="Photo Lab - Federal and State Area - Slide 5505"
      setLabel="FEDERAL AND STATE AREA"
      image={{
        src: "/images/photolab/5505.jpg",
        width: 400,
        height: 270,
        alt: "Aerial View",
      }}
      captions={["Aerial View"]}
      previousHref="/photolab5504"
      nextHref="/photolab5506"
    />
  );
}
