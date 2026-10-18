import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79158 - The smallest dinosaur (ornitholestes, 6 feet long) at Sinclair Dinoland — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79158 — The smallest dinosaur (ornitholestes, 6 feet long) at Sinclair Dinoland — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79158 (legacy wolfe79158.html).
 * Tray order shows Page 93 (79155 is already Page 92).
 * NEXT → /wolfe79159; PREVIOUS → /wolfe79155.
 */
export default function Wolfe79158Page() {
  return (
    <WolfeSlidePage
      slideId="79158"
      title="Slide 79158 - The smallest dinosaur (ornitholestes, 6 feet long) at Sinclair Dinoland"
      image={{
        src: "/images/wolfe/79158Large.jpg",
        width: 400,
        height: 263,
        alt: "The smallest dinosaur (ornitholestes, 6 feet long) at Sinclair Dinoland",
      }}
      caption="79158 - The smallest dinosaur (ornitholestes, 6 feet long) at Sinclair Dinoland"
      previousHref="/wolfe79155"
      nextHref="/wolfe79159"
    />
  );
}
