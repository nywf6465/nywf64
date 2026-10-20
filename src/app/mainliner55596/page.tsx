import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-96 - Lake Amusement Area — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-96 — Lake Amusement Park area from New York State Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-96 (legacy mainliner55596.html).
 * Nav bar shows Page 97. NEXT → /mainliner55597; PREVIOUS → /mainliner55595.
 */
export default function Mainliner55596Page() {
  return (
    <MainlinerSlidePage
      slideId="555-96"
      title="Slide 555-96 - Lake Amusement Area"
      lead="555-96 Lake Amusement Park area from New York State Tower"
      image={{
        src: "/images/mainliner/555-96.jpg",
        width: 400,
        height: 267,
        alt: "Lake Amusement Park area from New York State Tower",
      }}
      previousHref="/mainliner55595"
      nextHref="/mainliner55597"
    />
  );
}
