import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5432 - Hawaii — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5432 — Hawaii — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5432 (legacy arch5432.html).
 * Nav bar shows Page 33. NEXT → /arch5433; PREVIOUS → /arch5431.
 */
export default function Arch5432Page() {
  return (
    <ArchSlidePage
      slideId={5432}
      title="Slide 5432 - Hawaii"
      image={{
        src: "/images/arch/5432Large.jpg",
        width: 400,
        height: 277,
        alt: "Hawaii — architect's rendering",
      }}
      captions={["Hawaii"]}
      category="STATES"
      previousHref="/arch5431"
      nextHref="/arch5433"
    />
  );
}
