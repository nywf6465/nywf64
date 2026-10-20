import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-08 - U.S. Space Park — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-08 — Part of U.S. Space Park exhibit sponsored by National Aeronautics and Space Administration — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-08 (legacy mainliner63308.html).
 * Nav bar shows Page 9. NEXT → /mainliner63309; PREVIOUS → /mainliner63307.
 */
export default function Mainliner63308Page() {
  return (
    <MainlinerSlidePage
      slideId="633-08"
      title="Slide 633-08 - U.S. Space Park"
      lead="633-08 Part of U.S. Space Park exhibit sponsored by National Aeronautics and Space Administration"
      image={{
        src: "/images/mainliner/633-08.jpg",
        width: 400,
        height: 270,
        alt: "Part of U.S. Space Park exhibit sponsored by National Aeronautics and Space Administration",
      }}
      previousHref="/mainliner63307"
      nextHref="/mainliner63309"
    />
  );
}
