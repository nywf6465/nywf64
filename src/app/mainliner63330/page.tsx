import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-30 - New England States — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-30 — New England States - series of hexagonal buildings around "village green" — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-30 (legacy mainliner63330.html).
 * Nav bar shows Page 31. NEXT → /mainliner63331; PREVIOUS → /mainliner63329.
 */
export default function Mainliner63330Page() {
  return (
    <MainlinerSlidePage
      slideId="633-30"
      title="Slide 633-30 - New England States"
      lead={
        '633-30 New England States - series of hexagonal buildings around "village green"'
      }
      image={{
        src: "/images/mainliner/633-30.jpg",
        width: 400,
        height: 267,
        alt: 'New England States - series of hexagonal buildings around "village green"',
      }}
      previousHref="/mainliner63329"
      nextHref="/mainliner63331"
    />
  );
}
