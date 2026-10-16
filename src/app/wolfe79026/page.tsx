import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79026 - Purple showers from exploding fireworks — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79026 — Purple showers from exploding fireworks — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79026 (legacy wolfe79026.html).
 * Nav bar shows Page 21. NEXT → /wolfe79027; PREVIOUS → /wolfe79025.
 */
export default function Wolfe79026Page() {
  return (
    <WolfeSlidePage
      slideId="79026"
      title="Slide 79026 - Purple showers from exploding fireworks"
      image={{
        src: "/images/wolfe/79026Large.jpg",
        width: 259,
        height: 400,
        alt: "Purple showers from exploding fireworks",
      }}
      caption="79026 - Purple showers from exploding fireworks"
      previousHref="/wolfe79025"
      nextHref="/wolfe79027"
    />
  );
}
