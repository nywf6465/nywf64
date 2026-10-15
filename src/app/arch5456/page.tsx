import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5456 - Ford Motor Company — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5456 — Ford Motor Company — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5456 (legacy arch5456.html).
 * Nav bar shows Page 57. NEXT → /arch5457; PREVIOUS → /arch5455.
 */
export default function Arch5456Page() {
  return (
    <ArchSlidePage
      slideId={5456}
      title="Slide 5456 - Ford Motor Company"
      image={{
        src: "/images/arch/5456Large.jpg",
        width: 400,
        height: 273,
        alt: "Ford Motor Company — architect's rendering",
      }}
      captions={["Ford Motor Company"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET A"
      previousHref="/arch5455"
      nextHref="/arch5457"
    />
  );
}
