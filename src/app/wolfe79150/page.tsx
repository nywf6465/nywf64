import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79150 - Spraying Fountain of the Planets, at night — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79150 — Spraying Fountain of the Planets, at night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79150 (legacy wolfe79150.html).
 * Tray order shows Page 90 (79149 is already Page 89).
 * NEXT → /wolfe79152; PREVIOUS → /wolfe79149.
 */
export default function Wolfe79150Page() {
  return (
    <WolfeSlidePage
      slideId="79150"
      title="Slide 79150 - Spraying Fountain of the Planets, at night"
      image={{
        src: "/images/wolfe/79150Large.jpg",
        width: 400,
        height: 262,
        alt: "Spraying Fountain of the Planets, at night",
      }}
      caption="79150 - Spraying Fountain of the Planets, at night"
      previousHref="/wolfe79149"
      nextHref="/wolfe79152"
    />
  );
}
