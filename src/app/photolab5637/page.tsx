import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5637 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5637 — Thailand Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5637 (legacy plab5637.html).
 * Nav bar shows Page 38. NEXT → /photolab5638; PREVIOUS → /photolab5636.
 */
export default function PhotoLab5637Page() {
  return (
    <PhotoLabSlidePage
      slideId={5637}
      title="Photo Lab - General Tour - Slide 5637"
      image={{
        src: "/images/photolab/5637.jpg",
        width: 267,
        height: 400,
        alt: "Thailand Pavilion",
      }}
      captions={["Thailand Pavilion"]}
      previousHref="/photolab5636"
      nextHref="/photolab5638"
    />
  );
}
