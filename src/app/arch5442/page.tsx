import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5442 - Mexico — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5442 — Mexico — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5442 (legacy arch5442.html).
 * Nav bar shows Page 43. NEXT → /arch5443; PREVIOUS → /arch5441.
 */
export default function Arch5442Page() {
  return (
    <ArchSlidePage
      slideId={5442}
      title="Slide 5442 - Mexico"
      image={{
        src: "/images/arch/5442Large.jpg",
        width: 400,
        height: 281,
        alt: "Mexico — architect's rendering",
      }}
      captions={["Mexico"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5441"
      nextHref="/arch5443"
    />
  );
}
