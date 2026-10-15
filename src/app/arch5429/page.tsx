import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5429 - Transportation & Travel — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5429 — Transportation & Travel — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5429 (legacy arch5429.html).
 * Nav bar shows Page 30. NEXT → /arch5430; PREVIOUS → /arch5428.
 */
export default function Arch5429Page() {
  return (
    <ArchSlidePage
      slideId={5429}
      title="Slide 5429 - Transportation & Travel"
      image={{
        src: "/images/arch/5429Large.jpg",
        width: 400,
        height: 277,
        alt: "Transportation & Travel — architect's rendering",
      }}
      captions={[
        "Transportation & Travel",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5428"
      nextHref="/arch5430"
    />
  );
}
