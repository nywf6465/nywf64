import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import {
  JapanSequencePage,
  type SequenceImage,
} from "@/components/JapanSequencePage";

export const metadata: Metadata = {
  title: "Groundbreaking — Japan — nywf64.com",
  description:
    "Groundbreaking ceremony for the Japan Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

const IMAGES: SequenceImage[] = [
  {
    src: "/images/japan06/japan23.jpg",
    width: 600,
    height: 408,
    alt: "Shinto purification rites at Japan Pavilion groundbreaking",
    caption: (
      <>
        Susumu Yoshida, Shinto Priest, performs the Shinto rites of purification
        upon the ground where the Japan Pavilion is to be built
      </>
    ),
    source: "SOURCE: Groundbreaking Brochure, The Japan Pavilion",
  },
  {
    src: "/images/japan06/japan25.jpg",
    width: 600,
    height: 377,
    alt: "Japanese Exhibitors' Association staff with Robert Moses",
    caption: (
      <>
        Staff members of the Japanese Exhibitors&apos; Association with Robert
        Moses, Fair president, and Gates Davison of the Fair&apos;s International
        Exhibits staff. Front row: (left to right) Yoshiji Kanatomi, executive
        vice president, Robert Moses, Kiyoshi Makita, vice president; standing:
        Gates Davison; Herbert W. Newman, general counsel, the Thinking
        Corporation of New York; Nori Sinoto, president of the Thinking
        Corporation of New York.
      </>
    ),
  },
  {
    src: "/images/japan06/japan24.jpg",
    width: 600,
    height: 383,
    alt: "Official groundbreaking for the Japan Pavilion",
    caption: (
      <>
        The first shovels of earth are lifted at the official groundbreaking for
        the Japan Pavilion. Left to right: Susumu Yoshida, Shinto Priest; Robert
        Moses, Fair president; Yoshiji Kanatomi, executive vice president of the
        Japanese Exhibitors Association; Mitsuo Kimura, director of Japan External
        Trade Organization and Consul General Mashahide Kanayama.
      </>
    ),
  },
  {
    src: "/images/japan06/japan26.jpg",
    width: 300,
    height: 279,
    alt: "Japanese wave motif and calligraphy JAPAN",
    caption: <>Japanese wave motif and calligraphy &quot;JAPAN&quot;</>,
  },
  {
    src: "/images/japan06/japan27.jpg",
    width: 300,
    height: 354,
    alt: "Japan Pavilion map motif",
  },
];

/** Body from legacy japan06.html — remarks omitted; photographs and captions preserved. */
export default function Japan06Page() {
  return (
    <JapanSequencePage
      heroLabel="Japan"
      titleId="japan06-title"
      title="Groundbreaking"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      images={IMAGES}
      topSource={
        <>
          Following is the transcription of remarks made by Japanese and
          World&apos;s Fair officials at the groundbreaking for the Japan
          Pavilion, New York World&apos;s Fair, Monday, April 15, 1963. (Full
          remarks appear in the legacy Groundbreaking Brochure.)
        </>
      }
      previousHref="/japan05"
      nextHref="/japan07"
    />
  );
}
