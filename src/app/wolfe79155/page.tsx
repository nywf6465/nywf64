import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79155 - Clairol Color Carousel — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79155 — Clairol Color Carousel — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79155 (legacy wolfe79155.html).
 * Tray order shows Page 92 (79152 is already Page 91).
 * NEXT → /wolfe79158; PREVIOUS → /wolfe79152.
 */
export default function Wolfe79155Page() {
  return (
    <WolfeSlidePage
      slideId="79155"
      title="Slide 79155 - Clairol Color Carousel"
      image={{
        src: "/images/wolfe/79155Large.jpg",
        width: 400,
        height: 264,
        alt: "Clairol Color Carousel",
      }}
      caption="79155 - Clairol Color Carousel"
      previousHref="/wolfe79152"
      nextHref="/wolfe79158"
    />
  );
}
