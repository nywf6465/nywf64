import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5646 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5646 — Alaska — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5646 (legacy plab5646.html).
 * Nav bar shows Page 47. NEXT → /photolab5647; PREVIOUS → /photolab5645.
 */
export default function PhotoLab5646Page() {
  return (
    <PhotoLabSlidePage
      slideId={5646}
      title="Photo Lab - General Tour - Slide 5646"
      image={{
        src: "/images/photolab/5646.jpg",
        width: 400,
        height: 267,
        alt: "Alaska",
      }}
      captions={["Alaska"]}
      previousHref="/photolab5645"
      nextHref="/photolab5647"
    />
  );
}
