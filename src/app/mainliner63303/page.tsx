import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-03 - Glide-a-Ride — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-03 — One of Fair's transportation fleet of Greyhound Glide-a-ride trains — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-03 (legacy mainliner63303.html).
 * Nav bar shows Page 4. NEXT → /mainliner63304; PREVIOUS → /mainliner63302.
 */
export default function Mainliner63303Page() {
  return (
    <MainlinerSlidePage
      slideId="633-03"
      title="Slide 633-03 - Glide-a-Ride"
      lead="633-03 One of Fair's transportation fleet of Greyhound Glide-a-ride trains"
      image={{
        src: "/images/mainliner/633-03.jpg",
        width: 400,
        height: 269,
        alt: "One of Fair's transportation fleet of Greyhound Glide-a-ride trains",
      }}
      previousHref="/mainliner63302"
      nextHref="/mainliner63304"
    />
  );
}
