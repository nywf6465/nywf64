import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-18 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-18 — Fair's tallest tower (226-feet) is part of New York State Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-18 (legacy mainliner55518.html).
 * Nav bar shows Page 19. NEXT → /mainliner55519; PREVIOUS → /mainliner55517.
 */
export default function Mainliner55518Page() {
  return (
    <MainlinerSlidePage
      slideId="555-18"
      title="Slide 555-18 - New York State"
      lead="555-18 Fair's tallest tower (226-feet) is part of New York State Pavilion"
      image={{
        src: "/images/mainliner/555-18.jpg",
        width: 272,
        height: 400,
        alt: "Fair's tallest tower (226-feet) is part of New York State Pavilion",
      }}
      previousHref="/mainliner55517"
      nextHref="/mainliner55519"
    />
  );
}
