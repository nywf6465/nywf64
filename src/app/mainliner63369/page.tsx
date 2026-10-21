import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-69 - Pepsi-Cola — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-69 — Walt Disney characters entertain children outside Pepsi-Cola Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-69 (legacy mainliner63369.html).
 * Nav bar shows Page 70. NEXT → /mainliner63370; PREVIOUS → /mainliner63368.
 */
export default function Mainliner63369Page() {
  return (
    <MainlinerSlidePage
      slideId="633-69"
      title="Slide 633-69 - Pepsi-Cola"
      lead="633-69 Walt Disney characters entertain children outside Pepsi-Cola Pavilion"
      image={{
        src: "/images/mainliner/633-69.jpg",
        width: 400,
        height: 267,
        alt: "Walt Disney characters entertain children outside Pepsi-Cola Pavilion",
      }}
      previousHref="/mainliner63368"
      nextHref="/mainliner63370"
    />
  );
}
