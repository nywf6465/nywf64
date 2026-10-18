import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79169 - Lunar Lander — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79169 — Lunar Lander — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79169 (legacy wolfe79169.html).
 * Tray order shows Page 101 (79168 is already Page 100).
 * NEXT → /wolfe79170; PREVIOUS → /wolfe79168.
 */
export default function Wolfe79169Page() {
  return (
    <WolfeSlidePage
      slideId="79169"
      title="Slide 79169 - Lunar Lander"
      image={{
        src: "/images/wolfe/79169Large.jpg",
        width: 400,
        height: 262,
        alt: "Lunar Lander",
      }}
      caption="79169 - Lunar Lander"
      previousHref="/wolfe79168"
      nextHref="/wolfe79170"
    />
  );
}
