import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-82 - RCA — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-82 — Modernistic Pavilion of Radio Corporation of America — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-82 (legacy mainliner63382.html).
 * Nav bar shows Page 83. NEXT → /mainliner63383; PREVIOUS → /mainliner63381.
 */
export default function Mainliner63382Page() {
  return (
    <MainlinerSlidePage
      slideId="633-82"
      title="Slide 633-82 - RCA"
      lead="633-82 Modernistic Pavilion of Radio Corporation of America"
      image={{
        src: "/images/mainliner/633-82.jpg",
        width: 400,
        height: 267,
        alt: "Modernistic Pavilion of Radio Corporation of America",
      }}
      previousHref="/mainliner63381"
      nextHref="/mainliner63383"
    />
  );
}
