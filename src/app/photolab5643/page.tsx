import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5643 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5643 — Unisphere Evening — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5643 (legacy plab5643.html).
 * Nav bar shows Page 44. NEXT → /photolab5644; PREVIOUS → /photolab5642.
 */
export default function PhotoLab5643Page() {
  return (
    <PhotoLabSlidePage
      slideId={5643}
      title="Photo Lab - General Tour - Slide 5643"
      image={{
        src: "/images/photolab/5643.jpg",
        width: 400,
        height: 267,
        alt: "Unisphere Evening",
      }}
      captions={["Unisphere Evening"]}
      previousHref="/photolab5642"
      nextHref="/photolab5644"
    />
  );
}
