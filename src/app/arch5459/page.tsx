import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5459 - IBM — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5459 — IBM — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5459 (legacy arch5459.html).
 * Nav bar shows Page 60. NEXT → /arch5460; PREVIOUS → /arch5458.
 */
export default function Arch5459Page() {
  return (
    <ArchSlidePage
      slideId={5459}
      title="Slide 5459 - IBM"
      image={{
        src: "/images/arch/5459Large.jpg",
        width: 400,
        height: 279,
        alt: "International Business Machines — architect's rendering",
      }}
      captions={["International Business Machines"]}
      category="INDUSTRIAL PARTICIPANTS"
      previousHref="/arch5458"
      nextHref="/arch5460"
    />
  );
}
