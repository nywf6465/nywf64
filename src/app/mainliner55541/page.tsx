import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-41 - Berlin — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-41 — Berlin's present and future are shown in privately sponsored Berlin Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-41 (legacy mainliner55541.html).
 * Nav bar shows Page 42. NEXT → /mainliner55542; PREVIOUS → /mainliner55540.
 */
export default function Mainliner55541Page() {
  return (
    <MainlinerSlidePage
      slideId="555-41"
      title="Slide 555-41 - Berlin"
      lead="555-41 Berlin's present and future are shown in privately sponsored Berlin Pavilion"
      image={{
        src: "/images/mainliner/555-41.jpg",
        width: 400,
        height: 267,
        alt: "Berlin's present and future are shown in privately sponsored Berlin Pavilion",
      }}
      previousHref="/mainliner55540"
      nextHref="/mainliner55542"
    />
  );
}
