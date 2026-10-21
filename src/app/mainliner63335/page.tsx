import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-35 - Thailand — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-35 — Main building of Thailand is ornate 18th Century Buddhist shrine — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-35 (legacy mainliner63335.html).
 * Nav bar shows Page 36. NEXT → /mainliner63336; PREVIOUS → /mainliner63334.
 */
export default function Mainliner63335Page() {
  return (
    <MainlinerSlidePage
      slideId="633-35"
      title="Slide 633-35 - Thailand"
      lead="633-35 Main building of Thailand is ornate 18th Century Buddhist shrine"
      image={{
        src: "/images/mainliner/633-35.jpg",
        width: 400,
        height: 267,
        alt: "Main building of Thailand is ornate 18th Century Buddhist shrine",
      }}
      previousHref="/mainliner63334"
      nextHref="/mainliner63336"
    />
  );
}
