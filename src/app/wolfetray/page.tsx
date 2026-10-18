import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WolfeNavChrome } from "@/components/WolfeNavChrome";
import { WOLFE_SLIDE_IDS } from "@/data/wolfeSlides";
import styles from "./wolfetray.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Slide Tray — The Wolfe Worldwide Films Slide Series — nywf64.com",
  description:
    "Slide tray for Wolfe Worldwide Films — nearly 100 color slides of the 1964/1965 New York World’s Fair from the Bradd Schiffman collection on nywf64.com.",
};

const SLIDES = WOLFE_SLIDE_IDS.map((id) => ({
  key: id,
  href: `/wolfe${id}`,
  thumb: `/images/wolfe/${id}Small.jpg`,
  label: `Slide ${id}`,
}));

/**
 * Wolfe Worldwide Films Slide Tray (legacy wolfe02.html).
 * Nav bar shows Page 1. NEXT → /wolfe79000; PREVIOUS → /wolfeoverview.
 *
 * Stack: wolfehero → WolfeNavChrome → navy title → tray → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function WolfeTrayPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Wolfe Worldwide Films Slide Series"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wolfe/wolfehero.jpg"
            alt="The Wolfe Worldwide Films Slide Series — 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WolfeNavChrome />

      <article className={styles.article} aria-labelledby="wolfetray-title">
        <header className={styles.titleBar}>
          <h1 id="wolfetray-title" className={styles.titleBarMain}>
            Slide Tray
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
                key={slide.key}
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
        previousHref="/wolfeoverview"
        explicitPrevious
        overviewHref="/wolfeoverview"
        nextHref="/wolfe79000"
      />
    </>
  );
}
