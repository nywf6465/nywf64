import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { JapanSequencePage, type SequenceImage } from "@/components/JapanSequencePage";

export const metadata: Metadata = {
  title: "1964 Pavilion Guide — Japan — nywf64.com",
  description: "1964 Japan pavilion guide scans.",
};

const JAPAN12_PAGES: SequenceImage[] = [
  {
    src: "/images/japan12/japan74.jpg",
    width: 300,
    height: 627,
  },
  {
    src: "/images/japan12/japan76.jpg",
    width: 150,
    height: 135,
  },
  {
    src: "/images/japan12/japan75.jpg",
    width: 600,
    height: 631,
  },
  {
    src: "/images/japan12/japan79.jpg",
    width: 215,
    height: 84,
  },
  {
    src: "/images/japan12/japan80.jpg",
    width: 215,
    height: 170,
  },
  {
    src: "/images/japan12/japan78.jpg",
    width: 215,
    height: 309,
  },
  {
    src: "/images/japan12/japan81.jpg",
    width: 215,
    height: 271,
  },
  {
    src: "/images/japan12/japan77.jpg",
    width: 215,
    height: 189,
  },
  {
    src: "/images/japan12/japan82.jpg",
    width: 215,
    height: 280,
  },
  {
    src: "/images/japan12/japan88.jpg",
    width: 215,
    height: 229,
  },
  {
    src: "/images/japan12/japan84.jpg",
    width: 215,
    height: 168,
  },
  {
    src: "/images/japan12/japan83.jpg",
    width: 215,
    height: 285,
  },
  {
    src: "/images/japan12/japan87.jpg",
    width: 215,
    height: 110,
  },
  {
    src: "/images/japan12/japan86.jpg",
    width: 215,
    height: 302,
  },
  {
    src: "/images/japan12/japan85.jpg",
    width: 215,
    height: 461,
  },
  {
    src: "/images/japan12/japan89.jpg",
    width: 600,
    height: 503,
  },
];

/** Body from legacy japan12.html. Adobe/scrap chrome omitted. */
export default function Japan12Page() {
  return (
    <JapanSequencePage
      heroLabel="Japan"
      titleId="japan12-title"
      title="1964 Pavilion Guide"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      images={JAPAN12_PAGES}
      previousHref="/japan11"
      overviewHref="/japanoverview"
      nextHref="/japan13"
    />
  );
}
