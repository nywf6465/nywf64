import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-79 - American-Israel — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-79 — American-Israel Pavilion - spiral shaped building with boulders from King Solomon's Mines at entrance — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-79 (legacy mainliner55579.html).
 * Nav bar shows Page 80. NEXT → /mainliner55580; PREVIOUS → /mainliner55578.
 */
export default function Mainliner55579Page() {
  return (
    <MainlinerSlidePage
      slideId="555-79"
      title="Slide 555-79 - American-Israel"
      lead="555-79 American-Israel Pavilion - spiral shaped building with boulders from King Solomon's Mines at entrance"
      image={{
        src: "/images/mainliner/555-79.jpg",
        width: 400,
        height: 267,
        alt: "American-Israel Pavilion - spiral shaped building with boulders from King Solomon's Mines at entrance",
      }}
      previousHref="/mainliner55578"
      nextHref="/mainliner55580"
    />
  );
}
