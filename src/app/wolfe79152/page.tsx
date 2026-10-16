import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79152 - Travelers Insurance pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79152 — Travelers Insurance pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79152 (legacy wolfe79152.html).
 * Tray order shows Page 91 (79150 is already Page 90).
 * NEXT → /wolfe79155; PREVIOUS → /wolfe79150.
 */
export default function Wolfe79152Page() {
  return (
    <WolfeSlidePage
      slideId="79152"
      title="Slide 79152 - Travelers Insurance pavilion"
      image={{
        src: "/images/wolfe/79152Large.jpg",
        width: 400,
        height: 263,
        alt: "Travelers Insurance pavilion",
      }}
      caption="79152 - Travelers Insurance pavilion"
      previousHref="/wolfe79150"
      nextHref="/wolfe79155"
    />
  );
}
