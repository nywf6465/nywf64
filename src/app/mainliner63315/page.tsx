import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-15 - Sinclair — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-15 — Life-sized replicas of dinosaurs at Sinclair exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-15 (legacy mainliner63315.html).
 * Nav bar shows Page 16. NEXT → /mainliner63316; PREVIOUS → /mainliner63314.
 */
export default function Mainliner63315Page() {
  return (
    <MainlinerSlidePage
      slideId="633-15"
      title="Slide 633-15 - Sinclair"
      lead="633-15 Life-sized replicas of dinosaurs at Sinclair exhibit"
      image={{
        src: "/images/mainliner/633-15.jpg",
        width: 400,
        height: 267,
        alt: "Life-sized replicas of dinosaurs at Sinclair exhibit",
      }}
      previousHref="/mainliner63314"
      nextHref="/mainliner63316"
    />
  );
}
