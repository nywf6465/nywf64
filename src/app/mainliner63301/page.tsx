import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-01 - Panoramic View — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-01 — A "zillion" lights - the Fair at night — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-01 (legacy mainliner63301.html).
 * Nav bar shows Page 2. NEXT → /mainliner63302; PREVIOUS → /mainlinertray02.
 */
export default function Mainliner63301Page() {
  return (
    <MainlinerSlidePage
      slideId="633-01"
      title="Slide 633-01 - Panoramic View"
      lead={'633-01 A "zillion" lights - the Fair at night'}
      image={{
        src: "/images/mainliner/633-01.jpg",
        width: 400,
        height: 272,
        alt: 'A "zillion" lights - the Fair at night',
      }}
      previousHref="/mainlinertray02"
      nextHref="/mainliner63302"
    />
  );
}
