import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79148 - Fairgrounds, looking toward Bell System pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79148 — Fairgrounds, looking toward Bell System pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79148 (legacy wolfe79148.html).
 * Tray order shows Page 88 (79145 is already Page 87).
 * NEXT → /wolfe79149; PREVIOUS → /wolfe79145.
 */
export default function Wolfe79148Page() {
  return (
    <WolfeSlidePage
      slideId="79148"
      title="Slide 79148 - Fairgrounds, looking toward Bell System pavilion"
      image={{
        src: "/images/wolfe/79148Large.jpg",
        width: 400,
        height: 263,
        alt: "Fairgrounds, looking toward Bell System pavilion",
      }}
      caption="79148 - Fairgrounds, looking toward Bell System pavilion"
      previousHref="/wolfe79145"
      nextHref="/wolfe79149"
    />
  );
}
