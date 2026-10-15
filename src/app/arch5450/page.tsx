import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5450 - Guinea — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5450 — Guinea — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5450 (legacy arch5450.html).
 * Nav bar shows Page 51. NEXT → /arch5451; PREVIOUS → /arch5449.
 */
export default function Arch5450Page() {
  return (
    <ArchSlidePage
      slideId={5450}
      title="Slide 5450 - Guinea"
      image={{
        src: "/images/arch/5450Large.jpg",
        width: 400,
        height: 277,
        alt: "Guinea — architect's rendering",
      }}
      captions={["Guinea"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5449"
      nextHref="/arch5451"
    />
  );
}
