import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S305B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S305B — Main Entrance Gate — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S305B (legacy plabS305B.html).
 * Nav bar shows Page 19. NEXT → /photolabS305C; PREVIOUS → /photolabS305A.
 */
export default function PhotoLabS305BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S305B"
      title="Photo Lab - Super Scenic Series - Slide S305B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S305B.jpg",
        width: 400,
        height: 393,
        alt: "Main Entrance Gate",
      }}
      captions={["Main Entrance Gate"]}
      previousHref="/photolabS305A"
      nextHref="/photolabS305C"
    />
  );
}
