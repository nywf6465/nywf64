import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79111 - Cavewoman (his wife) pulls husband in cart, now that he has discovered the wheel — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79111 — Cavewoman (his wife) pulls casually waving husband away in cart, now that he has discovered the wheel — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79111 (legacy wolfe79111.html).
 * Tray order shows Page 68 (79110 is already Page 67).
 * Navy title and plate caption differ on the legacy page; both are kept.
 * NEXT → /wolfe79112; PREVIOUS → /wolfe79110.
 */
export default function Wolfe79111Page() {
  return (
    <WolfeSlidePage
      slideId="79111"
      title="Slide 79111 - Cavewoman (his wife) pulls husband in cart, now that he has discovered the wheel"
      image={{
        src: "/images/wolfe/79111Large.jpg",
        width: 400,
        height: 263,
        alt: "Cavewoman (his wife) pulls casually waving husband away in cart, now that he has discovered the wheel",
      }}
      caption="79111 - Cavewoman (his wife) pulls casually waving husband away in cart, now that he has discovered the wheel"
      previousHref="/wolfe79110"
      nextHref="/wolfe79112"
    />
  );
}
