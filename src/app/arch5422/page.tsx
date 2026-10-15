import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5422 - Circus — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5422 — Circus — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5422 (legacy arch5422.html).
 * Nav bar shows Page 23. NEXT → /arch5423; PREVIOUS → /arch5421.
 */
export default function Arch5422Page() {
  return (
    <ArchSlidePage
      slideId={5422}
      title="Slide 5422 - Circus"
      image={{
        src: "/images/arch/5422Large.jpg",
        width: 400,
        height: 278,
        alt: "Circus — architect's rendering",
      }}
      captions={[
        "Circus",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5421"
      nextHref="/arch5423"
    />
  );
}
