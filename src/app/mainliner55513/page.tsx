import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-13 - Chrysler — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-13 — Giant rocket symbolizes Chrysler's space and missile work — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-13 (legacy mainliner55513.html).
 * Nav bar shows Page 14. NEXT → /mainliner55514; PREVIOUS → /mainliner55512.
 */
export default function Mainliner55513Page() {
  return (
    <MainlinerSlidePage
      slideId="555-13"
      title="Slide 555-13 - Chrysler"
      lead="555-13 Giant rocket symbolizes Chrysler's space and missile work"
      image={{
        src: "/images/mainliner/555-13.jpg",
        width: 271,
        height: 400,
        alt: "Giant rocket symbolizes Chrysler's space and missile work",
      }}
      previousHref="/mainliner55512"
      nextHref="/mainliner55514"
    />
  );
}
