import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5620 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5620 — AMF Monorail at Amusement Area — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5620 (legacy plab5620.html).
 * Nav bar shows Page 21. NEXT → /photolab5621; PREVIOUS → /photolab5619.
 */
export default function PhotoLab5620Page() {
  return (
    <PhotoLabSlidePage
      slideId={5620}
      title="Photo Lab - General Tour - Slide 5620"
      image={{
        src: "/images/photolab/5620.jpg",
        width: 267,
        height: 400,
        alt: "AMF Monorail at Amusement Area",
      }}
      captions={["AMF Monorail at Amusement Area"]}
      previousHref="/photolab5619"
      nextHref="/photolab5621"
    />
  );
}
