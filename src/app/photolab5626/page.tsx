import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5626 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5626 — Fountain of the Planets — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5626 (legacy plab5626.html).
 * Nav bar shows Page 27. NEXT → /photolab5627; PREVIOUS → /photolab5625.
 */
export default function PhotoLab5626Page() {
  return (
    <PhotoLabSlidePage
      slideId={5626}
      title="Photo Lab - General Tour - Slide 5626"
      image={{
        src: "/images/photolab/5626.jpg",
        width: 400,
        height: 267,
        alt: "Fountain of the Planets",
      }}
      captions={["Fountain of the Planets"]}
      previousHref="/photolab5625"
      nextHref="/photolab5627"
    />
  );
}
