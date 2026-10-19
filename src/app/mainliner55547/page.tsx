import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-47 - Johnson Wax — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-47 — Johnson Wax Pavilion, great gold disk — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-47 (legacy mainliner55547.html).
 * Nav bar shows Page 48. NEXT → /mainliner55548; PREVIOUS → /mainliner55546.
 */
export default function Mainliner55547Page() {
  return (
    <MainlinerSlidePage
      slideId="555-47"
      title="Slide 555-47 - Johnson Wax"
      lead="555-47 Johnson Wax Pavilion, great gold disk"
      image={{
        src: "/images/mainliner/555-47.jpg",
        width: 267,
        height: 400,
        alt: "Johnson Wax Pavilion, great gold disk",
      }}
      previousHref="/mainliner55546"
      nextHref="/mainliner55548"
    />
  );
}
