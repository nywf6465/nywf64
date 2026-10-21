import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-72 - Eastman Kodak — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-72 — World's largest outdoor photographic prints feature Eastman Kodak Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-72 (legacy mainliner63372.html).
 * Nav bar shows Page 73. NEXT → /mainliner63373; PREVIOUS → /mainliner63371.
 */
export default function Mainliner63372Page() {
  return (
    <MainlinerSlidePage
      slideId="633-72"
      title="Slide 633-72 - Eastman Kodak"
      lead={
        "633-72 World's largest outdoor photographic prints feature Eastman Kodak Pavilion"
      }
      image={{
        src: "/images/mainliner/633-72.jpg",
        width: 400,
        height: 267,
        alt: "World's largest outdoor photographic prints feature Eastman Kodak Pavilion",
      }}
      previousHref="/mainliner63371"
      nextHref="/mainliner63373"
    />
  );
}
