import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-68 - Pepsi-Cola — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-68 — Tower of the Four Winds, 120-foot high, rises above Pepsi-Cola Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-68 (legacy mainliner63368.html).
 * Nav bar shows Page 69. NEXT → /mainliner63369; PREVIOUS → /mainliner63367.
 */
export default function Mainliner63368Page() {
  return (
    <MainlinerSlidePage
      slideId="633-68"
      title="Slide 633-68 - Pepsi-Cola"
      lead="633-68 Tower of the Four Winds, 120-foot high, rises above Pepsi-Cola Pavilion"
      image={{
        src: "/images/mainliner/633-68.jpg",
        width: 400,
        height: 267,
        alt: "Tower of the Four Winds, 120-foot high, rises above Pepsi-Cola Pavilion",
      }}
      previousHref="/mainliner63367"
      nextHref="/mainliner63369"
    />
  );
}
