import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-67 - Coca-Cola — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-67 — Eliptical two-story Coca-Cola Pavilion with world's largest electric carillon in 120-foot tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-67 (legacy mainliner63367.html).
 * Nav bar shows Page 68. NEXT → /mainliner63368; PREVIOUS → /mainliner63366.
 */
export default function Mainliner63367Page() {
  return (
    <MainlinerSlidePage
      slideId="633-67"
      title="Slide 633-67 - Coca-Cola"
      lead={
        "633-67 Eliptical two-story Coca-Cola Pavilion with world's largest electric carillon in 120-foot tower"
      }
      image={{
        src: "/images/mainliner/633-67.jpg",
        width: 400,
        height: 267,
        alt: "Eliptical two-story Coca-Cola Pavilion with world's largest electric carillon in 120-foot tower",
      }}
      previousHref="/mainliner63366"
      nextHref="/mainliner63368"
    />
  );
}
