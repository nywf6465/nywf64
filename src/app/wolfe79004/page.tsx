import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79004 - Fairgrounds from entrance — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79004 — Fairgrounds from entrance — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79004 (legacy wolfe79004.html).
 * Nav bar shows Page 5. NEXT → /wolfe79006; PREVIOUS → /wolfe79003.
 */
export default function Wolfe79004Page() {
  return (
    <WolfeSlidePage
      slideId="79004"
      title="Slide 79004 - Fairgrounds from entrance"
      image={{
        src: "/images/wolfe/79004Large.jpg",
        width: 400,
        height: 269,
        alt: "Fairgrounds from entrance",
      }}
      caption="79004 - Fairgrounds from entrance"
      previousHref="/wolfe79003"
      nextHref="/wolfe79006"
    />
  );
}
