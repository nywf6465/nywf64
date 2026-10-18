import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5500 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5500 — Indonesia — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5500 (legacy plab5500.html).
 * Nav bar shows Page 31. NEXT → /photolab5501; PREVIOUS → /photolab5499.
 */
export default function PhotoLab5500Page() {
  return (
    <PhotoLabSlidePage
      slideId={5500}
      title="Photo Lab - International Area Set A - Slide 5500"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5500.jpg",
        width: 400,
        height: 267,
        alt: "Indonesia",
      }}
      captions={["Indonesia"]}
      previousHref="/photolab5499"
      nextHref="/photolab5501"
    />
  );
}
