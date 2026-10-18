import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79149 - Cubicle-like conveyor seats carry visitors through Bell System ride — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79149 — Cubicle-like conveyor seats carry visitors through Bell System ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79149 (legacy wolfe79149.html).
 * Tray order shows Page 89 (79148 is already Page 88).
 * NEXT → /wolfe79150; PREVIOUS → /wolfe79148.
 */
export default function Wolfe79149Page() {
  return (
    <WolfeSlidePage
      slideId="79149"
      title="Slide 79149 - Cubicle-like conveyor seats carry visitors through Bell System ride"
      image={{
        src: "/images/wolfe/79149Large.jpg",
        width: 400,
        height: 263,
        alt: "Cubicle-like conveyor seats carry visitors through Bell System ride",
      }}
      caption="79149 - Cubicle-like conveyor seats carry visitors through Bell System ride"
      previousHref="/wolfe79148"
      nextHref="/wolfe79150"
    />
  );
}
