import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79115 - Crowd waits for Futurama tour — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79115 — Crowd waits for Futurama tour — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79115 (legacy wolfe79115.html).
 * Tray order shows Page 71 (79114 is already Page 70).
 * Legacy Next Slide and this page’s NEXT go to /wolfe79120.
 * The tray’s next thumbnail after 79115 is 79130.
 * PREVIOUS → /wolfe79114.
 */
export default function Wolfe79115Page() {
  return (
    <WolfeSlidePage
      slideId="79115"
      title="Slide 79115 - Crowd waits for Futurama tour"
      image={{
        src: "/images/wolfe/79115Large.jpg",
        width: 400,
        height: 270,
        alt: "Crowd waits for Futurama tour",
      }}
      caption="79115 - Crowd waits for Futurama tour"
      previousHref="/wolfe79114"
      nextHref="/wolfe79120"
    />
  );
}
