import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79033 - Michaelangelo's Pieta, glimpsed from moving platform — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79033 — Michaelangelo's Pieta, glimpsed from moving platform — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79033 (legacy wolfe79033.html).
 * Nav bar shows Page 28. NEXT → /wolfe79034; PREVIOUS → /wolfe79032.
 */
export default function Wolfe79033Page() {
  return (
    <WolfeSlidePage
      slideId="79033"
      title="Slide 79033 - Michaelangelo's Pieta, glimpsed from moving platform"
      image={{
        src: "/images/wolfe/79033Large.jpg",
        width: 400,
        height: 263,
        alt: "Michaelangelo's Pieta, glimpsed from moving platform",
      }}
      caption="79033 - Michaelangelo's Pieta, glimpsed from moving platform"
      previousHref="/wolfe79032"
      nextHref="/wolfe79034"
    />
  );
}
