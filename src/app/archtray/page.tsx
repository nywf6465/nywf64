import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArchNavChrome } from "@/components/ArchNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./archtray.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Slide Tray — The Architectural Series of Slides — nywf64.com",
  description:
    "Slide tray for The Architectural Series — over 100 Photo Lab slides of architectural renderings from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Legacy arch02 slide tray — thumbs arch5401…arch5470. */
const SLIDE_IDS = Array.from({ length: 70 }, (_, i) => 5401 + i);

/**
 * Architectural Series Slide Tray (legacy arch02.html).
 * Nav bar shows Page 1. No NEXT — return via PREVIOUS to overview.
 *
 * Stack: archhero → ArchNavChrome → navy title → tray → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function ArchTrayPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Architectural Series of Slides"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/arch/archhero.jpg"
            alt="The Architectural Series of Slides — 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArchNavChrome />

      <article className={styles.article} aria-labelledby="archtray-title">
        <header className={styles.titleBar}>
          <h1 id="archtray-title" className={styles.titleBarMain}>
            Slide Tray
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            To navigate the <strong>slide tray</strong>, simply click on any
            slide to be taken to a larger image of that slide. You may use your
            browser&apos;s <em>Back Button</em> to return to this tray to select
            another image or progress from larger image to larger image by using
            the <em>Slide Show</em> links on the navigation bar of the larger
            images.
          </p>

          <div className={styles.tray} role="list" aria-label="Slide tray">
            {SLIDE_IDS.map((id) => (
              <Link
                key={id}
                href={`/arch${id}`}
                className={styles.thumbLink}
                role="listitem"
                aria-label={`Slide ${id}`}
              >
                <Image
                  src={`/images/arch/${id}Small.jpg`}
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
        previousHref="/archoverview"
        explicitPrevious
        overviewHref="/archoverview"
        hideNext
      />
    </>
  );
}
