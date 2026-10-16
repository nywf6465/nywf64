import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79170 - Sir Winston Churchill - A Tribute — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79170 — Sir Winston Churchill - A Tribute. — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79170 (legacy wolfe79170.html).
 * Tray order shows Page 102 (79169 is already Page 101).
 * The plate caption ends with a period; the navy title does not. Both are kept.
 * NEXT → /wolfe79174; PREVIOUS → /wolfe79169.
 */
export default function Wolfe79170Page() {
  return (
    <WolfeSlidePage
      slideId="79170"
      title="Slide 79170 - Sir Winston Churchill - A Tribute"
      image={{
        src: "/images/wolfe/79170Large.jpg",
        width: 400,
        height: 266,
        alt: "Sir Winston Churchill - A Tribute",
      }}
      caption="79170 - Sir Winston Churchill - A Tribute."
      previousHref="/wolfe79169"
      nextHref="/wolfe79174"
    />
  );
}
