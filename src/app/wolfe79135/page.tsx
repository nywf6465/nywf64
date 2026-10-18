import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79135 - And the glories of today — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79135 — And the glories of today — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79135 (legacy wolfe79135.html).
 * Tray order shows Page 80 (79134 is already Page 79).
 * NEXT → /wolfe79137; PREVIOUS → /wolfe79134.
 */
export default function Wolfe79135Page() {
  return (
    <WolfeSlidePage
      slideId="79135"
      title="Slide 79135 - And the glories of today"
      image={{
        src: "/images/wolfe/79135Large.jpg",
        width: 400,
        height: 263,
        alt: "And the glories of today",
      }}
      caption="79135 - And the glories of today"
      previousHref="/wolfe79134"
      nextHref="/wolfe79137"
    />
  );
}
