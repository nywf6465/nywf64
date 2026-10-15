import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5430 - International Plaza — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5430 — International Plaza — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5430 (legacy arch5430.html).
 * Nav bar shows Page 31. NEXT → /arch5431; PREVIOUS → /arch5429.
 */
export default function Arch5430Page() {
  return (
    <ArchSlidePage
      slideId={5430}
      title="Slide 5430 - International Plaza"
      image={{
        src: "/images/arch/5430Large.jpg",
        width: 400,
        height: 273,
        alt: "International Plaza — architect's rendering",
      }}
      captions={[
        "International Plaza",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5429"
      nextHref="/arch5431"
    />
  );
}
