import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79025 - Yellow fountains and bursting fireworks — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79025 — Yellow fountains and bursting fireworks — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79025 (legacy wolfe79025.html).
 * Nav bar shows Page 20. NEXT → /wolfe79026; PREVIOUS → /wolfe79024.
 * The prior tray slide is 79024 (79022 is two slides earlier).
 */
export default function Wolfe79025Page() {
  return (
    <WolfeSlidePage
      slideId="79025"
      title="Slide 79025 - Yellow fountains and bursting fireworks"
      image={{
        src: "/images/wolfe/79025Large.jpg",
        width: 263,
        height: 400,
        alt: "Yellow fountains and bursting fireworks",
      }}
      caption="79025 - Yellow fountains and bursting fireworks"
      previousHref="/wolfe79024"
      nextHref="/wolfe79026"
    />
  );
}
