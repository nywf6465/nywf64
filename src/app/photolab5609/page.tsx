import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5609 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5609 — From N.Y. State Tower - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5609 (legacy plab5609.html).
 * Nav bar shows Page 10. NEXT → /photolab5610; PREVIOUS → /photolab5608.
 */
export default function PhotoLab5609Page() {
  return (
    <PhotoLabSlidePage
      slideId={5609}
      title="Photo Lab - General Tour - Slide 5609"
      image={{
        src: "/images/photolab/5609.jpg",
        width: 400,
        height: 267,
        alt: "From N.Y. State Tower - Night",
      }}
      captions={["From N.Y. State Tower - Night"]}
      previousHref="/photolab5608"
      nextHref="/photolab5610"
    />
  );
}
