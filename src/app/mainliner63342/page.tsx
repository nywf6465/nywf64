import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-42 - Berlin — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-42 — Berlin's present and future are shown in privately sponsored Berlin Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-42 (legacy mainliner63342.html).
 * Nav bar shows Page 43. NEXT → /mainliner63343; PREVIOUS → /mainliner63341.
 */
export default function Mainliner63342Page() {
  return (
    <MainlinerSlidePage
      slideId="633-42"
      title="Slide 633-42 - Berlin"
      lead={
        "633-42 Berlin's present and future are shown in privately sponsored Berlin Pavilion"
      }
      image={{
        src: "/images/mainliner/633-42.jpg",
        width: 400,
        height: 267,
        alt: "Berlin's present and future are shown in privately sponsored Berlin Pavilion",
      }}
      previousHref="/mainliner63341"
      nextHref="/mainliner63343"
    />
  );
}
