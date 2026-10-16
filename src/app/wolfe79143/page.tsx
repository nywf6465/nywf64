import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79143 - Interior of street-level restaurant inside Spanish pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79143 — Interior of street-level restaurant inside Spanish pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79143 (legacy wolfe79143.html).
 * Tray order shows Page 85 (79142 is already Page 84).
 * NEXT → /wolfe79144; PREVIOUS → /wolfe79142.
 */
export default function Wolfe79143Page() {
  return (
    <WolfeSlidePage
      slideId="79143"
      title="Slide 79143 - Interior of street-level restaurant inside Spanish pavilion"
      image={{
        src: "/images/wolfe/79143Large.jpg",
        width: 400,
        height: 262,
        alt: "Interior of street-level restaurant inside Spanish pavilion",
      }}
      caption="79143 - Interior of street-level restaurant inside Spanish pavilion"
      previousHref="/wolfe79142"
      nextHref="/wolfe79144"
    />
  );
}
