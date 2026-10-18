import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79010 - United States pavilion and Shea Stadium from Tower — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79010 — United States pavilion and Shea Stadium from Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79010 (legacy wolfe79010.html).
 * Nav bar shows Page 8. NEXT → /wolfe79011; PREVIOUS → /wolfe79007.
 */
export default function Wolfe79010Page() {
  return (
    <WolfeSlidePage
      slideId="79010"
      title="Slide 79010 - United States pavilion and Shea Stadium from Tower"
      image={{
        src: "/images/wolfe/79010Large.jpg",
        width: 400,
        height: 263,
        alt: "United States pavilion and Shea Stadium from Tower",
      }}
      caption="79010 - United States pavilion and Shea Stadium from Tower"
      previousHref="/wolfe79007"
      nextHref="/wolfe79011"
    />
  );
}
