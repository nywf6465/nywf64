import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5453 - DuPont — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5453 — DuPont — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5453 (legacy arch5453.html).
 * Nav bar shows Page 54. NEXT → /arch5454; PREVIOUS → /arch5452.
 */
export default function Arch5453Page() {
  return (
    <ArchSlidePage
      slideId={5453}
      title="Slide 5453 - DuPont"
      image={{
        src: "/images/arch/5453Large.jpg",
        width: 400,
        height: 280,
        alt: "DuPont Pavilion — architect's rendering",
      }}
      captions={["DuPont Pavilion"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET A"
      previousHref="/arch5452"
      nextHref="/arch5454"
    />
  );
}
