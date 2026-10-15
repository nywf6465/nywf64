import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5462 - Pepsi-Cola — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5462 — Pepsi-Cola — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5462 (legacy arch5462.html).
 * Nav bar shows Page 63. NEXT → /arch5463; PREVIOUS → /arch5461.
 */
export default function Arch5462Page() {
  return (
    <ArchSlidePage
      slideId={5462}
      title="Slide 5462 - Pepsi-Cola"
      image={{
        src: "/images/arch/5462Large.jpg",
        width: 400,
        height: 277,
        alt: "Pepsi-Cola — architect's rendering",
      }}
      captions={["Pepsi-Cola"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5461"
      nextHref="/arch5463"
    />
  );
}
