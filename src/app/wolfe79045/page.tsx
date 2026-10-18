import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79045 - Interior of Denmark pavilion - a typical Fair bazaar — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79045 — Interior of Denmark pavilion - a typical Fair bazaar — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79045 (legacy wolfe79045.html).
 * Nav bar shows Page 34. NEXT → /wolfe79046; PREVIOUS → /wolfe79040.
 */
export default function Wolfe79045Page() {
  return (
    <WolfeSlidePage
      slideId="79045"
      title="Slide 79045 - Interior of Denmark pavilion - a typical Fair bazaar"
      image={{
        src: "/images/wolfe/79045Large.jpg",
        width: 262,
        height: 400,
        alt: "Interior of Denmark pavilion - a typical Fair bazaar",
      }}
      caption="79045 - Interior of Denmark pavilion - a typical Fair bazaar"
      previousHref="/wolfe79040"
      nextHref="/wolfe79046"
    />
  );
}
