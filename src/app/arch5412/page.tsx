import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5412 - Telephone Booth — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5412 — Telephone Booth — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5412 (legacy arch5412.html).
 * Nav bar shows Page 13. NEXT → /arch5413; PREVIOUS → /arch5411.
 */
export default function Arch5412Page() {
  return (
    <ArchSlidePage
      slideId={5412}
      title="Slide 5412 - Telephone Booth"
      image={{
        src: "/images/arch/5412Large.jpg",
        width: 400,
        height: 285,
        alt: "Telephone Booth — architect's rendering",
      }}
      captions={["Telephone Booth"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5411"
      nextHref="/arch5413"
    />
  );
}
