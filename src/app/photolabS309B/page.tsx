import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S309B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S309B — Dynamic Maturity — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S309B (legacy plabS309B.html).
 * Nav bar shows Page 35. NEXT → /photolabS309C; PREVIOUS → /photolabS309A.
 */
export default function PhotoLabS309BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S309B"
      title="Photo Lab - Super Scenic Series - Slide S309B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S309B.jpg",
        width: 400,
        height: 400,
        alt: "Dynamic Maturity",
      }}
      captions={["Dynamic Maturity"]}
      previousHref="/photolabS309A"
      nextHref="/photolabS309C"
    />
  );
}
