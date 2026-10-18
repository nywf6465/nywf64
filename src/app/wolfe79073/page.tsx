import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79073 - Skiers in alpine setting, inside Coca Cola — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79073 — Skiers in alpine setting, inside Coca Cola — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79073 (legacy wolfe79073.html).
 * Nav bar shows Page 53. NEXT → /wolfe79079; PREVIOUS → /wolfe79072.
 */
export default function Wolfe79073Page() {
  return (
    <WolfeSlidePage
      slideId="79073"
      title="Slide 79073 - Skiers in alpine setting, inside Coca Cola"
      image={{
        src: "/images/wolfe/79073Large.jpg",
        width: 400,
        height: 263,
        alt: "Skiers in alpine setting, inside Coca Cola",
      }}
      caption="79073 - Skiers in alpine setting, inside Coca Cola"
      previousHref="/wolfe79072"
      nextHref="/wolfe79079"
    />
  );
}
