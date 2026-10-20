import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-16 - Sinclair — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-16 — Ferocious life-sized dinosaur created by sculptor Louis Paul Jonas for Sinclair exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-16 (legacy mainliner63316.html).
 * Nav bar shows Page 17. NEXT → /mainliner63317; PREVIOUS → /mainliner63315.
 */
export default function Mainliner63316Page() {
  return (
    <MainlinerSlidePage
      slideId="633-16"
      title="Slide 633-16 - Sinclair"
      lead="633-16 Ferocious life-sized dinosaur created by sculptor Louis Paul Jonas for Sinclair exhibit"
      image={{
        src: "/images/mainliner/633-16.jpg",
        width: 267,
        height: 400,
        alt: "Ferocious life-sized dinosaur created by sculptor Louis Paul Jonas for Sinclair exhibit",
      }}
      previousHref="/mainliner63315"
      nextHref="/mainliner63317"
    />
  );
}
