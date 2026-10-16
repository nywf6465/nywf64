import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79133 - There's a great big beautiful tomorrow, circa 1920 — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79133 — There's a great big beautiful tomorrow, circa 1920 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79133 (legacy wolfe79133.html).
 * Tray order shows Page 78 (79132 is already Page 77).
 * NEXT → /wolfe79134; PREVIOUS → /wolfe79132.
 */
export default function Wolfe79133Page() {
  return (
    <WolfeSlidePage
      slideId="79133"
      title="Slide 79133 - There's a great big beautiful tomorrow, circa 1920"
      image={{
        src: "/images/wolfe/79133Large.jpg",
        width: 400,
        height: 262,
        alt: "There's a great big beautiful tomorrow, circa 1920",
      }}
      caption="79133 - There's a great big beautiful tomorrow, circa 1920"
      previousHref="/wolfe79132"
      nextHref="/wolfe79134"
    />
  );
}
