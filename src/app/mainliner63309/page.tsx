import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-09 - U.S. Space Park — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-09 — Telstar - exhibit at NASA\u00A0Space Park — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-09 (legacy mainliner63309.html).
 * Nav bar shows Page 10. NEXT → /mainliner63310; PREVIOUS → /mainliner63308.
 */
export default function Mainliner63309Page() {
  return (
    <MainlinerSlidePage
      slideId="633-09"
      title="Slide 633-09 - U.S. Space Park"
      lead={"633-09 Telstar - exhibit at NASA\u00A0Space Park"}
      image={{
        src: "/images/mainliner/633-09.jpg",
        width: 265,
        height: 400,
        alt: "Telstar - exhibit at NASA\u00A0Space Park",
      }}
      previousHref="/mainliner63308"
      nextHref="/mainliner63310"
    />
  );
}
