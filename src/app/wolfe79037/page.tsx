import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79037 - Telephoto of Unisphere and surrounding fountains — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79037 — Telephoto of Unisphere and surrounding fountains — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79037 (legacy wolfe79037.html).
 * Nav bar shows Page 31. NEXT → /wolfe79038; PREVIOUS → /wolfe79035.
 */
export default function Wolfe79037Page() {
  return (
    <WolfeSlidePage
      slideId="79037"
      title="Slide 79037 - Telephoto of Unisphere and surrounding fountains"
      image={{
        src: "/images/wolfe/79037Large.jpg",
        width: 400,
        height: 264,
        alt: "Telephoto of Unisphere and surrounding fountains",
      }}
      caption="79037 - Telephoto of Unisphere and surrounding fountains"
      previousHref="/wolfe79035"
      nextHref="/wolfe79038"
    />
  );
}
