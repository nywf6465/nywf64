import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-61 - Vatican — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-61 — Stylized cross, "Communion of Saints", outside entrance of Vatican Pavilion — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-61 (legacy mainliner63361.html).
 * Nav bar shows Page 62. NEXT → /mainliner63362; PREVIOUS → /mainliner63360.
 */
export default function Mainliner63361Page() {
  return (
    <MainlinerSlidePage
      slideId="633-61"
      title="Slide 633-61 - Vatican"
      lead={
        '633-61 Stylized cross, "Communion of Saints", outside entrance of Vatican Pavilion'
      }
      image={{
        src: "/images/mainliner/633-61.jpg",
        width: 267,
        height: 400,
        alt: 'Stylized cross, "Communion of Saints", outside entrance of Vatican Pavilion',
      }}
      previousHref="/mainliner63360"
      nextHref="/mainliner63362"
    />
  );
}
