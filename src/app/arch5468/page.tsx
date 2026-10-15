import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5468 - Socony-Mobil — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5468 — Socony-Mobil — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5468 (legacy arch5468.html).
 * Nav bar shows Page 69. NEXT → /arch5469; PREVIOUS → /arch5467.
 */
export default function Arch5468Page() {
  return (
    <ArchSlidePage
      slideId={5468}
      title="Slide 5468 - Socony-Mobil"
      image={{
        src: "/images/arch/5468Large.jpg",
        width: 400,
        height: 282,
        alt: "Socony-Mobil — architect's rendering",
      }}
      captions={["Socony - Mobil"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5467"
      nextHref="/arch5469"
    />
  );
}
