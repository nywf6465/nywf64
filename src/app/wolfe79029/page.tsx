import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79029 - Spires of Mormon Church pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79029 — Spires of Mormon Church pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79029 (legacy wolfe79029.html).
 * Nav bar shows Page 24. NEXT → /wolfe79030; PREVIOUS → /wolfe79028.
 */
export default function Wolfe79029Page() {
  return (
    <WolfeSlidePage
      slideId="79029"
      title="Slide 79029 - Spires of Mormon Church pavilion"
      image={{
        src: "/images/wolfe/79029Large.jpg",
        width: 400,
        height: 263,
        alt: "Spires of Mormon Church pavilion",
      }}
      caption="79029 - Spires of Mormon Church pavilion"
      previousHref="/wolfe79028"
      nextHref="/wolfe79030"
    />
  );
}
