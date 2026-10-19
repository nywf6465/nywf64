import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-44 - Dynamic Maturity — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-44 — Dynamic Maturity Pavilion sponsored by American Association of Retired Persons — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-44 (legacy mainliner55544.html).
 * Nav bar shows Page 45. NEXT → /mainliner55545; PREVIOUS → /mainliner55543.
 */
export default function Mainliner55544Page() {
  return (
    <MainlinerSlidePage
      slideId="555-44"
      title="Slide 555-44 - Dynamic Maturity"
      lead="555-44 Dynamic Maturity Pavilion sponsored by American Association of Retired Persons"
      image={{
        src: "/images/mainliner/555-44.jpg",
        width: 400,
        height: 265,
        alt: "Dynamic Maturity Pavilion sponsored by American Association of Retired Persons",
      }}
      previousHref="/mainliner55543"
      nextHref="/mainliner55545"
    />
  );
}
