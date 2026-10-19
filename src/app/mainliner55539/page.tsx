import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-39 - United States — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-39 — 330-foot building of multi-colored glass - United States Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-39 (legacy mainliner55539.html).
 * Nav bar shows Page 40. NEXT → /mainliner55540; PREVIOUS → /mainliner55538.
 */
export default function Mainliner55539Page() {
  return (
    <MainlinerSlidePage
      slideId="555-39"
      title="Slide 555-39 - United States"
      lead="555-39 330-foot building of multi-colored glass - United States Pavilion"
      image={{
        src: "/images/mainliner/555-39.jpg",
        width: 400,
        height: 259,
        alt: "330-foot building of multi-colored glass - United States Pavilion",
      }}
      previousHref="/mainliner55538"
      nextHref="/mainliner55540"
    />
  );
}
