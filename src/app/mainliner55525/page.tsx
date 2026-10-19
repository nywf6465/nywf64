import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-25 - Bell System — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-25 — Bell Telephone Pavilion, Fountains of Fair, night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-25 (legacy mainliner55525.html).
 * Nav bar shows Page 26. NEXT → /mainliner55526; PREVIOUS → /mainliner55524.
 */
export default function Mainliner55525Page() {
  return (
    <MainlinerSlidePage
      slideId="555-25"
      title="Slide 555-25 - Bell System"
      lead="555-25 Bell Telephone Pavilion, Fountains of Fair, night"
      image={{
        src: "/images/mainliner/555-25.jpg",
        width: 400,
        height: 270,
        alt: "Bell Telephone Pavilion, Fountains of Fair, night",
      }}
      previousHref="/mainliner55524"
      nextHref="/mainliner55526"
    />
  );
}
