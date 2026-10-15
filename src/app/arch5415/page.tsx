import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5415 - Festival of Gas — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5415 — Festival of Gas — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5415 (legacy arch5415.html).
 * Nav bar shows Page 16. NEXT → /arch5416; PREVIOUS → /arch5414.
 */
export default function Arch5415Page() {
  return (
    <ArchSlidePage
      slideId={5415}
      title="Slide 5415 - Festival of Gas"
      image={{
        src: "/images/arch/5415Large.jpg",
        width: 400,
        height: 274,
        alt: "Festival of Gas — architect's rendering",
      }}
      captions={["Festival of Gas"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5414"
      nextHref="/arch5416"
    />
  );
}
