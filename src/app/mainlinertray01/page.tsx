import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainlinerHero } from "@/components/MainlinerHero";
import { MainlinerNavChrome } from "@/components/MainlinerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./mainlinertray01.module.css";

export const metadata: Metadata = {
  title:
    "Slide Tray #1 - 555 Series — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "Slide Tray #1, the 555 Series, for the Blackhawk Films MAINLINER Vacation Series — 100 slides of the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SLIDES = Array.from({ length: 100 }, (_, index) => {
  const n = index + 1;
  const id = String(n).padStart(n === 100 ? 3 : 2, "0");
  return {
    id,
    href: `/mainliner555${n === 100 ? "100" : id}`,
    thumb: `/images/mainliner/555-${id}small.jpg`,
    label: `Slide 555-${id}`,
  };
});

/**
 * MAINLINER Slide Tray #1 (legacy mainliner02.html).
 * Nav bar shows Page 1. NEXT → /mainliner55501; PREVIOUS → /mainlineroverview.
 *
 * Stack: hero → MainlinerNavChrome → navy title → tray → Nav2Bar.
 */
export default function MainlinerTray01Page() {
  return (
    <>
      <MainlinerHero />

      <MainlinerNavChrome />

      <article className={styles.article} aria-labelledby="mainlinertray01-title">
        <header className={styles.titleBar}>
          <h1 id="mainlinertray01-title" className={styles.titleBarMain}>
            Slide Tray #1 - 555 Series
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
        previousHref="/mainlineroverview"
        explicitPrevious
        overviewHref="/mainlineroverview"
        nextHref="/mainliner55501"
      />
    </>
  );
}
