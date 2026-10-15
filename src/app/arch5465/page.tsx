import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5465 - Schaefer Brewing — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5465 — Schaefer Brewing — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5465 (legacy arch5465.html).
 * Nav bar shows Page 66. NEXT → /arch5466; PREVIOUS → /arch5464.
 */
export default function Arch5465Page() {
  return (
    <ArchSlidePage
      slideId={5465}
      title="Slide 5465 - Schaefer Brewing"
      image={{
        src: "/images/arch/5465Large.jpg",
        width: 400,
        height: 277,
        alt: "Schaefer Center — architect's rendering",
      }}
      captions={["Schaefer Center"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5464"
      nextHref="/arch5466"
    />
  );
}
