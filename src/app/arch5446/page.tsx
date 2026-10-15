import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5446 - Greece — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5446 — Greece — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5446 (legacy arch5446.html).
 * Nav bar shows Page 47. NEXT → /arch5447; PREVIOUS → /arch5445.
 */
export default function Arch5446Page() {
  return (
    <ArchSlidePage
      slideId={5446}
      title="Slide 5446 - Greece"
      image={{
        src: "/images/arch/5446Large.jpg",
        width: 400,
        height: 279,
        alt: "Greece — architect's rendering",
      }}
      captions={["Greece"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5445"
      nextHref="/arch5447"
    />
  );
}
