import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5426 - Hall of Free Enterprise — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5426 — Hall of Free Enterprise — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5426 (legacy arch5426.html).
 * Nav bar shows Page 27. NEXT → /arch5427; PREVIOUS → /arch5425.
 */
export default function Arch5426Page() {
  return (
    <ArchSlidePage
      slideId={5426}
      title="Slide 5426 - Hall of Free Enterprise"
      image={{
        src: "/images/arch/5426Large.jpg",
        width: 400,
        height: 279,
        alt: "Hall of Free Enterprise — architect's rendering",
      }}
      captions={[
        "Hall of Free Enterprise",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5425"
      nextHref="/arch5427"
    />
  );
}
