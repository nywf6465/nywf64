import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-33 - DuPont — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-33 — Big circular DuPont Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-33 (legacy mainliner55533.html).
 * Nav bar shows Page 34. NEXT → /mainliner55534; PREVIOUS → /mainliner55532.
 */
export default function Mainliner55533Page() {
  return (
    <MainlinerSlidePage
      slideId="555-33"
      title="Slide 555-33 - DuPont"
      lead="555-33 Big circular DuPont Pavilion"
      image={{
        src: "/images/mainliner/555-33.jpg",
        width: 400,
        height: 274,
        alt: "Big circular DuPont Pavilion",
      }}
      previousHref="/mainliner55532"
      nextHref="/mainliner55534"
    />
  );
}
