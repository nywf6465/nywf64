import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-66 - Thailand — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-66 — Main building of Thailand is 18th Century Buddhist shrine — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-66 (legacy mainliner55566.html).
 * Nav bar shows Page 67. NEXT → /mainliner55567; PREVIOUS → /mainliner55565.
 */
export default function Mainliner55566Page() {
  return (
    <MainlinerSlidePage
      slideId="555-66"
      title="Slide 555-66 - Thailand"
      lead="555-66 Main building of Thailand is 18th Century Buddhist shrine"
      image={{
        src: "/images/mainliner/555-66.jpg",
        width: 267,
        height: 400,
        alt: "Main building of Thailand is 18th Century Buddhist shrine",
      }}
      previousHref="/mainliner55565"
      nextHref="/mainliner55567"
    />
  );
}
