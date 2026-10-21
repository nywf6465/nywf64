import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-66 - Bell System — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-66 — Bell System Pavilion - upper story is gigantic "floating wing" resting on four pylons — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-66 (legacy mainliner63366.html).
 * Nav bar shows Page 67. NEXT → /mainliner63367; PREVIOUS → /mainliner63365.
 */
export default function Mainliner63366Page() {
  return (
    <MainlinerSlidePage
      slideId="633-66"
      title="Slide 633-66 - Bell System"
      lead={
        '633-66 Bell System Pavilion - upper story is gigantic "floating wing" resting on four pylons'
      }
      image={{
        src: "/images/mainliner/633-66.jpg",
        width: 400,
        height: 267,
        alt: 'Bell System Pavilion - upper story is gigantic "floating wing" resting on four pylons',
      }}
      previousHref="/mainliner63365"
      nextHref="/mainliner63367"
    />
  );
}
