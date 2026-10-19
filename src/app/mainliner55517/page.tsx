import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-17 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-17 — New York State Pavilion with world's largest suspension roof — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-17 (legacy mainliner55517.html).
 * Nav bar shows Page 18. NEXT → /mainliner55518; PREVIOUS → /mainliner55516.
 */
export default function Mainliner55517Page() {
  return (
    <MainlinerSlidePage
      slideId="555-17"
      title="Slide 555-17 - New York State"
      lead="555-17 New York State Pavilion with world's largest suspension roof"
      image={{
        src: "/images/mainliner/555-17.jpg",
        width: 400,
        height: 272,
        alt: "New York State Pavilion with world's largest suspension roof",
      }}
      previousHref="/mainliner55516"
      nextHref="/mainliner55518"
    />
  );
}
