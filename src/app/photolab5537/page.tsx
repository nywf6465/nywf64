import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5537 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5537 — Space Park Robot — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5537 (legacy plab5537.html).
 * Nav bar shows Page 68. NEXT → /photolab5538; PREVIOUS → /photolab5536.
 */
export default function PhotoLab5537Page() {
  return (
    <PhotoLabSlidePage
      slideId={5537}
      title="Photo Lab - Transportation Area - Slide 5537"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5537.jpg",
        width: 270,
        height: 400,
        alt: "Space Park Robot",
      }}
      captions={["Space Park Robot"]}
      previousHref="/photolab5536"
      nextHref="/photolab5538"
    />
  );
}
