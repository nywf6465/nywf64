import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-23 - Maryland — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-23 — Maryland Pavilion - features state's link to the sea — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-23 (legacy mainliner55523.html).
 * Nav bar shows Page 24. NEXT → /mainliner55524; PREVIOUS → /mainliner55522.
 */
export default function Mainliner55523Page() {
  return (
    <MainlinerSlidePage
      slideId="555-23"
      title="Slide 555-23 - Maryland"
      lead="555-23 Maryland Pavilion - features state's link to the sea"
      image={{
        src: "/images/mainliner/555-23.jpg",
        width: 400,
        height: 272,
        alt: "Maryland Pavilion - features state's link to the sea",
      }}
      previousHref="/mainliner55522"
      nextHref="/mainliner55524"
    />
  );
}
