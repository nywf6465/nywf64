import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./travelers06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Photograph Album: Travelers' Promotional Slideshow — Travelers Insurance — nywf64.com",
  description:
    "Travelers Insurance promotional slideshow photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Slide order matches legacy travelers06.html thumb grid (full-size trvlrs58–72). */
const SLIDES: { src: string; alt: string }[] = [
  { src: "/images/travelers06/trvlrs59.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs61.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs60.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs58.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs62.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs63.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs64.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs65.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs66.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs67.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs68.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs69.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs70.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs71.jpg", alt: "Travelers promotional slide" },
  { src: "/images/travelers06/trvlrs72.jpg", alt: "Travelers promotional slide" },
];

const SLIDE_WIDTH = 400;
const SLIDE_HEIGHT = 267;

/**
 * Travelers promotional slideshow — all full slides in one grey tray.
 * Body from legacy travelers06.html (per-slide subpages omitted).
 */
export default function Travelers06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Travelers Insurance">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/travelersoverview/hero-banner.jpg"
            alt="Travelers Insurance at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TravelersNavChrome />

      <article className={styles.article} aria-labelledby="travelers06-title">
        <header className={styles.titleBar}>
          <h1 className={styles.titleBarMain} id="travelers06-title">
            Photograph Album: Travelers&apos; Promotional Slideshow
          </h1>
        </header>

        <div className={styles.bodyInner}>
          <div className={styles.tray}>
            <p className={styles.instruction}>
              To navigate the <strong>slide tray</strong>, simply click on any
              slide to be taken to a larger image of that slide. You may use your
              browser&apos;s <em>Back Button</em> to return to this tray to
              select another image or progress from larger image to larger image
              by using the <em>Slide Show</em> links on the navigation bar of
              the larger images.
            </p>
            <div className={styles.slideGrid}>
              {SLIDES.map((slide) => (
                <figure key={slide.src} className={styles.slideCard}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={SLIDE_WIDTH}
                    height={SLIDE_HEIGHT}
                    sizes="(max-width: 720px) 100vw, 400px"
                    className={styles.slideArt}
                    unoptimized
                  />
                </figure>
              ))}
            </div>
            <p className={styles.footnote}>
              Webpage 2017 nywf64.com - NO Unauthorized Reproduction is Permitted
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers05"
        overviewHref="/travelersoverview"
        nextHref="/travelers07"
      />
    </>
  );
}
