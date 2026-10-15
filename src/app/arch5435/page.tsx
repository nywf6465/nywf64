import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5435 - West Virginia — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5435 — West Virginia — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5435 (legacy arch5435.html).
 * Nav bar shows Page 36. NEXT → /arch5436; PREVIOUS → /arch5434.
 */
export default function Arch5435Page() {
  return (
    <ArchSlidePage
      slideId={5435}
      title="Slide 5435 - West Virginia"
      image={{
        src: "/images/arch/5435Large.jpg",
        width: 400,
        height: 273,
        alt: "State of West Virginia — architect's rendering",
      }}
      captions={["State of West Virginia"]}
      category="STATES"
      previousHref="/arch5434"
      nextHref="/arch5436"
    />
  );
}
