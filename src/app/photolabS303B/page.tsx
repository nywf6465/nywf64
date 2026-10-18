import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S303B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S303B — Brass Rail & Johnson’s Wax — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S303B (legacy plabS303B.html).
 * Nav bar shows Page 11. NEXT → /photolabS303C; PREVIOUS → /photolabS303A.
 */
export default function PhotoLabS303BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S303B"
      title="Photo Lab - Super Scenic Series - Slide S303B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S303B.jpg",
        width: 400,
        height: 382,
        alt: "Brass Rail & Johnson's Wax",
      }}
      captions={["Brass Rail & Johnson's Wax"]}
      previousHref="/photolabS303A"
      nextHref="/photolabS303C"
    />
  );
}
