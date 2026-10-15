import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title: "Slide 5401 - Unisphere — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5401 — Unisphere presented by United States Steel — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5401 (legacy arch5401.html).
 * Nav bar shows Page 2. No NEXT — PREVIOUS returns to /archtray.
 */
export default function Arch5401Page() {
  return (
    <ArchSlidePage
      slideId={5401}
      title="Slide 5401 - Unisphere"
      image={{
        src: "/images/arch/5401Large.jpg",
        width: 257,
        height: 400,
        alt: "Unisphere — architect's rendering",
      }}
      captions={["Unisphere presented by", "United States Steel"]}
    />
  );
}
