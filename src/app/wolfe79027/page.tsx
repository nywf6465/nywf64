import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79027 - Close-up of Escorter taxi — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79027 — Close-up of Escorter taxi — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79027 (legacy wolfe79027.html).
 * Nav bar shows Page 22. NEXT → /wolfe79028; PREVIOUS → /wolfe79026.
 */
export default function Wolfe79027Page() {
  return (
    <WolfeSlidePage
      slideId="79027"
      title="Slide 79027 - Close-up of Escorter taxi"
      image={{
        src: "/images/wolfe/79027Large.jpg",
        width: 400,
        height: 262,
        alt: "Close-up of Escorter taxi",
      }}
      caption="79027 - Close-up of Escorter taxi"
      previousHref="/wolfe79026"
      nextHref="/wolfe79028"
    />
  );
}
