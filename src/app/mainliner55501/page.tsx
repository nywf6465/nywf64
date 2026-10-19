import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-01 - Entrance Building — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-01 — First Look, Long Island Railroad and subway entrance to the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-01 (legacy mainliner55501.html).
 * Nav bar shows Page 2. NEXT → /mainliner55502; PREVIOUS → /mainlinertray01.
 */
export default function Mainliner55501Page() {
  return (
    <MainlinerSlidePage
      slideId="555-01"
      title="Slide 555-01 - Entrance Building"
      lead="555-01 First Look - Long Island Railroad and subway entrance to Fair"
      image={{
        src: "/images/mainliner/555-01.jpg",
        width: 400,
        height: 271,
        alt: "Long Island Railroad and subway entrance to the Fair",
      }}
      previousHref="/mainlinertray01"
      nextHref="/mainliner55502"
    />
  );
}
