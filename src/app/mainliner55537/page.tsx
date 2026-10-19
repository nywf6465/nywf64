import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-37 - Hollywood U.S.A. — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-37 — Facsimile facade of Grauman's Chinese Theater - Hollywood, U.S.A. — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-37 (legacy mainliner55537.html).
 * Nav bar shows Page 38. NEXT → /mainliner55538; PREVIOUS → /mainliner55536.
 */
export default function Mainliner55537Page() {
  return (
    <MainlinerSlidePage
      slideId="555-37"
      title="Slide 555-37 - Hollywood U.S.A."
      lead="555-37 Facsimile facade of Grauman's Chinese Theater - Hollywood, U.S.A."
      image={{
        src: "/images/mainliner/555-37.jpg",
        width: 267,
        height: 400,
        alt: "Facsimile facade of Grauman's Chinese Theater - Hollywood, U.S.A.",
      }}
      previousHref="/mainliner55536"
      nextHref="/mainliner55538"
    />
  );
}
