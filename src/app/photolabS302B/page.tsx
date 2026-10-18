import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S302B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S302B — Johnson’s Wax — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S302B (legacy plabS302B.html).
 * Nav bar shows Page 7. NEXT → /photolabS302C; PREVIOUS → /photolabS302A.
 */
export default function PhotoLabS302BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S302B"
      title="Photo Lab - Super Scenic Series - Slide S302B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S302B.jpg",
        width: 400,
        height: 400,
        alt: "Johnson's Wax",
      }}
      captions={["Johnson's Wax"]}
      previousHref="/photolabS302A"
      nextHref="/photolabS302C"
    />
  );
}
