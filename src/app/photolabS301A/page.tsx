import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S301A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S301A — Port of New York Authority Heliport — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S301A (legacy plabS301A.html).
 * Nav bar shows Page 2. NEXT → /photolabS301B; PREVIOUS → /photolabtray03.
 */
export default function PhotoLabS301APage() {
  return (
    <PhotoLabSlidePage
      slideId="S301A"
      title="Photo Lab - Super Scenic Series - Slide S301A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S301A.jpg",
        width: 400,
        height: 400,
        alt: "Port of New York Authority Heliport",
      }}
      captions={["Port of New York Authority Heliport"]}
      previousHref="/photolabtray03"
      nextHref="/photolabS301B"
    />
  );
}
