import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79032 - The Vatican Pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79032 — The Vatican Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79032 (legacy wolfe79032.html).
 * Nav bar shows Page 27. NEXT → /wolfe79033; PREVIOUS → /wolfe79031.
 */
export default function Wolfe79032Page() {
  return (
    <WolfeSlidePage
      slideId="79032"
      title="Slide 79032 - The Vatican Pavilion"
      image={{
        src: "/images/wolfe/79032Large.jpg",
        width: 400,
        height: 263,
        alt: "The Vatican Pavilion",
      }}
      caption="79032 - The Vatican Pavilion"
      previousHref="/wolfe79031"
      nextHref="/wolfe79033"
    />
  );
}
