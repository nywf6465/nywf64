import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5440 - Missouri — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5440 — Missouri — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5440 (legacy arch5440.html).
 * Nav bar shows Page 41. NEXT → /arch5441; PREVIOUS → /arch5439.
 */
export default function Arch5440Page() {
  return (
    <ArchSlidePage
      slideId={5440}
      title="Slide 5440 - Missouri"
      image={{
        src: "/images/arch/5440Large.jpg",
        width: 400,
        height: 279,
        alt: "Missouri — architect's rendering",
      }}
      captions={["Missouri"]}
      category="STATES"
      previousHref="/arch5439"
      nextHref="/arch5441"
    />
  );
}
