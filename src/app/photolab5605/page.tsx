import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5605 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5605 — Pavilion of Morocco Folk Dance — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5605 (legacy plab5605.html).
 * Nav bar shows Page 6. NEXT → /photolab5606; PREVIOUS → /photolab5604.
 */
export default function PhotoLab5605Page() {
  return (
    <PhotoLabSlidePage
      slideId={5605}
      title="Photo Lab - General Tour - Slide 5605"
      image={{
        src: "/images/photolab/5605.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of Morocco Folk Dance",
      }}
      captions={["Pavilion of Morocco Folk Dance"]}
      previousHref="/photolab5604"
      nextHref="/photolab5606"
    />
  );
}
