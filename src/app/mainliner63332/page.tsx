import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-32 - Missouri — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-32 — Missouri Pavilion houses exact replica of Lindbergh's plane and Mercury Space Capsule — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-32 (legacy mainliner63332.html).
 * Nav bar shows Page 33. NEXT → /mainliner63333; PREVIOUS → /mainliner63331.
 */
export default function Mainliner63332Page() {
  return (
    <MainlinerSlidePage
      slideId="633-32"
      title="Slide 633-32 - Missouri"
      lead="633-32 Missouri Pavilion houses exact replica of Lindbergh's plane and Mercury Space Capsule"
      image={{
        src: "/images/mainliner/633-32.jpg",
        width: 400,
        height: 267,
        alt: "Missouri Pavilion houses exact replica of Lindbergh's plane and Mercury Space Capsule",
      }}
      previousHref="/mainliner63331"
      nextHref="/mainliner63333"
    />
  );
}
