import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-04 - Unisphere — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-04 — Largest model of world ever built — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-04 (legacy mainliner55504.html).
 * Nav bar shows Page 5. NEXT → /mainliner55505; PREVIOUS → /mainliner55503.
 */
export default function Mainliner55504Page() {
  return (
    <MainlinerSlidePage
      slideId="555-04"
      title="Slide 555-04 - Unisphere"
      lead="555-04 Largest model of world ever built"
      image={{
        src: "/images/mainliner/555-04.jpg",
        width: 400,
        height: 271,
        alt: "Largest model of world ever built",
      }}
      previousHref="/mainliner55503"
      nextHref="/mainliner55505"
    />
  );
}
