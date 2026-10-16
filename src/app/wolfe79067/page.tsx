import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79067 - General panorama of Fairgrounds — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79067 — General panorama of Fairgrounds — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79067 (legacy wolfe79067.html).
 * Nav bar shows Page 50. NEXT → /wolfe79068; PREVIOUS → /wolfe79066.
 */
export default function Wolfe79067Page() {
  return (
    <WolfeSlidePage
      slideId="79067"
      title="Slide 79067 - General panorama of Fairgrounds"
      image={{
        src: "/images/wolfe/79067Large.jpg",
        width: 262,
        height: 400,
        alt: "General panorama of Fairgrounds",
      }}
      caption="79067 - General panorama of Fairgrounds"
      previousHref="/wolfe79066"
      nextHref="/wolfe79068"
    />
  );
}
