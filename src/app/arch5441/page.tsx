import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5441 - Central America - Panama — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5441 — Central America - Panama — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5441 (legacy arch5441.html).
 * Nav bar shows Page 42. NEXT → /arch5442; PREVIOUS → /arch5440.
 */
export default function Arch5441Page() {
  return (
    <ArchSlidePage
      slideId={5441}
      title="Slide 5441 - Central America - Panama"
      image={{
        src: "/images/arch/5441Large.jpg",
        width: 400,
        height: 280,
        alt: "Central America - Panama — architect's rendering",
      }}
      captions={["Central America - Panama"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5440"
      nextHref="/arch5442"
    />
  );
}
