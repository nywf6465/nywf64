import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S308C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S308C — Thailand — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S308C (legacy plabS308C.html).
 * Nav bar shows Page 32. NEXT → /photolabS308D; PREVIOUS → /photolabS308B.
 */
export default function PhotoLabS308CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S308C"
      title="Photo Lab - Super Scenic Series - Slide S308C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S308C.jpg",
        width: 400,
        height: 406,
        alt: "Thailand",
      }}
      captions={["Thailand"]}
      previousHref="/photolabS308B"
      nextHref="/photolabS308D"
    />
  );
}
