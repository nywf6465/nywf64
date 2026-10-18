import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79167 - Gemini Capsule — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79167 — Gemini Capsule — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79167 (legacy wolfe79167.html).
 * Tray order shows Page 99 (79165 is already Page 98).
 * NEXT → /wolfe79168; PREVIOUS → /wolfe79165.
 */
export default function Wolfe79167Page() {
  return (
    <WolfeSlidePage
      slideId="79167"
      title="Slide 79167 - Gemini Capsule"
      image={{
        src: "/images/wolfe/79167Large.jpg",
        width: 400,
        height: 262,
        alt: "Gemini Capsule",
      }}
      caption="79167 - Gemini Capsule"
      previousHref="/wolfe79165"
      nextHref="/wolfe79168"
    />
  );
}
