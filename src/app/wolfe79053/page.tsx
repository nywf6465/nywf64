import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79053 - More elves service the malt crusher, Schaefer Center — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79053 — More elves service the malt crusher, Schaefer Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79053 (legacy wolfe79053.html).
 * Nav bar shows Page 40. NEXT → /wolfe79054; PREVIOUS → /wolfe79052.
 */
export default function Wolfe79053Page() {
  return (
    <WolfeSlidePage
      slideId="79053"
      title="Slide 79053 - More elves service the malt crusher, Schaefer Center"
      image={{
        src: "/images/wolfe/79053Large.jpg",
        width: 400,
        height: 263,
        alt: "More elves service the malt crusher, Schaefer Center",
      }}
      caption="79053 - More elves service the malt crusher, Schaefer Center"
      previousHref="/wolfe79052"
      nextHref="/wolfe79054"
    />
  );
}
