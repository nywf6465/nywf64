import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79079 - Moses smashes Ten Commandments, inside Walter's Wax Museum — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79079 — Moses smashes Ten Commandments, inside Walter's Wax Museum — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79079 (legacy wolfe79079.html).
 * Nav bar shows Page 54. NEXT → /wolfe79080 (tray and legacy; 790780 is not a slide); PREVIOUS → /wolfe79073.
 */
export default function Wolfe79079Page() {
  return (
    <WolfeSlidePage
      slideId="79079"
      title="Slide 79079 - Moses smashes Ten Commandments, inside Walter's Wax Museum"
      image={{
        src: "/images/wolfe/79079Large.jpg",
        width: 263,
        height: 400,
        alt: "Moses smashes Ten Commandments, inside Walter's Wax Museum",
      }}
      caption="79079 - Moses smashes Ten Commandments, inside Walter's Wax Museum"
      previousHref="/wolfe79073"
      nextHref="/wolfe79080"
    />
  );
}
