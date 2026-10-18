import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79174 - Wall display of Churchill cartoons and variety of his hats — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79174 — Wall display of Churchill cartoons and variety of his hats — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79174 (legacy wolfe79174.html).
 * Tray order shows Page 103 (79170 is already Page 102).
 * NEXT → /wolfe79175; PREVIOUS → /wolfe79170.
 */
export default function Wolfe79174Page() {
  return (
    <WolfeSlidePage
      slideId="79174"
      title="Slide 79174 - Wall display of Churchill cartoons and variety of his hats"
      image={{
        src: "/images/wolfe/79174Large.jpg",
        width: 400,
        height: 259,
        alt: "Wall display of Churchill cartoons and variety of his hats",
      }}
      caption="79174 - Wall display of Churchill cartoons and variety of his hats"
      previousHref="/wolfe79170"
      nextHref="/wolfe79175"
    />
  );
}
