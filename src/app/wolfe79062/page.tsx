import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79062 - The Thailand Pavilion, with softly glowing lights — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79062 — The Thailand Pavilion, with softly glowing lights — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79062 (legacy wolfe79062.html).
 * Nav bar shows Page 47. NEXT → /wolfe79063; PREVIOUS → /wolfe79061.
 */
export default function Wolfe79062Page() {
  return (
    <WolfeSlidePage
      slideId="79062"
      title="Slide 79062 - The Thailand Pavilion, with softly glowing lights"
      image={{
        src: "/images/wolfe/79062Large.jpg",
        width: 400,
        height: 263,
        alt: "The Thailand Pavilion, with softly glowing lights",
      }}
      caption="79062 - The Thailand Pavilion, with softly glowing lights"
      previousHref="/wolfe79061"
      nextHref="/wolfe79063"
    />
  );
}
