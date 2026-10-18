import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5539 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5539 — Transportation and Travel — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5539 (legacy plab5539.html).
 * Nav bar shows Page 70. NEXT → /photolab5540; PREVIOUS → /photolab5538.
 */
export default function PhotoLab5539Page() {
  return (
    <PhotoLabSlidePage
      slideId={5539}
      title="Photo Lab - Transportation Area - Slide 5539"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5539.jpg",
        width: 400,
        height: 267,
        alt: "Transportation and Travel",
      }}
      captions={["Transportation and Travel"]}
      previousHref="/photolab5538"
      nextHref="/photolab5540"
    />
  );
}
