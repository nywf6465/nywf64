import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79095 - Standing Kodiak bear, Alaska pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79095 — Standing Kodiak bear, Alaska pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79095 (legacy wolfe79095.html).
 * Tray order shows Page 60 (79085–79090 already occupy Pages 57–59).
 * NEXT → /wolfe79100; PREVIOUS → /wolfe79090.
 */
export default function Wolfe79095Page() {
  return (
    <WolfeSlidePage
      slideId="79095"
      title="Slide 79095 - Standing Kodiak bear, Alaska pavilion"
      image={{
        src: "/images/wolfe/79095Large.jpg",
        width: 260,
        height: 400,
        alt: "Standing Kodiak bear, Alaska pavilion",
      }}
      caption="79095 - Standing Kodiak bear, Alaska pavilion"
      previousHref="/wolfe79090"
      nextHref="/wolfe79100"
    />
  );
}
