import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-81 - Missouri — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-81 — Missouri\'s glass-enclosed pavilion has theme, "First in Space" — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-81 (legacy mainliner55581.html).
 * Nav bar shows Page 82. NEXT → /mainliner55582; PREVIOUS → /mainliner55580.
 */
export default function Mainliner55581Page() {
  return (
    <MainlinerSlidePage
      slideId="555-81"
      title="Slide 555-81 - Missouri"
      lead={
        '555-81 Missouri\'s glass-enclosed pavilion has theme, "First in Space"'
      }
      image={{
        src: "/images/mainliner/555-81.jpg",
        width: 400,
        height: 267,
        alt: 'Missouri\'s glass-enclosed pavilion has theme, "First in Space"',
      }}
      previousHref="/mainliner55580"
      nextHref="/mainliner55582"
    />
  );
}
