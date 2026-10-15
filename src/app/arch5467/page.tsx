import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5467 - Formica — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5467 — Formica — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5467 (legacy arch5467.html).
 * Nav bar shows Page 68. NEXT → /arch5468; PREVIOUS → /arch5466.
 */
export default function Arch5467Page() {
  return (
    <ArchSlidePage
      slideId={5467}
      title="Slide 5467 - Formica"
      image={{
        src: "/images/arch/5467Large.jpg",
        width: 400,
        height: 290,
        alt: "Formica Exhibit — architect's rendering",
      }}
      captions={["Formica Exhibit"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5466"
      nextHref="/arch5468"
    />
  );
}
