import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5417 - Greyhound at the Fair — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5417 — Greyhound at the Fair — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5417 (legacy arch5417.html).
 * Nav bar shows Page 18. NEXT → /arch5418; PREVIOUS → /arch5416.
 */
export default function Arch5417Page() {
  return (
    <ArchSlidePage
      slideId={5417}
      title="Slide 5417 - Greyhound at the Fair"
      image={{
        src: "/images/arch/5417Large.jpg",
        width: 400,
        height: 274,
        alt: "Greyhound at the Fair — architect's rendering",
      }}
      captions={["Greyhound At The Fair"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5416"
      nextHref="/arch5418"
    />
  );
}
