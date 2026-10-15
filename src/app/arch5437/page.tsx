import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5437 - Maryland — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5437 — Maryland — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5437 (legacy arch5437.html).
 * Nav bar shows Page 38. NEXT → /arch5438; PREVIOUS → /arch5436.
 */
export default function Arch5437Page() {
  return (
    <ArchSlidePage
      slideId={5437}
      title="Slide 5437 - Maryland"
      image={{
        src: "/images/arch/5437Large.jpg",
        width: 400,
        height: 282,
        alt: "Maryland — architect's rendering",
      }}
      captions={["Maryland"]}
      category="STATES"
      previousHref="/arch5436"
      nextHref="/arch5438"
    />
  );
}
