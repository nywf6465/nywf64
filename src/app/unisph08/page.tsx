import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { FilmstripPage } from "@/components/FilmstripPage";
import { UNISPH08_PART } from "@/data/unisph08Filmstrip";
import styles from "@/styles/filmstripPage.module.css";

export const metadata: Metadata = {
  title: "Filmstrip: UNISPHERE Biggest World on Earth — Unisphere — nywf64.com",
  description:
    "Soundtrack transcript and stills from United States Steel’s “UNISPHERE Biggest World on Earth” film — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere filmstrip — Part 1.
 * Body from legacy unisph08.html. Continues at /unisph08-02.
 */
export default function Unisph08Page() {
  const part = UNISPH08_PART;
  return (
    <FilmstripPage
      heroLabel="Unisphere"
      titleId="unisph08-title"
      title={part.title}
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph07"
      overviewHref="/unisphoverview"
      nextHref="/unisph09"
      filmContinueHref={part.filmContinueHref}
      intro={
        <>
          <p className={styles.introTitle}>
            &quot;UNISPHERE Biggest World on Earth&quot;
          </p>
          <p>
            In 1963, United States Steel commissioned a film to be created
            documenting the design and construction of Unisphere for the Fair.
            Approximately 15 minutes in length, the actual film is,
            unfortunately, too long to be presented as a film here. However, the
            soundtrack transcript and stills from &quot;Biggest World on
            Earth&quot; provide an excellent documentary of the building of
            Unisphere.
          </p>
        </>
      }
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
