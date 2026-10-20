import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-78 - Oklahoma — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-78 — Oklahoma's exhibits are shown in park with winding pathways, spacious lawns and pools — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-78 (legacy mainliner55578.html).
 * Nav bar shows Page 79. NEXT → /mainliner55579; PREVIOUS → /mainliner55577.
 */
export default function Mainliner55578Page() {
  return (
    <MainlinerSlidePage
      slideId="555-78"
      title="Slide 555-78 - Oklahoma"
      lead="555-78 Oklahoma's exhibits are shown in park with winding pathways, spacious lawns and pools"
      image={{
        src: "/images/mainliner/555-78.jpg",
        width: 267,
        height: 400,
        alt: "Oklahoma's exhibits are shown in park with winding pathways, spacious lawns and pools",
      }}
      previousHref="/mainliner55577"
      nextHref="/mainliner55579"
    />
  );
}
