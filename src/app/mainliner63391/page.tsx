import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-91 - Les Poupees de Paris — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-91 — Cast of 200 puppets plays among spectacular settings in revue at Les Poupees de Paris — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-91 (legacy mainliner63391.html).
 * Nav bar shows Page 92. NEXT → /mainliner63392; PREVIOUS → /mainliner63390.
 */
export default function Mainliner63391Page() {
  return (
    <MainlinerSlidePage
      slideId="633-91"
      title="Slide 633-91 - Les Poupees de Paris"
      lead="633-91 Cast of 200 puppets plays among spectacular settings in revue at Les Poupees de Paris"
      image={{
        src: "/images/mainliner/633-91.jpg",
        width: 400,
        height: 267,
        alt: "Cast of 200 puppets plays among spectacular settings in revue at Les Poupees de Paris",
      }}
      previousHref="/mainliner63390"
      nextHref="/mainliner63392"
    />
  );
}
