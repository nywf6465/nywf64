import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5645 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5645 — General Motors - Evening — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5645 (legacy plab5645.html).
 * Nav bar shows Page 46. NEXT → /photolab5646; PREVIOUS → /photolab5644.
 */
export default function PhotoLab5645Page() {
  return (
    <PhotoLabSlidePage
      slideId={5645}
      title="Photo Lab - General Tour - Slide 5645"
      image={{
        src: "/images/photolab/5645.jpg",
        width: 400,
        height: 266,
        alt: "General Motors - Evening",
      }}
      captions={["General Motors - Evening"]}
      previousHref="/photolab5644"
      nextHref="/photolab5646"
    />
  );
}
