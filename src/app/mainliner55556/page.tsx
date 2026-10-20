import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-56 - Japan — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-56 — Sculptured wall of Japan's Pavilion (600 tons of stone were imported from Japan) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-56 (legacy mainliner55556.html).
 * Nav bar shows Page 57. NEXT → /mainliner55557; PREVIOUS → /mainliner55555.
 */
export default function Mainliner55556Page() {
  return (
    <MainlinerSlidePage
      slideId="555-56"
      title="Slide 555-56 - Japan"
      lead="555-56 Sculptured wall of Japan's Pavilion (600 tons of stone were imported from Japan)"
      image={{
        src: "/images/mainliner/555-56.jpg",
        width: 267,
        height: 400,
        alt: "Sculptured wall of Japan's Pavilion (600 tons of stone were imported from Japan)",
      }}
      previousHref="/mainliner55555"
      nextHref="/mainliner55557"
    />
  );
}
