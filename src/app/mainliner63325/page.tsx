import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-25 - Maryland — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-25 — Maryland Pavilion features state's link to the sea — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-25 (legacy mainliner63325.html).
 * Nav bar shows Page 26. NEXT → /mainliner63326; PREVIOUS → /mainliner63324.
 */
export default function Mainliner63325Page() {
  return (
    <MainlinerSlidePage
      slideId="633-25"
      title="Slide 633-25 - Maryland"
      lead="633-25 Maryland Pavilion features state's link to the sea"
      image={{
        src: "/images/mainliner/633-25.jpg",
        width: 400,
        height: 267,
        alt: "Maryland Pavilion features state's link to the sea",
      }}
      previousHref="/mainliner63324"
      nextHref="/mainliner63326"
    />
  );
}
