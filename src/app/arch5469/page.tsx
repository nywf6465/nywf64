import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5469 - Simmons — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5469 — Simmons — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5469 (legacy arch5469.html).
 * Nav bar shows Page 70. NEXT → /arch5470; PREVIOUS → /arch5468.
 */
export default function Arch5469Page() {
  return (
    <ArchSlidePage
      slideId={5469}
      title="Slide 5469 - Simmons"
      image={{
        src: "/images/arch/5469Large.jpg",
        width: 400,
        height: 277,
        alt: "Simmons Beautyrest Center — architect's rendering",
      }}
      captions={["Simmons Beautyrest Center"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5468"
      nextHref="/arch5470"
    />
  );
}
