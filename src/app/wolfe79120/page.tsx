import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79120 - Passengers seated 3 abreast, starting G.M. tour — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79120 — Passengers seated 3 abreast, starting G.M. tour — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79120 (legacy wolfe79120.html).
 * Tray order shows Page 73 (79115 is Page 71; 79130 sits between them).
 * Legacy Next Slide and this page’s NEXT go to /wolfe79121.
 * PREVIOUS follows the 79115 Next Slide link back to /wolfe79115.
 * The tray’s previous thumbnail before 79120 is 79130.
 */
export default function Wolfe79120Page() {
  return (
    <WolfeSlidePage
      slideId="79120"
      title="Slide 79120 - Passengers seated 3 abreast, starting G.M. tour"
      image={{
        src: "/images/wolfe/79120Large.jpg",
        width: 400,
        height: 262,
        alt: "Passengers seated 3 abreast, starting G.M. tour",
      }}
      caption="79120 - Passengers seated 3 abreast, starting G.M. tour"
      previousHref="/wolfe79115"
      nextHref="/wolfe79121"
    />
  );
}
