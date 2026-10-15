import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5410 - Brass Rail Refreshment & Souvenir Center — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5410 — Brass Rail Refreshment & Souvenir Center — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5410 (legacy arch5410.html).
 * Nav bar shows Page 11. NEXT → /arch5411; PREVIOUS → /arch5409.
 */
export default function Arch5410Page() {
  return (
    <ArchSlidePage
      slideId={5410}
      title="Slide 5410 - Brass Rail Refreshment & Souvenir Center"
      image={{
        src: "/images/arch/5410Large.jpg",
        width: 400,
        height: 276,
        alt: "Brass Rail Refreshment & Souvenir Center — architect's rendering",
      }}
      captions={["Brass Rail Refreshment & Souvenir", "Center"]}
      previousHref="/arch5409"
      nextHref="/arch5411"
    />
  );
}
