import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5428 - Singer Bowl — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5428 — Singer Bowl — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5428 (legacy arch5428.html).
 * Nav bar shows Page 29. NEXT → /arch5429; PREVIOUS → /arch5427.
 */
export default function Arch5428Page() {
  return (
    <ArchSlidePage
      slideId={5428}
      title="Slide 5428 - Singer Bowl"
      image={{
        src: "/images/arch/5428Large.jpg",
        width: 400,
        height: 278,
        alt: "Singer Bowl — architect's rendering",
      }}
      captions={[
        "Singer Bowl",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5427"
      nextHref="/arch5429"
    />
  );
}
