import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PhotoLabHero } from "@/components/PhotoLabHero";
import { PhotoLabNavChrome } from "@/components/PhotoLabNavChrome";
import { PHOTOLAB_TRAY1_IDS } from "@/data/photolabSlides";
import styles from "./photolabtray01.module.css";

export const metadata: Metadata = {
  title: "Slide Tray #1 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Slide Tray #1 for the Photo Lab Slide Set — slides 5601 through 5650 of the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SLIDES = PHOTOLAB_TRAY1_IDS.map((id) => ({
  id,
  href: `/photolab${id}`,
  thumb: `/images/photolab/${id}small.jpg`,
  label: `Slide ${id}`,
}));

/**
 * Photo Lab Slide Tray #1 (legacy photolab02.html).
 * Nav bar shows Page 1. NEXT → /photolab5601; PREVIOUS → /photolaboverview.
 *
 * Stack: photolab hero → PhotoLabNavChrome → navy title → tray → Nav2Bar.
 */
export default function PhotoLabTray01Page() {
  return (
    <>
      <PhotoLabHero />

      <PhotoLabNavChrome />

      <article className={styles.article} aria-labelledby="photolabtray01-title">
        <header className={styles.titleBar}>
          <h1 id="photolabtray01-title" className={styles.titleBarMain}>
            Slide Tray #1
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
        nextHref="/photolab5601"
      />
    </>
  );
}
