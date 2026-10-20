import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-83 - Minnesota — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-83 — Seven giant panels joined together form one many-sided structure for Minnesota's exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-83 (legacy mainliner55583.html).
 * Nav bar shows Page 84. NEXT → /mainliner55584; PREVIOUS → /mainliner55582.
 */
export default function Mainliner55583Page() {
  return (
    <MainlinerSlidePage
      slideId="555-83"
      title="Slide 555-83 - Minnesota"
      lead="555-83 Seven giant panels joined together form one many-sided structure for Minnesota's exhibit"
      image={{
        src: "/images/mainliner/555-83.jpg",
        width: 400,
        height: 267,
        alt: "Seven giant panels joined together form one many-sided structure for Minnesota's exhibit",
      }}
      previousHref="/mainliner55582"
      nextHref="/mainliner55584"
    />
  );
}
