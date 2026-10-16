import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79141 - DuPont alchemists — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79141 — DuPont alchemists — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79141 (legacy wolfe79141.html).
 * Tray order shows Page 83 (79139 is already Page 82).
 * NEXT → /wolfe79142; PREVIOUS → /wolfe79139.
 */
export default function Wolfe79141Page() {
  return (
    <WolfeSlidePage
      slideId="79141"
      title="Slide 79141 - DuPont alchemists"
      image={{
        src: "/images/wolfe/79141Large.jpg",
        width: 400,
        height: 268,
        alt: "DuPont alchemists",
      }}
      caption="79141 - DuPont alchemists"
      previousHref="/wolfe79139"
      nextHref="/wolfe79142"
    />
  );
}
