import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-49 - Spain — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-49 — Three attached buildings house exhibits from Spain — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-49 (legacy mainliner55549.html).
 * Nav bar shows Page 50. NEXT → /mainliner55550; PREVIOUS → /mainliner55548.
 */
export default function Mainliner55549Page() {
  return (
    <MainlinerSlidePage
      slideId="555-49"
      title="Slide 555-49 - Spain"
      lead="555-49 Three attached buildings house exhibits from Spain"
      image={{
        src: "/images/mainliner/555-49.jpg",
        width: 400,
        height: 267,
        alt: "Three attached buildings house exhibits from Spain",
      }}
      previousHref="/mainliner55548"
      nextHref="/mainliner55550"
    />
  );
}
