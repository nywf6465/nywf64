import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PhotoLabHero } from "@/components/PhotoLabHero";
import { PhotoLabNavChrome } from "@/components/PhotoLabNavChrome";
import { PHOTOLAB_TRAY2_IDS } from "@/data/photolabSlides";
import styles from "../photolabtray01/photolabtray01.module.css";

export const metadata: Metadata = {
  title: "Slide Tray #2 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Slide Tray #2 for the Photo Lab Slide Set — slides 5471 through 5540 of the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SLIDES = PHOTOLAB_TRAY2_IDS.map((id) => ({
  id,
  href: `/photolab${id}`,
  thumb: `/images/photolab/${id}small.jpg`,
  label: `Slide ${id}`,
}));

/**
 * Photo Lab Slide Tray #2 (legacy photolab03.html).
 * Nav bar shows Page 1. NEXT → /photolab5471; PREVIOUS → /photolaboverview.
 *
 * Stack: photolab hero → PhotoLabNavChrome → navy title → tray → Nav2Bar.
 */
export default function PhotoLabTray02Page() {
  return (
    <>
      <PhotoLabHero />

      <PhotoLabNavChrome />

      <article className={styles.article} aria-labelledby="photolabtray02-title">
        <header className={styles.titleBar}>
          <h1 id="photolabtray02-title" className={styles.titleBarMain}>
            Slide Tray #2
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            To navigate the slide tray, simply click on any slide to be taken to
            a larger image of that slide. You may use the link on the Navigation
            Menu to return to this slide tray at any time. To progress from
            slide to slide, select NEXT in the navigation bar. PREVIOUS will
            return you to the prior slide.
          </p>

          <div className={styles.tray} role="list" aria-label="Slide tray">
            {SLIDES.map((slide) => (
              <Link
                key={slide.id}
                href={slide.href}
                className={styles.thumbLink}
                role="listitem"
                aria-label={slide.label}
              >
                <Image
                  src={slide.thumb}
                  alt=""
                  width={100}
                  height={100}
                  className={styles.thumb}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/photolaboverview"
        explicitPrevious
        overviewHref="/photolaboverview"
        nextHref="/photolab5471"
      />
    </>
  );
}
