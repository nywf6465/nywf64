import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S303C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S303C — Masonic Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S303C (legacy plabS303C.html).
 * Nav bar shows Page 12. NEXT → /photolabS303D; PREVIOUS → /photolabS303B.
 */
export default function PhotoLabS303CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S303C"
      title="Photo Lab - Super Scenic Series - Slide S303C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S303C.jpg",
        width: 400,
        height: 400,
        alt: "Masonic Center",
      }}
      captions={["Masonic Center"]}
      previousHref="/photolabS303B"
      nextHref="/photolabS303D"
    />
  );
}
