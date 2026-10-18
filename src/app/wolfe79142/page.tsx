import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79142 - The Spanish pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79142 — The Spanish pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79142 (legacy wolfe79142.html).
 * Tray order shows Page 84 (79141 is already Page 83).
 * NEXT → /wolfe79143; PREVIOUS → /wolfe79141.
 */
export default function Wolfe79142Page() {
  return (
    <WolfeSlidePage
      slideId="79142"
      title="Slide 79142 - The Spanish pavilion"
      image={{
        src: "/images/wolfe/79142Large.jpg",
        width: 400,
        height: 262,
        alt: "The Spanish pavilion",
      }}
      caption="79142 - The Spanish pavilion"
      previousHref="/wolfe79141"
      nextHref="/wolfe79143"
    />
  );
}
