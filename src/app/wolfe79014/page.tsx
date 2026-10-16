import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79014 - Fairgrounds panorama from inside Top of the Fair Restaurant — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79014 — Fairgrounds panorama from inside Top of the Fair Restaurant — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79014 (legacy wolfe79014.html).
 * Nav bar shows Page 10. NEXT → /wolfe79015; PREVIOUS → /wolfe79011.
 */
export default function Wolfe79014Page() {
  return (
    <WolfeSlidePage
      slideId="79014"
      title="Slide 79014 - Fairgrounds panorama from inside Top of the Fair Restaurant"
      image={{
        src: "/images/wolfe/79014Large.jpg",
        width: 400,
        height: 262,
        alt: "Fairgrounds panorama from inside Top of the Fair Restaurant",
      }}
      caption="79014 - Fairgrounds panorama from inside Top of the Fair Restaurant"
      previousHref="/wolfe79011"
      nextHref="/wolfe79015"
    />
  );
}
