import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-55 - Malaysia — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-55 — Malaysia Pavilion where films and handicrafts demonstrations acquaint visitors with the country — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-55 (legacy mainliner63355.html).
 * Nav bar shows Page 56. NEXT → /mainliner63356; PREVIOUS → /mainliner63354.
 */
export default function Mainliner63355Page() {
  return (
    <MainlinerSlidePage
      slideId="633-55"
      title="Slide 633-55 - Malaysia"
      lead="633-55 Malaysia Pavilion where films and handicrafts demonstrations acquaint visitors with the country"
      image={{
        src: "/images/mainliner/633-55.jpg",
        width: 400,
        height: 267,
        alt: "Malaysia Pavilion where films and handicrafts demonstrations acquaint visitors with the country",
      }}
      previousHref="/mainliner63354"
      nextHref="/mainliner63356"
    />
  );
}
