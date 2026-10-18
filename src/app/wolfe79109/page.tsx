import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79109 - Exulting, cave men capture the Imperial Elephant, Ford Magic Skyway — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79109 — Exulting, cave men capture the Imperial Elephant, Ford Magic Skyway — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79109 (legacy wolfe79109.html).
 * Tray order shows Page 66 (79108 is already Page 65).
 * NEXT → /wolfe79110; PREVIOUS → /wolfe79108.
 */
export default function Wolfe79109Page() {
  return (
    <WolfeSlidePage
      slideId="79109"
      title="Slide 79109 - Exulting, cave men capture the Imperial Elephant, Ford Magic Skyway"
      image={{
        src: "/images/wolfe/79109Large.jpg",
        width: 400,
        height: 263,
        alt: "Exulting, cave men capture the Imperial Elephant, Ford Magic Skyway",
      }}
      caption="79109 - Exulting, cave men capture the Imperial Elephant, Ford Magic Skyway"
      previousHref="/wolfe79108"
      nextHref="/wolfe79110"
    />
  );
}
