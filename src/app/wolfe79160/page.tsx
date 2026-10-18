import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79160 - Belgian Village across tranquil lake — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79160 — Belgian Village across tranquil lake — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79160 (legacy wolfe79160.html).
 * Tray order shows Page 95 (79159 is already Page 94).
 * NEXT → /wolfe79162; PREVIOUS → /wolfe79159.
 */
export default function Wolfe79160Page() {
  return (
    <WolfeSlidePage
      slideId="79160"
      title="Slide 79160 - Belgian Village across tranquil lake"
      image={{
        src: "/images/wolfe/79160Large.jpg",
        width: 263,
        height: 400,
        alt: "Belgian Village across tranquil lake",
      }}
      caption="79160 - Belgian Village across tranquil lake"
      previousHref="/wolfe79159"
      nextHref="/wolfe79162"
    />
  );
}
