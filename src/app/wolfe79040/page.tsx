import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79040 - AMF Monorail — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79040 — AMF Monorail — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79040 (legacy wolfe79040.html).
 * Nav bar shows Page 33. NEXT → /wolfe79045; PREVIOUS → /wolfe79038.
 */
export default function Wolfe79040Page() {
  return (
    <WolfeSlidePage
      slideId="79040"
      title="Slide 79040 - AMF Monorail"
      image={{
        src: "/images/wolfe/79040Large.jpg",
        width: 400,
        height: 263,
        alt: "AMF Monorail",
      }}
      caption="79040 - AMF Monorail"
      previousHref="/wolfe79038"
      nextHref="/wolfe79045"
    />
  );
}
