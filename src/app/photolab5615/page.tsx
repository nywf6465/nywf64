import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5615 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5615 — Wax Museum — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5615 (legacy plab5615.html).
 * Nav bar shows Page 16. NEXT → /photolab5616; PREVIOUS → /photolab5614.
 */
export default function PhotoLab5615Page() {
  return (
    <PhotoLabSlidePage
      slideId={5615}
      title="Photo Lab - General Tour - Slide 5615"
      image={{
        src: "/images/photolab/5615.jpg",
        width: 400,
        height: 267,
        alt: "Wax Museum",
      }}
      captions={["Wax Museum"]}
      previousHref="/photolab5614"
      nextHref="/photolab5616"
    />
  );
}
