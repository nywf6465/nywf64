import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-89 - Churchill Center — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-89 — Churchill Center - tribute to the late, great leader — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-89 (legacy mainliner63389.html).
 * Nav bar shows Page 90. NEXT → /mainliner63390; PREVIOUS → /mainliner63388.
 */
export default function Mainliner63389Page() {
  return (
    <MainlinerSlidePage
      slideId="633-89"
      title="Slide 633-89 - Churchill Center"
      lead="633-89 Churchill Center - tribute to the late, great leader"
      image={{
        src: "/images/mainliner/633-89.jpg",
        width: 400,
        height: 267,
        alt: "Churchill Center - tribute to the late, great leader",
      }}
      previousHref="/mainliner63388"
      nextHref="/mainliner63390"
    />
  );
}
