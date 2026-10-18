import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5533 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5533 — To The Moon — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5533 (legacy plab5533.html).
 * Nav bar shows Page 64. NEXT → /photolab5534; PREVIOUS → /photolab5532.
 */
export default function PhotoLab5533Page() {
  return (
    <PhotoLabSlidePage
      slideId={5533}
      title="Photo Lab - Transportation Area - Slide 5533"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5533.jpg",
        width: 400,
        height: 275,
        alt: "To The Moon",
      }}
      captions={["To The Moon"]}
      previousHref="/photolab5532"
      nextHref="/photolab5534"
    />
  );
}
