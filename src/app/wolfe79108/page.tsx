import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79108 - Caveman and family warm their bottoms on Ford Magic Skyway — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79108 — Caveman and family warm their bottoms on Ford Magic Skyway — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79108 (legacy wolfe79108.html).
 * Tray order shows Page 65 (79106 is already Page 64).
 * NEXT → /wolfe79109; PREVIOUS → /wolfe79106.
 */
export default function Wolfe79108Page() {
  return (
    <WolfeSlidePage
      slideId="79108"
      title="Slide 79108 - Caveman and family warm their bottoms on Ford Magic Skyway"
      image={{
        src: "/images/wolfe/79108Large.jpg",
        width: 400,
        height: 264,
        alt: "Caveman and family warm their bottoms on Ford Magic Skyway",
      }}
      caption="79108 - Caveman and family warm their bottoms on Ford Magic Skyway"
      previousHref="/wolfe79106"
      nextHref="/wolfe79109"
    />
  );
}
