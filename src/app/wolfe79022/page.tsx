import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79022 - Looking across spraying fountains at night, toward Unisphere — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79022 — Looking across spraying fountains at night, toward Unisphere — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79022 (legacy wolfe79022.html).
 * Nav bar shows Page 17. NEXT → /wolfe79023; PREVIOUS → /wolfe79021.
 */
export default function Wolfe79022Page() {
  return (
    <WolfeSlidePage
      slideId="79022"
      title="Slide 79022 - Looking across spraying fountains at night, toward Unisphere"
      image={{
        src: "/images/wolfe/79022Large.jpg",
        width: 400,
        height: 261,
        alt: "Looking across spraying fountains at night, toward Unisphere",
      }}
      caption="79022 - Looking across spraying fountains at night, toward Unisphere"
      previousHref="/wolfe79021"
      nextHref="/wolfe79023"
    />
  );
}
