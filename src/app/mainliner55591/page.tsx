import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-91 - Vatican — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-91 — Stylized cross, "Communion of Saints", at Vatican entrance — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-91 (legacy mainliner55591.html).
 * Nav bar shows Page 92. NEXT → /mainliner55592; PREVIOUS → /mainliner55590.
 */
export default function Mainliner55591Page() {
  return (
    <MainlinerSlidePage
      slideId="555-91"
      title="Slide 555-91 - Vatican"
      lead={'555-91 Stylized cross, "Communion of Saints", at Vatican entrance'}
      image={{
        src: "/images/mainliner/555-91.jpg",
        width: 267,
        height: 400,
        alt: 'Stylized cross, "Communion of Saints", at Vatican entrance',
      }}
      previousHref="/mainliner55590"
      nextHref="/mainliner55592"
    />
  );
}
