import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-42 - NCR — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-42 — Two-story ribbed frame and concrete building of National Cash Register — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-42 (legacy mainliner55542.html).
 * Nav bar shows Page 43. NEXT → /mainliner55543; PREVIOUS → /mainliner55541.
 */
export default function Mainliner55542Page() {
  return (
    <MainlinerSlidePage
      slideId="555-42"
      title="Slide 555-42 - NCR"
      lead="555-42 Two-story ribbed frame and concrete building of National Cash Register"
      image={{
        src: "/images/mainliner/555-42.jpg",
        width: 400,
        height: 267,
        alt: "Two-story ribbed frame and concrete building of National Cash Register",
      }}
      previousHref="/mainliner55541"
      nextHref="/mainliner55543"
    />
  );
}
