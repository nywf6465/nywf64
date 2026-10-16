import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79063 - Gilded shrine of the Thailand Pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79063 — Gilded shrine of the Thailand Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79063 (legacy wolfe79063.html).
 * Nav bar shows Page 48. NEXT → /wolfe79066; PREVIOUS → /wolfe79062.
 */
export default function Wolfe79063Page() {
  return (
    <WolfeSlidePage
      slideId="79063"
      title="Slide 79063 - Gilded shrine of the Thailand Pavilion"
      image={{
        src: "/images/wolfe/79063Large.jpg",
        width: 263,
        height: 400,
        alt: "Gilded shrine of the Thailand Pavilion",
      }}
      caption="79063 - Gilded shrine of the Thailand Pavilion"
      previousHref="/wolfe79062"
      nextHref="/wolfe79066"
    />
  );
}
