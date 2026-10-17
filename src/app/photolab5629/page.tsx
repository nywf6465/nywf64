import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5629 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5629 — Mormon Pavilion Sermon On The Mount — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5629 (legacy plab5629.html).
 * Nav bar shows Page 30. NEXT → /photolab5630; PREVIOUS → /photolab5628.
 */
export default function PhotoLab5629Page() {
  return (
    <PhotoLabSlidePage
      slideId={5629}
      title="Photo Lab - General Tour - Slide 5629"
      image={{
        src: "/images/photolab/5629.jpg",
        width: 400,
        height: 267,
        alt: "Mormon Pavilion Sermon On The Mount",
      }}
      captions={["Mormon Pavilion Sermon On The Mount"]}
      previousHref="/photolab5628"
      nextHref="/photolab5630"
    />
  );
}
