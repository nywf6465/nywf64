import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-21 - Illinois — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-21 — Illinois exhibit houses largest collection of Lincolniana ever assembile — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-21 (legacy mainliner55521.html).
 * Nav bar shows Page 22. NEXT → /mainliner55522; PREVIOUS → /mainliner55520.
 */
export default function Mainliner55521Page() {
  return (
    <MainlinerSlidePage
      slideId="555-21"
      title="Slide 555-21 - Illinois"
      lead="555-21 Illinois exhibit houses largest collection of Lincolniana ever assembile"
      image={{
        src: "/images/mainliner/555-21.jpg",
        width: 400,
        height: 270,
        alt: "Illinois exhibit houses largest collection of Lincolniana ever assembile",
      }}
      previousHref="/mainliner55520"
      nextHref="/mainliner55522"
    />
  );
}
