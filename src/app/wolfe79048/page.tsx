import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79048 - The American-Israel Pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79048 — The American-Israel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79048 (legacy wolfe79048.html).
 * Nav bar shows Page 37. NEXT → /wolfe79049; PREVIOUS → /wolfe79047.
 */
export default function Wolfe79048Page() {
  return (
    <WolfeSlidePage
      slideId="79048"
      title="Slide 79048 - The American-Israel Pavilion"
      image={{
        src: "/images/wolfe/79048Large.jpg",
        width: 400,
        height: 263,
        alt: "The American-Israel Pavilion",
      }}
      caption="79048 - The American-Israel Pavilion"
      previousHref="/wolfe79047"
      nextHref="/wolfe79049"
    />
  );
}
