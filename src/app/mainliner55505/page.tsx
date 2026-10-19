import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-05 - Unisphere — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-05 — Symbol of Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-05 (legacy mainliner55505.html).
 * Nav bar shows Page 6. NEXT → /mainliner55506; PREVIOUS → /mainliner55504.
 */
export default function Mainliner55505Page() {
  return (
    <MainlinerSlidePage
      slideId="555-05"
      title="Slide 555-05 - Unisphere"
      lead="555-05 Symbol of Fair"
      image={{
        src: "/images/mainliner/555-05.jpg",
        width: 271,
        height: 400,
        alt: "Symbol of Fair",
      }}
      previousHref="/mainliner55504"
      nextHref="/mainliner55506"
    />
  );
}
