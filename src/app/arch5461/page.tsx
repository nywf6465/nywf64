import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5461 - Parker Pen — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5461 — Parker Pen — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5461 (legacy arch5461.html).
 * Nav bar shows Page 62. NEXT → /arch5462; PREVIOUS → /arch5460.
 */
export default function Arch5461Page() {
  return (
    <ArchSlidePage
      slideId={5461}
      title="Slide 5461 - Parker Pen"
      image={{
        src: "/images/arch/5461Large.jpg",
        width: 400,
        height: 280,
        alt: "Parker Pen Pavilion — architect's rendering",
      }}
      captions={["Parker Pen Pavilion"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5460"
      nextHref="/arch5462"
    />
  );
}
