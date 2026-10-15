import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5419 - Clearview Expressway & Grand Central Parkway — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5419 — Clearview Expressway & Grand Central Parkway — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5419 (legacy arch5419.html).
 * Nav bar shows Page 20. NEXT → /arch5420; PREVIOUS → /arch5418.
 */
export default function Arch5419Page() {
  return (
    <ArchSlidePage
      slideId={5419}
      title="Slide 5419 - Clearview Expressway & Grand Central Parkway"
      image={{
        src: "/images/arch/5419Large.jpg",
        width: 400,
        height: 276,
        alt: "Clearview Expressway & Grand Central Parkway — architect's rendering",
      }}
      captions={[
        "Clearview Expressway & Grand",
        "Central Parkway",
      ]}
      category="PUBLIC SERVICES"
      previousHref="/arch5418"
      nextHref="/arch5420"
    />
  );
}
