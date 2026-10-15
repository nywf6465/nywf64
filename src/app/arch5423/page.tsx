import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5423 - Music Hall — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5423 — Music Hall — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5423 (legacy arch5423.html).
 * Nav bar shows Page 24. NEXT → /arch5424; PREVIOUS → /arch5422.
 */
export default function Arch5423Page() {
  return (
    <ArchSlidePage
      slideId={5423}
      title="Slide 5423 - Music Hall"
      image={{
        src: "/images/arch/5423Large.jpg",
        width: 400,
        height: 248,
        alt: "Music Hall — architect's rendering",
      }}
      captions={[
        "Music Hall",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5422"
      nextHref="/arch5424"
    />
  );
}
