import type { ReactNode } from "react";
import Image from "next/image";
import { ViewMastersHero } from "@/components/ViewMastersHero";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/viewMastersGalleryPage.module.css";

export type ViewMasterSlide = {
  /** Display number as shown on the legacy page (e.g. "01", "10"). */
  number: string;
  caption: string;
  /** When true, the word “Cover” at the start of the caption is red. */
  coverAccent?: boolean;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ViewMasterReel = {
  label: string;
  slides: ViewMasterSlide[];
};

export type ViewMastersGalleryPageProps = {
  title: string;
  titleId?: string;
  packetName: string;
  packetNo: string;
  cover: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  reels: ViewMasterReel[];
  nav: ReactNode;
  previousHref: string;
  nextHref?: string;
  overviewHref?: string;
  hideNext?: boolean;
};

const REEL_ICON = {
  src: "/images/viewmasters/reel.jpg",
  width: 100,
  height: 100,
} as const;

/**
 * View-Masters Reels gallery (legacy `vm02.html`–`vm07.html`).
 * Stack: ViewMastersHero → nav chrome → navy title → packet header +
 * black caption/image rows by reel → Nav2Bar.
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export function ViewMastersGalleryPage({
  title,
  titleId = "viewmasters-title",
  packetName,
  packetNo,
  cover,
  reels,
  nav,
  previousHref,
  nextHref,
  overviewHref,
  hideNext = false,
}: ViewMastersGalleryPageProps) {
  const [firstReel, ...laterReels] = reels;

  return (
    <>
      <ViewMastersHero />

      {nav}

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          {firstReel ? (
            <div className={styles.packetHeader}>
              <div className={styles.packetMeta}>
                <p className={styles.packetName}>{packetName}</p>
                <p className={styles.packetNo}>Packet No. {packetNo}</p>
              </div>
              <div className={styles.packetMedia}>
                <div className={styles.coverFrame}>
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    width={cover.width}
                    height={cover.height}
                    className={styles.cover}
                    unoptimized
                  />
                </div>
                <div className={styles.reelBadge}>
                  <Image
                    src={REEL_ICON.src}
                    alt="View-Master Reel"
                    width={REEL_ICON.width}
                    height={REEL_ICON.height}
                    className={styles.reelIcon}
                    unoptimized
                  />
                  <p className={styles.reelLabel}>{firstReel.label}</p>
                </div>
              </div>
            </div>
          ) : null}

          <div className={styles.rows}>
            {firstReel
              ? firstReel.slides.map((slide) => (
                  <SlideRow key={`${firstReel.label}-${slide.number}`} slide={slide} />
                ))
              : null}

            {laterReels.map((reel) => (
              <div key={reel.label}>
                <div className={styles.reelDivider}>
                  <div className={styles.reelBadge}>
                    <Image
                      src={REEL_ICON.src}
                      alt="View-Master Reel"
                      width={REEL_ICON.width}
                      height={REEL_ICON.height}
                      className={styles.reelIcon}
                      unoptimized
                    />
                    <p className={styles.reelLabel}>{reel.label}</p>
                  </div>
                </div>
                {reel.slides.map((slide) => (
                  <SlideRow key={`${reel.label}-${slide.number}`} slide={slide} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref={overviewHref}
        nextHref={nextHref}
        hideNext={hideNext}
      />
    </>
  );
}

function SlideRow({ slide }: { slide: ViewMasterSlide }) {
  return (
    <div className={styles.row}>
      <div className={styles.captionCell}>
        <span className={styles.number}>{slide.number}.</span>
        <p className={styles.caption}>
          {slide.coverAccent ? (
            <>
              <span className={styles.captionCover}>Cover</span>
              {slide.caption.replace(/^Cover/, "")}
            </>
          ) : (
            slide.caption
          )}
        </p>
      </div>
      <div className={styles.photoCell}>
        <Image
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          className={styles.photo}
          sizes="(max-width: 720px) 100vw, 350px"
          unoptimized
        />
      </div>
    </div>
  );
}
