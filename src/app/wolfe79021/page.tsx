import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79021 - Lighted Unisphere and Fairgrounds from atop Tower — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79021 — Lighted Unisphere and Fairgrounds from atop Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79021 (legacy wolfe79021.html).
 * Nav bar shows Page 16. NEXT → /wolfe79022; PREVIOUS → /wolfe79020.
 */
export default function Wolfe79021Page() {
  return (
    <WolfeSlidePage
      slideId="79021"
      title="Slide 79021 - Lighted Unisphere and Fairgrounds from atop Tower"
      image={{
        src: "/images/wolfe/79021Large.jpg",
        width: 400,
        height: 261,
        alt: "Lighted Unisphere and Fairgrounds from atop Tower",
      }}
      caption="79021 - Lighted Unisphere and Fairgrounds from atop Tower"
      previousHref="/wolfe79020"
      nextHref="/wolfe79022"
    />
  );
}
