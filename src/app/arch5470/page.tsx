import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5470 - Sinclair Service Station — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5470 — Sinclair Service Station — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5470 (legacy arch5470.html).
 * Nav bar shows Page 71. NEXT → /archS180A; PREVIOUS → /arch5469.
 */
export default function Arch5470Page() {
  return (
    <ArchSlidePage
      slideId={5470}
      title="Slide 5470 - Sinclair Service Station"
      image={{
        src: "/images/arch/5470Large.jpg",
        width: 400,
        height: 288,
        alt: "Sinclair Service Station — architect's rendering",
      }}
      captions={["Sinclair Service Station"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5469"
      nextHref="/archS180A"
    />
  );
}
