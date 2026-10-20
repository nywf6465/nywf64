import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-13 - U.S. Rubber — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-13 — Twenty-four gondolas whirl around U.S. Rubber's 80-foot whitewall tire — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-13 (legacy mainliner63313.html).
 * Nav bar shows Page 14. NEXT → /mainliner63314; PREVIOUS → /mainliner63312.
 */
export default function Mainliner63313Page() {
  return (
    <MainlinerSlidePage
      slideId="633-13"
      title="Slide 633-13 - U.S. Rubber"
      lead="633-13 Twenty-four gondolas whirl around U.S. Rubber's 80-foot whitewall tire"
      image={{
        src: "/images/mainliner/633-13.jpg",
        width: 268,
        height: 400,
        alt: "Twenty-four gondolas whirl around U.S. Rubber's 80-foot whitewall tire",
      }}
      previousHref="/mainliner63312"
      nextHref="/mainliner63314"
    />
  );
}
