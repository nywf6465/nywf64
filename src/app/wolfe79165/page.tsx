import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79165 - Actual Mercury Spacecrafte used by Major Gordon Cooper, May, 1963 — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79165 — Actual Mercury Spacecraft used by Major Gordon Cooper in his 22-orbit Flight, 15-17 May, 1963 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79165 (legacy wolfe79165.html).
 * Tray order shows Page 98 (79163 is already Page 97).
 * The legacy navy title spells “Spacecrafte” and is shorter than the plate caption. Both are kept.
 * NEXT → /wolfe79167; PREVIOUS → /wolfe79163.
 */
export default function Wolfe79165Page() {
  return (
    <WolfeSlidePage
      slideId="79165"
      title="Slide 79165 - Actual Mercury Spacecrafte used by Major Gordon Cooper, May, 1963"
      image={{
        src: "/images/wolfe/79165Large.jpg",
        width: 400,
        height: 264,
        alt: "Actual Mercury Spacecraft used by Major Gordon Cooper in his 22-orbit Flight, 15-17 May, 1963",
      }}
      caption="79165 - Actual Mercury Spacecraft used by Major Gordon Cooper in his 22-orbit Flight, 15-17 May, 1963"
      previousHref="/wolfe79163"
      nextHref="/wolfe79167"
    />
  );
}
