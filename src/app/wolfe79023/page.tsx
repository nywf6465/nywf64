import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79023 - Lighted Unisphere across reflecting pool — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79023 — Lighted Unisphere across reflecting pool — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79023 (legacy wolfe79023.html).
 * Nav bar shows Page 18. NEXT → /wolfe79024; PREVIOUS → /wolfe79022.
 */
export default function Wolfe79023Page() {
  return (
    <WolfeSlidePage
      slideId="79023"
      title="Slide 79023 - Lighted Unisphere across reflecting pool"
      image={{
        src: "/images/wolfe/79023Large.jpg",
        width: 400,
        height: 264,
        alt: "Lighted Unisphere across reflecting pool",
      }}
      caption="79023 - Lighted Unisphere across reflecting pool"
      previousHref="/wolfe79022"
      nextHref="/wolfe79024"
    />
  );
}
