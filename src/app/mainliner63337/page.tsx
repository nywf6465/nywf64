import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-37 - Ireland — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-37 — Giant map of Ireland in entry court of Irish Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-37 (legacy mainliner63337.html).
 * Nav bar shows Page 38. NEXT → /mainliner63338; PREVIOUS → /mainliner63336.
 */
export default function Mainliner63337Page() {
  return (
    <MainlinerSlidePage
      slideId="633-37"
      title="Slide 633-37 - Ireland"
      lead="633-37 Giant map of Ireland in entry court of Irish Pavilion"
      image={{
        src: "/images/mainliner/633-37.jpg",
        width: 400,
        height: 267,
        alt: "Giant map of Ireland in entry court of Irish Pavilion",
      }}
      previousHref="/mainliner63336"
      nextHref="/mainliner63338"
    />
  );
}
