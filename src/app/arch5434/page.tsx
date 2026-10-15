import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5434 - New Jersey — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5434 — New Jersey — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5434 (legacy arch5434.html).
 * Nav bar shows Page 35. NEXT → /arch5435; PREVIOUS → /arch5433.
 */
export default function Arch5434Page() {
  return (
    <ArchSlidePage
      slideId={5434}
      title="Slide 5434 - New Jersey"
      image={{
        src: "/images/arch/5434Large.jpg",
        width: 400,
        height: 281,
        alt: "New Jersey — architect's rendering",
      }}
      captions={["New Jersey"]}
      category="STATES"
      previousHref="/arch5433"
      nextHref="/arch5435"
    />
  );
}
