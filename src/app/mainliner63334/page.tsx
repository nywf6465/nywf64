import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-34 - Bourbon Street — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-34 — "Five Flags Bistro Bar" on Bourbon Street - reconstruction of New Orleans\' famous street of fun — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-34 (legacy mainliner63334.html).
 * Nav bar shows Page 35. NEXT → /mainliner63335; PREVIOUS → /mainliner63333.
 */
export default function Mainliner63334Page() {
  return (
    <MainlinerSlidePage
      slideId="633-34"
      title="Slide 633-34 - Bourbon Street"
      lead={
        '633-34 "Five Flags Bistro Bar" on Bourbon Street - reconstruction of New Orleans\' famous street of fun'
      }
      image={{
        src: "/images/mainliner/633-34.jpg",
        width: 264,
        height: 400,
        alt: '"Five Flags Bistro Bar" on Bourbon Street - reconstruction of New Orleans\' famous street of fun',
      }}
      previousHref="/mainliner63333"
      nextHref="/mainliner63335"
    />
  );
}
