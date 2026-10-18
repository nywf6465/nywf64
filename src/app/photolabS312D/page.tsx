import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S312D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S312D — New Jersey Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S312D (legacy plabS312D.html).
 * Nav bar shows Page 49. NEXT → /photolabS313A; PREVIOUS → /photolabS312C.
 */
export default function PhotoLabS312DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S312D"
      title="Photo Lab - Super Scenic Series - Slide S312D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S312D.jpg",
        width: 400,
        height: 410,
        alt: "New Jersey Pavilion",
      }}
      captions={["New Jersey Pavilion"]}
      previousHref="/photolabS312C"
      nextHref="/photolabS313A"
    />
  );
}
