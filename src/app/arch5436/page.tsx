import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5436 - Florida — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5436 — Florida — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5436 (legacy arch5436.html).
 * Nav bar shows Page 37. NEXT → /arch5437; PREVIOUS → /arch5435.
 */
export default function Arch5436Page() {
  return (
    <ArchSlidePage
      slideId={5436}
      title="Slide 5436 - Florida"
      image={{
        src: "/images/arch/5436Large.jpg",
        width: 400,
        height: 280,
        alt: "Florida — architect's rendering",
      }}
      captions={["Florida"]}
      category="STATES"
      previousHref="/arch5435"
      nextHref="/arch5437"
    />
  );
}
