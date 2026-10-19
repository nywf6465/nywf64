import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-28 - Pepsi-Cola — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-28 — Pepsi-Cola Pavilion salutes children of the world — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-28 (legacy mainliner55528.html).
 * Nav bar shows Page 29. NEXT → /mainliner55529; PREVIOUS → /mainliner55527.
 */
export default function Mainliner55528Page() {
  return (
    <MainlinerSlidePage
      slideId="555-28"
      title="Slide 555-28 - Pepsi-Cola"
      lead="555-28 Pepsi-Cola Pavilion salutes children of the world"
      image={{
        src: "/images/mainliner/555-28.jpg",
        width: 273,
        height: 400,
        alt: "Pepsi-Cola Pavilion salutes children of the world",
      }}
      previousHref="/mainliner55527"
      nextHref="/mainliner55529"
    />
  );
}
