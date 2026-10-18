import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79137 - Kaleidoscopic view looking back down corridor of mirrors, leaving G.E. show — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79137 — Kaleidoscopic view looking back down corridor of mirrors, leaving G.E. show — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79137 (legacy wolfe79137.html).
 * Tray order shows Page 81 (79135 is already Page 80).
 * NEXT → /wolfe79139; PREVIOUS → /wolfe79135.
 */
export default function Wolfe79137Page() {
  return (
    <WolfeSlidePage
      slideId="79137"
      title="Slide 79137 - Kaleidoscopic view looking back down corridor of mirrors, leaving G.E. show"
      image={{
        src: "/images/wolfe/79137Large.jpg",
        width: 400,
        height: 263,
        alt: "Kaleidoscopic view looking back down corridor of mirrors, leaving G.E. show",
      }}
      caption="79137 - Kaleidoscopic view looking back down corridor of mirrors, leaving G.E. show"
      previousHref="/wolfe79135"
      nextHref="/wolfe79139"
    />
  );
}
