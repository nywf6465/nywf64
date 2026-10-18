import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S313B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S313B — Panorama from New York Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S313B (legacy plabS313B.html).
 * Nav bar shows Page 51. NEXT → /photolabS313C; PREVIOUS → /photolabS313A.
 */
export default function PhotoLabS313BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S313B"
      title="Photo Lab - Super Scenic Series - Slide S313B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S313B.jpg",
        width: 400,
        height: 412,
        alt: "Panorama from New York Pavilion",
      }}
      captions={["Panorama from New York Pavilion"]}
      previousHref="/photolabS313A"
      nextHref="/photolabS313C"
    />
  );
}
