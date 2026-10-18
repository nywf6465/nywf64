import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79112 - Entrance to Chrysler Autofare — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79112 — Entrance to Chrysler Autofare — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79112 (legacy wolfe79112.html).
 * Tray order shows Page 69 (79111 is already Page 68).
 * NEXT → /wolfe79114; PREVIOUS → /wolfe79111.
 */
export default function Wolfe79112Page() {
  return (
    <WolfeSlidePage
      slideId="79112"
      title="Slide 79112 - Entrance to Chrysler Autofare"
      image={{
        src: "/images/wolfe/79112Large.jpg",
        width: 400,
        height: 261,
        alt: "Entrance to Chrysler Autofare",
      }}
      caption="79112 - Entrance to Chrysler Autofare"
      previousHref="/wolfe79111"
      nextHref="/wolfe79114"
    />
  );
}
