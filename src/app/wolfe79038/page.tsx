import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79038 - Close-up of the Unisphere — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79038 — Close-up of the Unisphere — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79038 (legacy wolfe79038.html).
 * Nav bar shows Page 32. NEXT → /wolfe79040; PREVIOUS → /wolfe79037.
 */
export default function Wolfe79038Page() {
  return (
    <WolfeSlidePage
      slideId="79038"
      title="Slide 79038 - Close-up of the Unisphere"
      image={{
        src: "/images/wolfe/79038Large.jpg",
        width: 400,
        height: 262,
        alt: "Close-up of the Unisphere",
      }}
      caption="79038 - Close-up of the Unisphere"
      previousHref="/wolfe79037"
      nextHref="/wolfe79040"
    />
  );
}
