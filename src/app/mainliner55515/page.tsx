import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-15 - Sinclair — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-15 — Life as it existed 165 million years ago is re-created in Sinclair's \"Dinoland\" — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-15 (legacy mainliner55515.html).
 * Nav bar shows Page 16. NEXT → /mainliner55516; PREVIOUS → /mainliner55514.
 */
export default function Mainliner55515Page() {
  return (
    <MainlinerSlidePage
      slideId="555-15"
      title="Slide 555-15 - Sinclair"
      lead="555-15 Life as it existed 165 million years ago is re-created in Sinclair's \"Dinoland\""
      image={{
        src: "/images/mainliner/555-15.jpg",
        width: 400,
        height: 272,
        alt: "Life as it existed 165 million years ago is re-created in Sinclair's \"Dinoland\"",
      }}
      previousHref="/mainliner55514"
      nextHref="/mainliner55516"
    />
  );
}
