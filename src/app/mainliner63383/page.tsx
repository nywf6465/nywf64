import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-83 - Singer Bowl — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-83 — Singer Bowl - open-air stadium seating 15,000 used for music festivals, sports and variety shows — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-83 (legacy mainliner63383.html).
 * Nav bar shows Page 84. NEXT → /mainliner63384; PREVIOUS → /mainliner63382.
 */
export default function Mainliner63383Page() {
  return (
    <MainlinerSlidePage
      slideId="633-83"
      title="Slide 633-83 - Singer Bowl"
      lead="633-83 Singer Bowl - open-air stadium seating 15,000 used for music festivals, sports and variety shows"
      image={{
        src: "/images/mainliner/633-83.jpg",
        width: 400,
        height: 267,
        alt: "Singer Bowl - open-air stadium seating 15,000 used for music festivals, sports and variety shows",
      }}
      previousHref="/mainliner63382"
      nextHref="/mainliner63384"
    />
  );
}
