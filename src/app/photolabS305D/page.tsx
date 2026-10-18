import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S305D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S305D — New York State Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S305D (legacy plabS305D.html).
 * Nav bar shows Page 21. NEXT → /photolabS306A; PREVIOUS → /photolabS305C.
 */
export default function PhotoLabS305DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S305D"
      title="Photo Lab - Super Scenic Series - Slide S305D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S305D.jpg",
        width: 400,
        height: 400,
        alt: "New York State Pavilion",
      }}
      captions={["New York State Pavilion"]}
      previousHref="/photolabS305C"
      nextHref="/photolabS306A"
    />
  );
}
