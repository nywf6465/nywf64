import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S309C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S309C — Rheingold's Little Old New York — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S309C (legacy plabS309C.html).
 * Nav bar shows Page 36. NEXT → /photolabS309D; PREVIOUS → /photolabS309B.
 */
export default function PhotoLabS309CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S309C"
      title="Photo Lab - Super Scenic Series - Slide S309C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S309C.jpg",
        width: 400,
        height: 404,
        alt: "Rheingold's Little Old New York",
      }}
      captions={["Rheingold's Little Old New York"]}
      previousHref="/photolabS309B"
      nextHref="/photolabS309D"
    />
  );
}
