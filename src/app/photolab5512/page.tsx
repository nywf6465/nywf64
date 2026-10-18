import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5512 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5512 — Vatican Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5512 (legacy plab5512.html).
 * Nav bar shows Page 43. NEXT → /photolab5513; PREVIOUS → /photolab5511.
 */
export default function PhotoLab5512Page() {
  return (
    <PhotoLabSlidePage
      slideId={5512}
      title="Photo Lab - International Area Set B - Slide 5512"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5512.jpg",
        width: 400,
        height: 275,
        alt: "Vatican Pavilion",
      }}
      captions={["Vatican Pavilion"]}
      previousHref="/photolab5511"
      nextHref="/photolab5513"
    />
  );
}
