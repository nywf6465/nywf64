import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5607 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5607 — American-Israel Pavilion Folk Dance — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5607 (legacy plab5607.html).
 * Nav bar shows Page 8. NEXT → /photolab5608; PREVIOUS → /photolab5606.
 */
export default function PhotoLab5607Page() {
  return (
    <PhotoLabSlidePage
      slideId={5607}
      title="Photo Lab - General Tour - Slide 5607"
      image={{
        src: "/images/photolab/5607.jpg",
        width: 400,
        height: 267,
        alt: "American-Israel Pavilion Folk Dance",
      }}
      captions={["American-Israel Pavilion Folk Dance"]}
      previousHref="/photolab5606"
      nextHref="/photolab5608"
    />
  );
}
