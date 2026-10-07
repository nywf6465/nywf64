import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import {
  JapanSequencePage,
  type SequenceImage,
} from "@/components/JapanSequencePage";

export const metadata: Metadata = {
  title:
    "Stone Crazy: A World's Fair Legacy / A World's Fair Mystery — Japan — nywf64.com",
  description:
    "Stone Crazy — Masayuki Nagare and the Japan Pavilion stone wall — nywf64.com.",
};

const IMAGES: SequenceImage[] = [
  {
    src: "/images/japan14/japan05.jpg",
    width: 159,
    height: 261,
    alt: "Masayuki Nagare timeline",
  },
  {
    src: "/images/japan14/japan08.jpg",
    width: 600,
    height: 519,
    alt: "Geisha dance in front of Stone Crazy wall",
    caption: (
      <>
        Geisha Dance and Music in front of <em>Stone Crazy</em> sculptured wall
        of the Pavilion of Japan
      </>
    ),
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan09.jpg",
    width: 600,
    height: 450,
    alt: "Stone Crazy wall detail",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan11.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion stone wall",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan10.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan12.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan13.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan14.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan15.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan16.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan18.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan19.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan17.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan42.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan40.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan43.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
  {
    src: "/images/japan14/japan41.jpg",
    width: 600,
    height: 450,
    alt: "Japan Pavilion",
    source: "SOURCE: View Master, International Area Packet A 673, Reel Two",
  },
];

/** Essay page — legacy japan14.html (timeline + Nagare sources; typos preserved in menu title). */
export default function Japan14Page() {
  return (
    <JapanSequencePage
      heroLabel="Japan"
      titleId="japan14-title"
      title={
        <>
          <em>Stone Crazy: A World&apos;s Fair Legacy</em> / A World&apos;s Fair
          Mystery
        </>
      }
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
          SOURCE: Official Website, Masayuki Nagare — timeline and essay text from
          legacy japan14.html (black timeline table and Wikipedia excerpt not
          reproduced as separate layout blocks).
        </>
      }
      previousHref="/japan13"
      nextHref="/japanoverview"
    />
  );
}
