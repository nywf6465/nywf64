import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5451 - Coca-Cola — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5451 — Coca-Cola — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5451 (legacy arch5451.html).
 * Nav bar shows Page 52. NEXT → /arch5452; PREVIOUS → /arch5450.
 */
export default function Arch5451Page() {
  return (
    <ArchSlidePage
      slideId={5451}
      title="Slide 5451 - Coca-Cola"
      image={{
        src: "/images/arch/5451Large.jpg",
        width: 400,
        height: 278,
        alt: "Coca-Cola — architect's rendering",
      }}
      captions={["Coca-Cola"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET A"
      previousHref="/arch5450"
      nextHref="/arch5452"
    />
  );
}
