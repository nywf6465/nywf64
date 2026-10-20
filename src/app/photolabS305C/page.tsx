import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S305C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S305C — Pepsi-Cola — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S305C (legacy plabS305C.html).
 * Nav bar shows Page 20. NEXT → /photolabS305D; PREVIOUS → /photolabS305B.
 */
export default function PhotoLabS305CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S305C"
      title="Photo Lab - Super Scenic Series - Slide S305C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S305C.jpg",
        width: 400,
        height: 400,
        alt: "Pepsi-Cola",
      }}
      captions={["Pepsi-Cola"]}
      previousHref="/photolabS305B"
      nextHref="/photolabS305D"
    />
  );
}
