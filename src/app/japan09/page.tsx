import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { JapanSequencePage, type SequenceImage } from "@/components/JapanSequencePage";

export const metadata: Metadata = {
  title: "Pamphlet: Japan — Japan — nywf64.com",
  description: "Japan pavilion pamphlet scans — 1964/1965 New York World's Fair.",
};

const JAPAN09_PAGES: SequenceImage[] = [
  {
    src: "/images/japan09/japan44.jpg",
    width: 430,
    height: 615,
  },
  {
    src: "/images/japan09/japan45.jpg",
    width: 430,
    height: 620,
  },
  {
    src: "/images/japan09/japan46.jpg",
    width: 430,
    height: 620,
  },
  {
    src: "/images/japan09/japan47.jpg",
    width: 890,
    height: 342,
  },
  {
    src: "/images/japan09/japan48.jpg",
    width: 590,
    height: 385,
  },
  {
    src: "/images/japan09/japan49.jpg",
    width: 290,
    height: 227,
  },
  {
    src: "/images/japan09/japan50.jpg",
    width: 290,
    height: 227,
  },
  {
    src: "/images/japan09/japan51.jpg",
    width: 290,
    height: 227,
  },
  {
    src: "/images/japan09/japan52.jpg",
    width: 290,
    height: 234,
  },
  {
    src: "/images/japan09/japan53.jpg",
    width: 290,
    height: 287,
  },
  {
    src: "/images/japan09/japan54.jpg",
    width: 270,
    height: 342,
  },
  {
    src: "/images/japan09/japan59.jpg",
    width: 190,
    height: 189,
  },
  {
    src: "/images/japan09/japan58.jpg",
    width: 290,
    height: 195,
  },
  {
    src: "/images/japan09/japan57.jpg",
    width: 390,
    height: 293,
  },
  {
    src: "/images/japan09/japan55a.jpg",
    width: 401,
    height: 627,
  },
  {
    src: "/images/japan09/japan55b.jpg",
    width: 499,
    height: 627,
  },
  {
    src: "/images/japan09/japan66.jpg",
    width: 190,
    height: 183,
  },
  {
    src: "/images/japan09/japan68.jpg",
    width: 190,
    height: 49,
  },
  {
    src: "/images/japan09/japan64.jpg",
    width: 190,
    height: 189,
  },
  {
    src: "/images/japan09/japan63.jpg",
    width: 290,
    height: 169,
  },
  {
    src: "/images/japan09/japan56.jpg",
    width: 900,
    height: 324,
  },
  {
    src: "/images/japan09/japan60.jpg",
    width: 490,
    height: 389,
  },
  {
    src: "/images/japan09/japan61.jpg",
    width: 240,
    height: 306,
  },
  {
    src: "/images/japan09/japan62.jpg",
    width: 240,
    height: 237,
  },
  {
    src: "/images/japan09/japan65.jpg",
    width: 430,
    height: 616,
  },
];

/** Body from legacy japan09.html. Adobe/scrap chrome omitted. */
export default function Japan09Page() {
  return (
    <JapanSequencePage
      heroLabel="Japan"
      titleId="japan09-title"
      title="Pamphlet: Japan"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      images={JAPAN09_PAGES}
      previousHref="/japan08"
      overviewHref="/japanoverview"
      nextHref="/japan10"
    />
  );
}
