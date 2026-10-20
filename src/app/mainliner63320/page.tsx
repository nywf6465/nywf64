import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-20 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-20 — New York State pavilion with world's largest suspension roof — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-20 (legacy mainliner63320.html).
 * Nav bar shows Page 21. NEXT → /mainliner63321; PREVIOUS → /mainliner63319.
 */
export default function Mainliner63320Page() {
  return (
    <MainlinerSlidePage
      slideId="633-20"
      title="Slide 633-20 - New York State"
      lead="633-20 New York State pavilion with world's largest suspension roof"
      image={{
        src: "/images/mainliner/633-20.jpg",
        width: 267,
        height: 400,
        alt: "New York State pavilion with world's largest suspension roof",
      }}
      previousHref="/mainliner63319"
      nextHref="/mainliner63321"
    />
  );
}
