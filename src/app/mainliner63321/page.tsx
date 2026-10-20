import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-21 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-21 — Mammoth terrazzo motoring map in New York State pavilion with school group performing — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-21 (legacy mainliner63321.html).
 * Nav bar shows Page 22. NEXT → /mainliner63322; PREVIOUS → /mainliner63320.
 */
export default function Mainliner63321Page() {
  return (
    <MainlinerSlidePage
      slideId="633-21"
      title="Slide 633-21 - New York State"
      lead="633-21 Mammoth terrazzo motoring map in New York State pavilion with school group performing"
      image={{
        src: "/images/mainliner/633-21.jpg",
        width: 400,
        height: 267,
        alt: "Mammoth terrazzo motoring map in New York State pavilion with school group performing",
      }}
      previousHref="/mainliner63320"
      nextHref="/mainliner63322"
    />
  );
}
