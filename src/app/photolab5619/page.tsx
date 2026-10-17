import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5619 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5619 — Maryland Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5619 (legacy plab5619.html).
 * Nav bar shows Page 20. NEXT → /photolab5620; PREVIOUS → /photolab5618.
 */
export default function PhotoLab5619Page() {
  return (
    <PhotoLabSlidePage
      slideId={5619}
      title="Photo Lab - General Tour - Slide 5619"
      image={{
        src: "/images/photolab/5619.jpg",
        width: 400,
        height: 267,
        alt: "Maryland Pavilion",
      }}
      captions={["Maryland Pavilion"]}
      previousHref="/photolab5618"
      nextHref="/photolab5620"
    />
  );
}
