import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-96 - Transportation and Travel — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-96 — "Jetarama Theater" of United Air Lines in Fair\'s Amusement Area — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-96 (legacy mainliner63396.html).
 * Nav bar shows Page 97. NEXT → /mainliner63397; PREVIOUS → /mainliner63395.
 */
export default function Mainliner63396Page() {
  return (
    <MainlinerSlidePage
      slideId="633-96"
      title="Slide 633-96 - Transportation and Travel"
      lead={
        '633-96 "Jetarama Theater" of United Air Lines in Fair\'s Amusement Area'
      }
      image={{
        src: "/images/mainliner/633-96.jpg",
        width: 400,
        height: 270,
        alt: '"Jetarama Theater" of United Air Lines in Fair\'s Amusement Area',
      }}
      previousHref="/mainliner63395"
      nextHref="/mainliner63397"
    />
  );
}
