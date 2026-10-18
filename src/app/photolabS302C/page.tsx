import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S302C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S302C — Coca-Cola - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S302C (legacy plabS302C.html).
 * Nav bar shows Page 8. NEXT → /photolabS302D; PREVIOUS → /photolabS302B.
 */
export default function PhotoLabS302CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S302C"
      title="Photo Lab - Super Scenic Series - Slide S302C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S302C.jpg",
        width: 400,
        height: 400,
        alt: "Coca-Cola - Night",
      }}
      captions={["Coca-Cola - Night"]}
      previousHref="/photolabS302B"
      nextHref="/photolabS302D"
    />
  );
}
