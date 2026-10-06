import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { FilmstripPage } from "@/components/FilmstripPage";
import { UNISPH08_03_PART } from "@/data/unisph08Filmstrip";

export const metadata: Metadata = {
  title:
    "Filmstrip: UNISPHERE Biggest World on Earth (continued) — Unisphere — nywf64.com",
  description:
    "Soundtrack transcript and stills from United States Steel’s “UNISPHERE Biggest World on Earth” film (continued) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere filmstrip — Part 3.
 * Body from legacy unisph08-03.html.
 */
export default function Unisph0803Page() {
  const part = UNISPH08_03_PART;
  return (
    <FilmstripPage
      heroLabel="Unisphere"
      titleId="unisph08-03-title"
      title={part.title}
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph07"
      overviewHref="/unisph01"
      nextHref="/unisph09"
      filmBackHref={part.filmBackHref}
      filmContinueHref={part.filmContinueHref}
      frames={part.frames.map((frame) => ({
        image: {
          src: `/images/unisph08/${frame.file}`,
          width: frame.width,
          height: frame.height,
          alt: frame.alt,
        },
        caption: frame.caption,
      }))}
    />
  );
}
