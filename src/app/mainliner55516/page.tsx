import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-16 - Sinclair — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-16 — Prehistoric monster in Sinclair exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-16 (legacy mainliner55516.html).
 * Nav bar shows Page 17. NEXT → /mainliner55517; PREVIOUS → /mainliner55515.
 */
export default function Mainliner55516Page() {
  return (
    <MainlinerSlidePage
      slideId="555-16"
      title="Slide 555-16 - Sinclair"
      lead="555-16 Prehistoric monster in Sinclair exhibit"
      image={{
        src: "/images/mainliner/555-16.jpg",
        width: 271,
        height: 400,
        alt: "Prehistoric monster in Sinclair exhibit",
      }}
      previousHref="/mainliner55515"
      nextHref="/mainliner55517"
    />
  );
}
