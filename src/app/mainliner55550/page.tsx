import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-50 - Denmark — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-50 — Copenhagen's famous Tivoli Gardens feature Denmark Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-50 (legacy mainliner55550.html).
 * Nav bar shows Page 51. NEXT → /mainliner55551; PREVIOUS → /mainliner55549.
 */
export default function Mainliner55550Page() {
  return (
    <MainlinerSlidePage
      slideId="555-50"
      title="Slide 555-50 - Denmark"
      lead="555-50 Copenhagen's famous Tivoli Gardens feature Denmark Pavilion"
      image={{
        src: "/images/mainliner/555-50.jpg",
        width: 400,
        height: 267,
        alt: "Copenhagen's famous Tivoli Gardens feature Denmark Pavilion",
      }}
      previousHref="/mainliner55549"
      nextHref="/mainliner55551"
    />
  );
}
