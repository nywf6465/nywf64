import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5439 - Wisconsin — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5439 — Wisconsin — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5439 (legacy arch5439.html).
 * Nav bar shows Page 40. NEXT → /arch5440; PREVIOUS → /arch5438.
 */
export default function Arch5439Page() {
  return (
    <ArchSlidePage
      slideId={5439}
      title="Slide 5439 - Wisconsin"
      image={{
        src: "/images/arch/5439Large.jpg",
        width: 400,
        height: 272,
        alt: "Wisconsin — architect's rendering",
      }}
      captions={["Wisconsin"]}
      category="STATES"
      previousHref="/arch5438"
      nextHref="/arch5440"
    />
  );
}
