import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79105 - Flag-lined bridge leading to Ford Rotunda — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79105 — Flag-lined bridge leading to Ford Rotunda — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79105 (legacy wolfe79105.html).
 * Tray order shows Page 63 (79102 is already Page 62).
 * NEXT → /wolfe79106; PREVIOUS → /wolfe79102.
 */
export default function Wolfe79105Page() {
  return (
    <WolfeSlidePage
      slideId="79105"
      title="Slide 79105 - Flag-lined bridge leading to Ford Rotunda"
      image={{
        src: "/images/wolfe/79105Large.jpg",
        width: 400,
        height: 263,
        alt: "Flag-lined bridge leading to Ford Rotunda",
      }}
      caption="79105 - Flag-lined bridge leading to Ford Rotunda"
      previousHref="/wolfe79102"
      nextHref="/wolfe79106"
    />
  );
}
