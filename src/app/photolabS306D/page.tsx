import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S306D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S306D — DuPont Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S306D (legacy plabS306D.html).
 * Nav bar shows Page 25. NEXT → /photolabS307A; PREVIOUS → /photolabS306C.
 */
export default function PhotoLabS306DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S306D"
      title="Photo Lab - Super Scenic Series - Slide S306D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S306D.jpg",
        width: 400,
        height: 395,
        alt: "DuPont Exhibit",
      }}
      captions={["DuPont Exhibit"]}
      previousHref="/photolabS306C"
      nextHref="/photolabS307A"
    />
  );
}
