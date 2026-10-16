import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79066 - Cafeteria counter, Seven-Up Sandwich Garden — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79066 — Cafeteria counter, Seven-Up Sandwich Garden — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79066 (legacy wolfe79066.html).
 * Nav bar shows Page 49. NEXT → /wolfe79067; PREVIOUS → /wolfe79063.
 */
export default function Wolfe79066Page() {
  return (
    <WolfeSlidePage
      slideId="79066"
      title="Slide 79066 - Cafeteria counter, Seven-Up Sandwich Garden"
      image={{
        src: "/images/wolfe/79066Large.jpg",
        width: 400,
        height: 263,
        alt: "Cafeteria counter, Seven-Up Sandwich Garden",
      }}
      caption="79066 - Cafeteria counter, Seven-Up Sandwich Garden"
      previousHref="/wolfe79063"
      nextHref="/wolfe79067"
    />
  );
}
