import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S312C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S312C — Pavilion of Spain — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S312C (legacy plabS312C.html).
 * Nav bar shows Page 48. NEXT → /photolabS312D; PREVIOUS → /photolabS312B.
 */
export default function PhotoLabS312CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S312C"
      title="Photo Lab - Super Scenic Series - Slide S312C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S312C.jpg",
        width: 400,
        height: 398,
        alt: "Pavilion of Spain",
      }}
      captions={["Pavilion of Spain"]}
      previousHref="/photolabS312B"
      nextHref="/photolabS312D"
    />
  );
}
