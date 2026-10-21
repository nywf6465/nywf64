import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-46 - Sudan — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-46 — Sudan Pavilion - 1000-year old fresco of the Madonna is on view — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-46 (legacy mainliner63346.html).
 * Nav bar shows Page 47. NEXT → /mainliner63347; PREVIOUS → /mainliner63345.
 */
export default function Mainliner63346Page() {
  return (
    <MainlinerSlidePage
      slideId="633-46"
      title="Slide 633-46 - Sudan"
      lead="633-46 Sudan Pavilion - 1000-year old fresco of the Madonna is on view"
      image={{
        src: "/images/mainliner/633-46.jpg",
        width: 400,
        height: 267,
        alt: "Sudan Pavilion - 1000-year old fresco of the Madonna is on view",
      }}
      previousHref="/mainliner63345"
      nextHref="/mainliner63347"
    />
  );
}
