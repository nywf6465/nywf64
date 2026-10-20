import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-26 - Montana — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-26 — Seven gaily painted railroad cars contain Western exhibit from Montana, the "Big Sky Country" — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-26 (legacy mainliner63326.html).
 * Nav bar shows Page 27. NEXT → /mainliner63327; PREVIOUS → /mainliner63325.
 */
export default function Mainliner63326Page() {
  return (
    <MainlinerSlidePage
      slideId="633-26"
      title="Slide 633-26 - Montana"
      lead={
        '633-26 Seven gaily painted railroad cars contain Western exhibit from Montana, the "Big Sky Country"'
      }
      image={{
        src: "/images/mainliner/633-26.jpg",
        width: 400,
        height: 267,
        alt: 'Seven gaily painted railroad cars contain Western exhibit from Montana, the "Big Sky Country"',
      }}
      previousHref="/mainliner63325"
      nextHref="/mainliner63327"
    />
  );
}
