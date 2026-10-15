import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5405 - Solar Fountain - Day — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5405 — Solar Fountain - Day — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5405 (legacy arch5405.html).
 * Nav bar shows Page 6. NEXT → /arch5406; PREVIOUS → /arch5404.
 */
export default function Arch5405Page() {
  return (
    <ArchSlidePage
      slideId={5405}
      title="Slide 5405 - Solar Fountain - Day"
      image={{
        src: "/images/arch/5405Large.jpg",
        width: 400,
        height: 274,
        alt: "Solar Fountain - Day — architect's rendering",
      }}
      captions={["Solar Fountain - Day"]}
      previousHref="/arch5404"
      nextHref="/arch5406"
    />
  );
}
