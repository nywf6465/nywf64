import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5464 - Rheingold — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5464 — Rheingold — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5464 (legacy arch5464.html).
 * Nav bar shows Page 65. NEXT → /arch5465; PREVIOUS → /arch5463.
 */
export default function Arch5464Page() {
  return (
    <ArchSlidePage
      slideId={5464}
      title="Slide 5464 - Rheingold"
      image={{
        src: "/images/arch/5464Large.jpg",
        width: 400,
        height: 279,
        alt: "Rheingold's Little Old New York — architect's rendering",
      }}
      captions={["Rheingold's Little Old New York"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5463"
      nextHref="/arch5465"
    />
  );
}
