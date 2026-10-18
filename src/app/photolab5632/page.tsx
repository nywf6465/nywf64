import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5632 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5632 — West Virginia - Glass Craftsman — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5632 (legacy plab5632.html).
 * Nav bar shows Page 33. NEXT → /photolab5633; PREVIOUS → /photolab5631.
 */
export default function PhotoLab5632Page() {
  return (
    <PhotoLabSlidePage
      slideId={5632}
      title="Photo Lab - General Tour - Slide 5632"
      image={{
        src: "/images/photolab/5632.jpg",
        width: 267,
        height: 400,
        alt: "West Virginia - Glass Craftsman",
      }}
      captions={["West Virginia - Glass Craftsman"]}
      previousHref="/photolab5631"
      nextHref="/photolab5633"
    />
  );
}
