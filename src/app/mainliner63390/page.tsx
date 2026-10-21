import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-90 - Churchill Center — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-90 — Statue of Sir Winston Churchill outside Churchill Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-90 (legacy mainliner63390.html).
 * Nav bar shows Page 91. NEXT → /mainliner63391; PREVIOUS → /mainliner63389.
 */
export default function Mainliner63390Page() {
  return (
    <MainlinerSlidePage
      slideId="633-90"
      title="Slide 633-90 - Churchill Center"
      lead="633-90 Statue of Sir Winston Churchill outside Churchill Center"
      image={{
        src: "/images/mainliner/633-90.jpg",
        width: 267,
        height: 400,
        alt: "Statue of Sir Winston Churchill outside Churchill Center",
      }}
      previousHref="/mainliner63389"
      nextHref="/mainliner63391"
    />
  );
}
