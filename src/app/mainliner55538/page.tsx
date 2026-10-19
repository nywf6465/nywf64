import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-38 - Billy Graham — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-38 — Billy Graham Pavilion houses 400-seat theater, chapel and galleries — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-38 (legacy mainliner55538.html).
 * Nav bar shows Page 39. NEXT → /mainliner55539; PREVIOUS → /mainliner55537.
 */
export default function Mainliner55538Page() {
  return (
    <MainlinerSlidePage
      slideId="555-38"
      title="Slide 555-38 - Billy Graham"
      lead="555-38 Billy Graham Pavilion houses 400-seat theater, chapel and galleries"
      image={{
        src: "/images/mainliner/555-38.jpg",
        width: 400,
        height: 267,
        alt: "Billy Graham Pavilion houses 400-seat theater, chapel and galleries",
      }}
      previousHref="/mainliner55537"
      nextHref="/mainliner55539"
    />
  );
}
