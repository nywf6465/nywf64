import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79145 - The Equitable Life Assurance Pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79145 — The Equitable Life Assurance Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79145 (legacy wolfe79145.html).
 * Tray order shows Page 87 (79144 is already Page 86).
 * NEXT → /wolfe79148; PREVIOUS → /wolfe79144.
 */
export default function Wolfe79145Page() {
  return (
    <WolfeSlidePage
      slideId="79145"
      title="Slide 79145 - The Equitable Life Assurance Pavilion"
      image={{
        src: "/images/wolfe/79145Large.jpg",
        width: 400,
        height: 262,
        alt: "The Equitable Life Assurance Pavilion",
      }}
      caption="79145 - The Equitable Life Assurance Pavilion"
      previousHref="/wolfe79144"
      nextHref="/wolfe79148"
    />
  );
}
