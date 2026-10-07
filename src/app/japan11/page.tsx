import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { JapanSequencePage, type SequenceImage } from "@/components/JapanSequencePage";

export const metadata: Metadata = {
  title: "Brochure: SAKURA Odori — Japan — nywf64.com",
  description: "SAKURA Odori brochure scans — Japan pavilion.",
};

const JAPAN11_PAGES: SequenceImage[] = [
  {
    src: "/images/japan11/japan67.jpg",
    width: 260,
    height: 331,
  },
  {
    src: "/images/japan11/japan69.jpg",
    width: 260,
    height: 615,
  },
  {
    src: "/images/japan11/japan70.jpg",
    width: 290,
    height: 182,
  },
  {
    src: "/images/japan11/japan71.jpg",
    width: 290,
    height: 182,
  },
  {
    src: "/images/japan11/japan72.jpg",
    width: 290,
    height: 182,
  },
  {
    src: "/images/japan11/japan73.jpg",
    width: 590,
    height: 309,
  },
];

/** Body from legacy japan11.html. Adobe/scrap chrome omitted. */
export default function Japan11Page() {
  return (
    <JapanSequencePage
      heroLabel="Japan"
      titleId="japan11-title"
      title="Brochure: SAKURA Odori"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      images={JAPAN11_PAGES}
      previousHref="/japan10"
      overviewHref="/japanoverview"
      nextHref="/japan12"
    />
  );
}
