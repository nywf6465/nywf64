import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5457 - General Cigar — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5457 — General Cigar — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5457 (legacy arch5457.html).
 * Nav bar shows Page 58. NEXT → /arch5458; PREVIOUS → /arch5456.
 */
export default function Arch5457Page() {
  return (
    <ArchSlidePage
      slideId={5457}
      title="Slide 5457 - General Cigar"
      image={{
        src: "/images/arch/5457Large.jpg",
        width: 400,
        height: 280,
        alt: "General Cigar — architect's rendering",
      }}
      captions={["General Cigar"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET A"
      previousHref="/arch5456"
      nextHref="/arch5458"
    />
  );
}
