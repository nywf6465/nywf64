import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5409 - Heliport Cocktail Lounge — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5409 — Heliport Cocktail Lounge — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5409 (legacy arch5409.html).
 * Nav bar shows Page 10. NEXT → /arch5410; PREVIOUS → /arch5408.
 */
export default function Arch5409Page() {
  return (
    <ArchSlidePage
      slideId={5409}
      title="Slide 5409 - Heliport Cocktail Lounge"
      image={{
        src: "/images/arch/5409Large.jpg",
        width: 400,
        height: 276,
        alt: "Heliport Cocktail Lounge — architect's rendering",
      }}
      captions={["Heliport Cocktail Lounge"]}
      previousHref="/arch5408"
      nextHref="/arch5410"
    />
  );
}
