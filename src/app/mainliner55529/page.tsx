import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-29 - Pepsi-Cola — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-29 — "Pluto" in front of Pepsi-Cola Pavilion — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-29 (legacy mainliner55529.html).
 * Nav bar shows Page 30. NEXT → /mainliner55530; PREVIOUS → /mainliner55528.
 */
export default function Mainliner55529Page() {
  return (
    <MainlinerSlidePage
      slideId="555-29"
      title="Slide 555-29 - Pepsi-Cola"
      lead={'555-29 "Pluto" in front of Pepsi-Cola Pavilion'}
      image={{
        src: "/images/mainliner/555-29.jpg",
        width: 269,
        height: 400,
        alt: '"Pluto" in front of Pepsi-Cola Pavilion',
      }}
      previousHref="/mainliner55528"
      nextHref="/mainliner55530"
    />
  );
}
