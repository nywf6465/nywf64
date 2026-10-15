import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5427 - City Museum in New York City Building — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5427 — City Museum in New York City Building — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5427 (legacy arch5427.html).
 * Nav bar shows Page 28. NEXT → /arch5428; PREVIOUS → /arch5426.
 */
export default function Arch5427Page() {
  return (
    <ArchSlidePage
      slideId={5427}
      title="Slide 5427 - City Museum in New York City Building"
      image={{
        src: "/images/arch/5427Large.jpg",
        width: 400,
        height: 278,
        alt: "City Museum in New York City Building — architect's rendering",
      }}
      captions={[
        "City Museum in New York",
        "City Building",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5426"
      nextHref="/arch5428"
    />
  );
}
