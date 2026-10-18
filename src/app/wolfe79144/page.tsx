import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79144 - Dancers at Spanish pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79144 — Dancers at Spanish pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79144 (legacy wolfe79144.html).
 * Tray order shows Page 86 (79143 is already Page 85).
 * NEXT → /wolfe79145; PREVIOUS → /wolfe79143.
 */
export default function Wolfe79144Page() {
  return (
    <WolfeSlidePage
      slideId="79144"
      title="Slide 79144 - Dancers at Spanish pavilion"
      image={{
        src: "/images/wolfe/79144Large.jpg",
        width: 400,
        height: 268,
        alt: "Dancers at Spanish pavilion",
      }}
      caption="79144 - Dancers at Spanish pavilion"
      previousHref="/wolfe79143"
      nextHref="/wolfe79145"
    />
  );
}
