import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5463 - RCA — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5463 — RCA — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5463 (legacy arch5463.html).
 * Nav bar shows Page 64. NEXT → /arch5464; PREVIOUS → /arch5462.
 */
export default function Arch5463Page() {
  return (
    <ArchSlidePage
      slideId={5463}
      title="Slide 5463 - RCA"
      image={{
        src: "/images/arch/5463Large.jpg",
        width: 400,
        height: 279,
        alt: "Radio Corporation of America — architect's rendering",
      }}
      captions={["Radio Corporation of America"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5462"
      nextHref="/arch5464"
    />
  );
}
