import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79007 - Close-up of N.Y. State Towers (highest is 226') — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79007 — Close-up of N.Y. State Towers (highest is 226') — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79007 (legacy wolfe79007.html).
 * Nav bar shows Page 7. NEXT → /wolfe79010; PREVIOUS → /wolfe79006.
 */
export default function Wolfe79007Page() {
  return (
    <WolfeSlidePage
      slideId="79007"
      title="Slide 79007 - Close-up of N.Y. State Towers (highest is 226')"
      image={{
        src: "/images/wolfe/79007Large.jpg",
        width: 261,
        height: 400,
        alt: "Close-up of N.Y. State Towers (highest is 226')",
      }}
      caption="79007 - Close-up of N.Y. State Towers (highest is 226')"
      previousHref="/wolfe79006"
      nextHref="/wolfe79010"
    />
  );
}
