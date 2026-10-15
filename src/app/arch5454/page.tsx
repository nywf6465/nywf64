import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5454 - Eastman Kodak — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5454 — Eastman Kodak — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5454 (legacy arch5454.html).
 * Nav bar shows Page 55. NEXT → /arch5455; PREVIOUS → /arch5453.
 */
export default function Arch5454Page() {
  return (
    <ArchSlidePage
      slideId={5454}
      title="Slide 5454 - Eastman Kodak"
      image={{
        src: "/images/arch/5454Large.jpg",
        width: 400,
        height: 268,
        alt: "Eastman Kodak Exhibit — architect's rendering",
      }}
      captions={["Eastman Kodak Exhibit"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET A"
      previousHref="/arch5453"
      nextHref="/arch5455"
    />
  );
}
