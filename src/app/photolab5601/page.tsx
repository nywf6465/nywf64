import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5601 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5601 — U. S. Pavilion - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5601 (legacy plab5601.html).
 * Nav bar shows Page 2. NEXT → /photolab5602; PREVIOUS → /photolabtray01.
 */
export default function PhotoLab5601Page() {
  return (
    <PhotoLabSlidePage
      slideId={5601}
      title="Photo Lab - General Tour - Slide 5601"
      image={{
        src: "/images/photolab/5601.jpg",
        width: 400,
        height: 267,
        alt: "U. S. Pavilion - Night",
      }}
      captions={["U. S. Pavilion - Night"]}
      previousHref="/photolabtray01"
      nextHref="/photolab5602"
    />
  );
}
