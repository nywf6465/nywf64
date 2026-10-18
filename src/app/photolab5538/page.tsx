import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5538 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5538 — Gemini Space Capsule — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5538 (legacy plab5538.html).
 * Nav bar shows Page 69. NEXT → /photolab5539; PREVIOUS → /photolab5537.
 */
export default function PhotoLab5538Page() {
  return (
    <PhotoLabSlidePage
      slideId={5538}
      title="Photo Lab - Transportation Area - Slide 5538"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5538.jpg",
        width: 400,
        height: 268,
        alt: "Gemini Space Capsule",
      }}
      captions={["Gemini Space Capsule"]}
      previousHref="/photolab5537"
      nextHref="/photolab5539"
    />
  );
}
