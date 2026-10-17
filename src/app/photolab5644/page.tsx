import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5644 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5644 — New York State Towers - Evening — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5644 (legacy plab5644.html).
 * Nav bar shows Page 45. NEXT → /photolab5645; PREVIOUS → /photolab5643.
 */
export default function PhotoLab5644Page() {
  return (
    <PhotoLabSlidePage
      slideId={5644}
      title="Photo Lab - General Tour - Slide 5644"
      image={{
        src: "/images/photolab/5644.jpg",
        width: 266,
        height: 400,
        alt: "New York State Towers - Evening",
      }}
      captions={["New York State Towers - Evening"]}
      previousHref="/photolab5643"
      nextHref="/photolab5645"
    />
  );
}
