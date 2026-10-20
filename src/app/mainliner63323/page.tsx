import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-23 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-23 — New York State pavilion and towers at night - Astral Fountain on right — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-23 (legacy mainliner63323.html).
 * Nav bar shows Page 24. NEXT → /mainliner63324; PREVIOUS → /mainliner63322.
 */
export default function Mainliner63323Page() {
  return (
    <MainlinerSlidePage
      slideId="633-23"
      title="Slide 633-23 - New York State"
      lead="633-23 New York State pavilion and towers at night - Astral Fountain on right"
      image={{
        src: "/images/mainliner/633-23.jpg",
        width: 400,
        height: 267,
        alt: "New York State pavilion and towers at night - Astral Fountain on right",
      }}
      previousHref="/mainliner63322"
      nextHref="/mainliner63324"
    />
  );
}
