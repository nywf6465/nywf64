import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-67 - Thailand — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-67 — Exquisite art work in Thailand Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-67 (legacy mainliner55567.html).
 * Nav bar shows Page 68. NEXT → /mainliner55568; PREVIOUS → /mainliner55566.
 */
export default function Mainliner55567Page() {
  return (
    <MainlinerSlidePage
      slideId="555-67"
      title="Slide 555-67 - Thailand"
      lead="555-67 Exquisite art work in Thailand Pavilion"
      image={{
        src: "/images/mainliner/555-67.jpg",
        width: 267,
        height: 400,
        alt: "Exquisite art work in Thailand Pavilion",
      }}
      previousHref="/mainliner55566"
      nextHref="/mainliner55568"
    />
  );
}
