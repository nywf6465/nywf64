import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-98 - Fountain of the Planets — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-98 — Fireworks display at Fountain of the Planets, Pool of Industry — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-98 (legacy mainliner63398.html).
 * Nav bar shows Page 99. NEXT → /mainliner63399; PREVIOUS → /mainliner63397.
 */
export default function Mainliner63398Page() {
  return (
    <MainlinerSlidePage
      slideId="633-98"
      title="Slide 633-98 - Fountain of the Planets"
      lead="633-98 Fireworks display at Fountain of the Planets, Pool of Industry"
      image={{
        src: "/images/mainliner/633-98.jpg",
        width: 400,
        height: 267,
        alt: "Fireworks display at Fountain of the Planets, Pool of Industry",
      }}
      previousHref="/mainliner63397"
      nextHref="/mainliner63399"
    />
  );
}
