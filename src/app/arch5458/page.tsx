import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5458 - General Electric — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5458 — General Electric — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5458 (legacy arch5458.html).
 * Nav bar shows Page 59. NEXT → /arch5459; PREVIOUS → /arch5457.
 */
export default function Arch5458Page() {
  return (
    <ArchSlidePage
      slideId={5458}
      title="Slide 5458 - General Electric"
      image={{
        src: "/images/arch/5458Large.jpg",
        width: 400,
        height: 280,
        alt: "General Electric Progressland — architect's rendering",
      }}
      captions={["General Electric Progressland"]}
      category="INDUSTRIAL PARTICIPANTS"
      previousHref="/arch5457"
      nextHref="/arch5459"
    />
  );
}
