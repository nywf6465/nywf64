import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { JapanSequencePage, type SequenceImage } from "@/components/JapanSequencePage";

export const metadata: Metadata = {
  title: "1965 Pavilion Guide — Japan — nywf64.com",
  description: "1965 Japan pavilion guide scans.",
};

const JAPAN13_PAGES: SequenceImage[] = [
  {
    src: "/images/japan13/japan90.jpg",
    width: 300,
    height: 627,
  },
  {
    src: "/images/japan13/japan91.jpg",
    width: 600,
    height: 618,
  },
  {
    src: "/images/japan13/japan92.jpg",
    width: 235,
    height: 187,
  },
  {
    src: "/images/japan13/japan93.jpg",
    width: 235,
    height: 120,
  },
  {
    src: "/images/japan13/japan94.jpg",
    width: 235,
    height: 160,
  },
  {
    src: "/images/japan13/japan95.jpg",
    width: 235,
    height: 11,
  },
  {
    src: "/images/japan13/japan96.jpg",
    width: 235,
    height: 312,
  },
  {
    src: "/images/japan13/japan97.jpg",
    width: 235,
    height: 228,
  },
  {
    src: "/images/japan13/japan98.jpg",
    width: 235,
    height: 389,
  },
  {
    src: "/images/japan13/japan99.jpg",
    width: 235,
    height: 10,
  },
  {
    src: "/images/japan13/japan100.jpg",
    width: 235,
    height: 10,
  },
  {
    src: "/images/japan13/japan105.jpg",
    width: 235,
    height: 215,
  },
  {
    src: "/images/japan13/japan101.jpg",
    width: 235,
    height: 82,
  },
  {
    src: "/images/japan13/japan102.jpg",
    width: 215,
    height: 175,
  },
  {
    src: "/images/japan13/japan103.jpg",
    width: 235,
    height: 100,
  },
  {
    src: "/images/japan13/japan104.jpg",
    width: 235,
    height: 83,
  },
  {
    src: "/images/japan13/japan106.jpg",
    width: 235,
    height: 371,
  },
  {
    src: "/images/japan13/japan107.jpg",
    width: 235,
    height: 150,
  },
  {
    src: "/images/japan13/japan108.jpg",
    width: 235,
    height: 84,
  },
  {
    src: "/images/japan13/japan109.jpg",
    width: 235,
    height: 254,
  },
  {
    src: "/images/japan13/japan110.jpg",
    width: 215,
    height: 337,
  },
  {
    src: "/images/japan13/japan111.jpg",
    width: 235,
    height: 256,
  },
  {
    src: "/images/japan13/japan112.jpg",
    width: 235,
    height: 276,
  },
  {
    src: "/images/japan13/japan113.jpg",
    width: 235,
    height: 367,
  },
  {
    src: "/images/japan13/japan114.jpg",
    width: 235,
    height: 213,
  },
  {
    src: "/images/japan13/japan115.jpg",
    width: 235,
    height: 45,
  },
  {
    src: "/images/japan13/japan116.jpg",
    width: 235,
    height: 72,
  },
  {
    src: "/images/japan13/japan117.jpg",
    width: 215,
    height: 271,
  },
  {
    src: "/images/japan13/japan120.jpg",
    width: 235,
    height: 223,
  },
  {
    src: "/images/japan13/japan118.jpg",
    width: 235,
    height: 275,
  },
  {
    src: "/images/japan13/japan119.jpg",
    width: 235,
    height: 56,
  },
  {
    src: "/images/japan13/japan121.jpg",
    width: 235,
    height: 591,
  },
];

/** Body from legacy japan13.html. Adobe/scrap chrome omitted. */
export default function Japan13Page() {
  return (
    <JapanSequencePage
      heroLabel="Japan"
      titleId="japan13-title"
      title="1965 Pavilion Guide"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      images={JAPAN13_PAGES}
      previousHref="/japan12"
      overviewHref="/japanoverview"
      nextHref="/japan14"
    />
  );
}
