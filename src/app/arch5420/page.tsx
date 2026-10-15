import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5420 - Marina Administration Building — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5420 — Marina Administration Building — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5420 (legacy arch5420.html).
 * Nav bar shows Page 21. NEXT → /arch5421; PREVIOUS → /arch5419.
 */
export default function Arch5420Page() {
  return (
    <ArchSlidePage
      slideId={5420}
      title="Slide 5420 - Marina Administration Building"
      image={{
        src: "/images/arch/5420Large.jpg",
        width: 400,
        height: 278,
        alt: "Marina Administration Building — architect's rendering",
      }}
      captions={["Marina Administration Building"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5419"
      nextHref="/arch5421"
    />
  );
}
