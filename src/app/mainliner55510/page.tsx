import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-10 - U.S. Rubber — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-10 — U.S. Rubber Pavilion and giant whitewall tire sky ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-10 (legacy mainliner55510.html).
 * Nav bar shows Page 11. NEXT → /mainliner55511; PREVIOUS → /mainliner55509.
 */
export default function Mainliner55510Page() {
  return (
    <MainlinerSlidePage
      slideId="555-10"
      title="Slide 555-10 - U.S. Rubber"
      lead="555-10 U.S. Rubber Pavilion and giant whitewall tire sky ride"
      image={{
        src: "/images/mainliner/555-10.jpg",
        width: 273,
        height: 400,
        alt: "U.S. Rubber Pavilion and giant whitewall tire sky ride",
      }}
      previousHref="/mainliner55509"
      nextHref="/mainliner55511"
    />
  );
}
