import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S306C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S306C — Festival of Gas — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S306C (legacy plabS306C.html).
 * Nav bar shows Page 24. NEXT → /photolabS306D; PREVIOUS → /photolabS306B.
 */
export default function PhotoLabS306CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S306C"
      title="Photo Lab - Super Scenic Series - Slide S306C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S306C.jpg",
        width: 400,
        height: 400,
        alt: "Festival of Gas",
      }}
      captions={["Festival of Gas"]}
      previousHref="/photolabS306B"
      nextHref="/photolabS306D"
    />
  );
}
