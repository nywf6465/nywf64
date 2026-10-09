import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { JapanSequencePage, type SequenceImage } from "@/components/JapanSequencePage";

export const metadata: Metadata = {
  title: "Pamphlet: Visit Japan at the New York World's Fair — Japan — nywf64.com",
  description: "Visit Japan at the New York World's Fair pamphlet scans — Japan pavilion.",
};

const JAPAN08_PAGES: SequenceImage[] = [
  {
    src: "/images/japan08/japan28.jpg",
    width: 900,
    height: 379,
  },
  {
    src: "/images/japan08/japan38.jpg",
    width: 300,
    height: 388,
  },
  {
    src: "/images/japan08/japan39.jpg",
    width: 200,
    height: 136,
  },
  {
    src: "/images/japan08/japan37.jpg",
    width: 300,
    height: 388,
  },
  {
    src: "/images/japan08/japan31.jpg",
    width: 600,
    height: 118,
  },
  {
    src: "/images/japan08/japan30.jpg",
    width: 300,
    height: 119,
  },
  {
    src: "/images/japan08/japan29.jpg",
    width: 272,
    height: 220,
  },
  {
    src: "/images/japan08/japan32.jpg",
    width: 272,
    height: 71,
  },
  {
    src: "/images/japan08/japan34.jpg",
    width: 272,
    height: 218,
  },
  {
    src: "/images/japan08/japan33.jpg",
    width: 272,
    height: 217,
  },
  {
    src: "/images/japan08/japan35.jpg",
    width: 272,
    height: 45,
  },
  {
    src: "/images/japan08/japan36.jpg",
    width: 272,
    height: 219,
  },
];

/** Body from legacy japan08.html. Adobe/scrap chrome omitted. */
export default function Japan08Page() {
  return (
    <JapanSequencePage
      heroLabel="Japan"
      titleId="japan08-title"
      title="Pamphlet: Visit Japan at the New York World's Fair"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      images={JAPAN08_PAGES}
      previousHref="/japan07"
      overviewHref="/japanoverview"
      nextHref="/japan09"
    />
  );
}
