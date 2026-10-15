import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5424 - Mutiny on the Bounty — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5424 — Mutiny on the Bounty — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5424 (legacy arch5424.html).
 * Nav bar shows Page 25. NEXT → /arch5425; PREVIOUS → /arch5423.
 */
export default function Arch5424Page() {
  return (
    <ArchSlidePage
      slideId={5424}
      title="Slide 5424 - Mutiny on the Bounty"
      image={{
        src: "/images/arch/5424Large.jpg",
        width: 400,
        height: 278,
        alt: "Mutiny on the Bounty — architect's rendering",
      }}
      captions={[
        "Mutiny on the Bounty",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5423"
      nextHref="/arch5425"
    />
  );
}
