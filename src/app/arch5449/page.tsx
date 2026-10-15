import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5449 - Pakistan — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5449 — Pakistan — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5449 (legacy arch5449.html).
 * Nav bar shows Page 50. NEXT → /arch5450; PREVIOUS → /arch5448.
 */
export default function Arch5449Page() {
  return (
    <ArchSlidePage
      slideId={5449}
      title="Slide 5449 - Pakistan"
      image={{
        src: "/images/arch/5449Large.jpg",
        width: 400,
        height: 276,
        alt: "Pakistan — architect's rendering",
      }}
      captions={["Pakistan"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5448"
      nextHref="/arch5450"
    />
  );
}
