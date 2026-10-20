import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-98 - Aerial Tower Ride — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-98 — One of Amusement Park\'s "fun" attractions — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-98 (legacy mainliner55598.html).
 * Nav bar shows Page 99. NEXT → /mainliner55599; PREVIOUS → /mainliner55597.
 */
export default function Mainliner55598Page() {
  return (
    <MainlinerSlidePage
      slideId="555-98"
      title="Slide 555-98 - Aerial Tower Ride"
      lead={'555-98 One of Amusement Park\'s "fun" attractions'}
      image={{
        src: "/images/mainliner/555-98.jpg",
        width: 267,
        height: 400,
        alt: 'One of Amusement Park\'s "fun" attractions',
      }}
      previousHref="/mainliner55597"
      nextHref="/mainliner55599"
    />
  );
}
