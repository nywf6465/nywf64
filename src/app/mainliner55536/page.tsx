import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-36 - American Express — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-36 — Million dollars\' worth of real currency from many nations "grows" on American Express "Money Tree" — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-36 (legacy mainliner55536.html).
 * Nav bar shows Page 37. NEXT → /mainliner55537; PREVIOUS → /mainliner55535.
 */
export default function Mainliner55536Page() {
  return (
    <MainlinerSlidePage
      slideId="555-36"
      title="Slide 555-36 - American Express"
      lead={
        '555-36 Million dollars\' worth of real currency from many nations "grows" on American Express "Money Tree"'
      }
      image={{
        src: "/images/mainliner/555-36.jpg",
        width: 270,
        height: 400,
        alt: 'Million dollars\' worth of real currency from many nations "grows" on American Express "Money Tree"',
      }}
      previousHref="/mainliner55535"
      nextHref="/mainliner55537"
    />
  );
}
