import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79100 - Symbolic tree illustrating The Fruits of Our Labor, inside Hall of Free Enterprise — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79100 — Symbolic tree illustrating The Fruits of Our Labor, inside Hall of Free Enterprise — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79100 (legacy wolfe79100.html).
 * Tray order shows Page 61 (79095 is already Page 60).
 * NEXT → /wolfe79102; PREVIOUS → /wolfe79095.
 */
export default function Wolfe79100Page() {
  return (
    <WolfeSlidePage
      slideId="79100"
      title="Slide 79100 - Symbolic tree illustrating The Fruits of Our Labor, inside Hall of Free Enterprise"
      image={{
        src: "/images/wolfe/79100Large.jpg",
        width: 400,
        height: 269,
        alt: "Symbolic tree illustrating The Fruits of Our Labor, inside Hall of Free Enterprise",
      }}
      caption="79100 - Symbolic tree illustrating The Fruits of Our Labor, inside Hall of Free Enterprise"
      previousHref="/wolfe79095"
      nextHref="/wolfe79102"
    />
  );
}
