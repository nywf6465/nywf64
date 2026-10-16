import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79110 - Boarding convertibles for Magic Skyway ride — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79110 — Boarding convertibles for Magic Skyway ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79110 (legacy wolfe79110.html).
 * Tray order shows Page 67 (79109 is already Page 66).
 * NEXT → /wolfe79111; PREVIOUS → /wolfe79109.
 */
export default function Wolfe79110Page() {
  return (
    <WolfeSlidePage
      slideId="79110"
      title="Slide 79110 - Boarding convertibles for Magic Skyway ride"
      image={{
        src: "/images/wolfe/79110Large.jpg",
        width: 400,
        height: 264,
        alt: "Boarding convertibles for Magic Skyway ride",
      }}
      caption="79110 - Boarding convertibles for Magic Skyway ride"
      previousHref="/wolfe79109"
      nextHref="/wolfe79111"
    />
  );
}
