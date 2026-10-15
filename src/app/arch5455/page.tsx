import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5455 - Equitable Assurance — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5455 — Equitable Assurance — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5455 (legacy arch5455.html).
 * Nav bar shows Page 56. NEXT → /arch5456; PREVIOUS → /arch5454.
 */
export default function Arch5455Page() {
  return (
    <ArchSlidePage
      slideId={5455}
      title="Slide 5455 - Equitable Assurance"
      image={{
        src: "/images/arch/5455Large.jpg",
        width: 400,
        height: 287,
        alt: "Equitable Assurance — architect's rendering",
      }}
      captions={["Equitable Assurance"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET A"
      previousHref="/arch5454"
      nextHref="/arch5456"
    />
  );
}
