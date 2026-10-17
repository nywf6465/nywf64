import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5617 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5617 — Mexican Pavilion Ceremonial Dance — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5617 (legacy plab5617.html).
 * Nav bar shows Page 18. NEXT → /photolab5618; PREVIOUS → /photolab5616.
 */
export default function PhotoLab5617Page() {
  return (
    <PhotoLabSlidePage
      slideId={5617}
      title="Photo Lab - General Tour - Slide 5617"
      image={{
        src: "/images/photolab/5617.jpg",
        width: 267,
        height: 400,
        alt: "Mexican Pavilion Ceremonial Dance",
      }}
      captions={["Mexican Pavilion Ceremonial Dance"]}
      previousHref="/photolab5616"
      nextHref="/photolab5618"
    />
  );
}
