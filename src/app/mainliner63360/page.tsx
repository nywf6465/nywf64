import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-60 - Belgian Village — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-60 — Belgian Village - more than 100 buildings comprise charming Flemish town of year 1700 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-60 (legacy mainliner63360.html).
 * Nav bar shows Page 61. NEXT → /mainliner63361; PREVIOUS → /mainliner63359.
 */
export default function Mainliner63360Page() {
  return (
    <MainlinerSlidePage
      slideId="633-60"
      title="Slide 633-60 - Belgian Village"
      lead="633-60 Belgian Village - more than 100 buildings comprise charming Flemish town of year 1700"
      image={{
        src: "/images/mainliner/633-60.jpg",
        width: 400,
        height: 267,
        alt: "Belgian Village - more than 100 buildings comprise charming Flemish town of year 1700",
      }}
      previousHref="/mainliner63359"
      nextHref="/mainliner63361"
    />
  );
}
