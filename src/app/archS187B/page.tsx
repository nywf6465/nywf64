import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S187-B - Mormon Church — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S187-B — Mormon Church — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S187-B (legacy archS187B.html).
 * Nav bar shows Page 101. NEXT → /archS187C; PREVIOUS → /archS187A.
 */
export default function ArchS187BPage() {
  return (
    <ArchSlidePage
      slideId="S187-B"
      titleId="archS187B-title"
      title="Slide S187-B - Mormon Church"
      image={{
        src: "/images/arch/S-187BLarge.jpg",
        width: 400,
        height: 391,
        alt: "The Church of Jesus Christ of the Latter Day Saints — architect's rendering",
      }}
      captions={[
        "The Church of Jesus Christ of the",
        "Latter Day Saints",
      ]}
      category={null}
      previousHref="/archS187A"
      nextHref="/archS187C"
    />
  );
}
