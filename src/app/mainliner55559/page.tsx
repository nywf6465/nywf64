import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-59 - Sweden — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-59 — Sweden Pavilion, dedicated to theme, "Creative Sweden" — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-59 (legacy mainliner55559.html).
 * Nav bar shows Page 60. NEXT → /mainliner55560; PREVIOUS → /mainliner55558.
 */
export default function Mainliner55559Page() {
  return (
    <MainlinerSlidePage
      slideId="555-59"
      title="Slide 555-59 - Sweden"
      lead={'555-59 Sweden Pavilion, dedicated to theme, "Creative Sweden"'}
      image={{
        src: "/images/mainliner/555-59.jpg",
        width: 400,
        height: 267,
        alt: 'Sweden Pavilion, dedicated to theme, "Creative Sweden"',
      }}
      previousHref="/mainliner55558"
      nextHref="/mainliner55560"
    />
  );
}
