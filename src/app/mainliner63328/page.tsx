import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-28 - Illinois — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-28 — Illinois Pavilion houses largest collection of Lincolniana ever assembled — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-28 (legacy mainliner63328.html).
 * Nav bar shows Page 29. NEXT → /mainliner63329; PREVIOUS → /mainliner63327.
 */
export default function Mainliner63328Page() {
  return (
    <MainlinerSlidePage
      slideId="633-28"
      title="Slide 633-28 - Illinois"
      lead="633-28 Illinois Pavilion houses largest collection of Lincolniana ever assembled"
      image={{
        src: "/images/mainliner/633-28.jpg",
        width: 400,
        height: 267,
        alt: "Illinois Pavilion houses largest collection of Lincolniana ever assembled",
      }}
      previousHref="/mainliner63327"
      nextHref="/mainliner63329"
    />
  );
}
