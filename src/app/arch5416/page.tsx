import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5416 - Festival of Gas Restaurant — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5416 — Festival of Gas Restaurant — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5416 (legacy arch5416.html).
 * Nav bar shows Page 17. NEXT → /arch5417; PREVIOUS → /arch5415.
 */
export default function Arch5416Page() {
  return (
    <ArchSlidePage
      slideId={5416}
      title="Slide 5416 - Festival of Gas Restaurant"
      image={{
        src: "/images/arch/5416Large.jpg",
        width: 400,
        height: 280,
        alt: "Festival of Gas Restaurant — architect's rendering",
      }}
      captions={["Festival of Gas Restaurant"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5415"
      nextHref="/arch5417"
    />
  );
}
