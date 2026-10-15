import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5433 - New England States — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5433 — New England States — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5433 (legacy arch5433.html).
 * Nav bar shows Page 34. NEXT → /arch5434; PREVIOUS → /arch5432.
 */
export default function Arch5433Page() {
  return (
    <ArchSlidePage
      slideId={5433}
      title="Slide 5433 - New England States"
      image={{
        src: "/images/arch/5433Large.jpg",
        width: 400,
        height: 280,
        alt: "New England States — architect's rendering",
      }}
      captions={["New England States"]}
      category="STATES"
      previousHref="/arch5432"
      nextHref="/arch5434"
    />
  );
}
