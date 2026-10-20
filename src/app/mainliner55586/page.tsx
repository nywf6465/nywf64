import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-86 - Indonesia — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-86 — Exhibit of handicraft in Indonesian Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-86 (legacy mainliner55586.html).
 * Nav bar shows Page 87. NEXT → /mainliner55587; PREVIOUS → /mainliner55585.
 */
export default function Mainliner55586Page() {
  return (
    <MainlinerSlidePage
      slideId="555-86"
      title="Slide 555-86 - Indonesia"
      lead="555-86 Exhibit of handicraft in Indonesian Pavilion"
      image={{
        src: "/images/mainliner/555-86.jpg",
        width: 400,
        height: 267,
        alt: "Exhibit of handicraft in Indonesian Pavilion",
      }}
      previousHref="/mainliner55585"
      nextHref="/mainliner55587"
    />
  );
}
