import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79134 - Kitchen of the '40s — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79134 — Kitchen of the '40s — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79134 (legacy wolfe79134.html).
 * Tray order shows Page 79 (79133 is already Page 78).
 * NEXT → /wolfe79135; PREVIOUS → /wolfe79133.
 */
export default function Wolfe79134Page() {
  return (
    <WolfeSlidePage
      slideId="79134"
      title="Slide 79134 - Kitchen of the '40s"
      image={{
        src: "/images/wolfe/79134Large.jpg",
        width: 400,
        height: 262,
        alt: "Kitchen of the '40s",
      }}
      caption="79134 - Kitchen of the '40s"
      previousHref="/wolfe79133"
      nextHref="/wolfe79135"
    />
  );
}
