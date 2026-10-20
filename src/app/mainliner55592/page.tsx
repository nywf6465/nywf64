import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-92 - Christian Science — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-92 — Christian Science Pavilion (center) from New York State tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-92 (legacy mainliner55592.html).
 * Nav bar shows Page 93. NEXT → /mainliner55593; PREVIOUS → /mainliner55591.
 */
export default function Mainliner55592Page() {
  return (
    <MainlinerSlidePage
      slideId="555-92"
      title="Slide 555-92 - Christian Science"
      lead="555-92 Christian Science Pavilion (center) from New York State tower"
      image={{
        src: "/images/mainliner/555-92.jpg",
        width: 400,
        height: 267,
        alt: "Christian Science Pavilion (center) from New York State tower",
      }}
      previousHref="/mainliner55591"
      nextHref="/mainliner55593"
    />
  );
}
