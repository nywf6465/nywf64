import type { ReactNode } from "react";
import Image from "next/image";
import { ScrapbookHero } from "@/components/ScrapbookHero";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/scrapbookIssuePage.module.css";

export type ScrapbookPhoto = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  /** Bold lead words in the caption (legacy often bolds the opening). */
  captionLead?: string;
  caption?: ReactNode;
};

export type ScrapbookBlock =
  | { type: "date"; text: ReactNode }
  | { type: "credit"; text: string }
  | { type: "storyTitle"; text: ReactNode }
  | { type: "lead"; text: ReactNode }
  | { type: "photo"; photo: ScrapbookPhoto }
  | { type: "grid"; photos: ScrapbookPhoto[] };

export type ScrapbookFeature = {
  /** Accessible name for the feature section. */
  label: string;
  blocks: ScrapbookBlock[];
};

export type ScrapbookIssuePageProps = {
  title: string;
  titleId?: string;
  nav: ReactNode;
  features: ScrapbookFeature[];
  previousHref: string;
  nextHref?: string;
  overviewHref?: string;
  hideNext?: boolean;
  /** Path to the small Scrapbook title mark between features. */
  titleMarkSrc?: string;
};

const DEFAULT_TITLE_MARK = {
  src: "/images/scrapbook01/scrapbook-title.jpg",
  width: 248,
  height: 33,
  alt: "World’s Fair Scrapbook",
} as const;

/**
 * World’s Fair Scrapbook issue page (legacy scrapbookNN.html features).
 * Stack: ScrapbookHero → nav chrome → navy title → features → Nav2Bar.
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export function ScrapbookIssuePage({
  title,
  titleId = "scrapbook-issue-title",
  nav,
  features,
  previousHref,
  nextHref,
  overviewHref,
  hideNext = false,
  titleMarkSrc = DEFAULT_TITLE_MARK.src,
}: ScrapbookIssuePageProps) {
  return (
    <>
      <ScrapbookHero />

      {nav}

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          {features.map((feature, index) => {
            const dateBlock =
              feature.blocks[0]?.type === "date" ? feature.blocks[0] : null;
            const bodyBlocks = dateBlock
              ? feature.blocks.slice(1)
              : feature.blocks;

            return (
              <section
                key={`${feature.label}-${index}`}
                className={styles.feature}
                aria-label={feature.label}
              >
                {dateBlock ? (
                  <p className={styles.date}>{dateBlock.text}</p>
                ) : null}

                <Image
                  src={titleMarkSrc}
                  alt={DEFAULT_TITLE_MARK.alt}
                  width={DEFAULT_TITLE_MARK.width}
                  height={DEFAULT_TITLE_MARK.height}
                  className={styles.featureMark}
                  unoptimized
                />

                {bodyBlocks.map((block, blockIndex) => {
                  const key = `${feature.label}-${block.type}-${blockIndex}`;
                  switch (block.type) {
                    case "credit":
                      return (
                        <p key={key} className={styles.credit}>
                          {block.text}
                        </p>
                      );
                    case "storyTitle":
                      return (
                        <h2 key={key} className={styles.storyTitle}>
                          {block.text}
                        </h2>
                      );
                    case "lead":
                      return (
                        <p key={key} className={styles.lead}>
                          {block.text}
                        </p>
                      );
                    case "grid":
                      return (
                        <div key={key} className={styles.grid}>
                          {block.photos.map((photo, photoIndex) => (
                            <div
                              key={`${photo.src}-${photoIndex}`}
                              className={styles.photoFrame}
                            >
                              <Image
                                src={photo.src}
                                alt={photo.alt ?? ""}
                                width={photo.width}
                                height={photo.height}
                                className={styles.photo}
                                sizes="(max-width: 720px) 90vw, 400px"
                                unoptimized
                              />
                            </div>
                          ))}
                        </div>
                      );
                    case "photo": {
                      const photo = block.photo;
                      if (photo.caption) {
                        return (
                          <div key={key} className={styles.photoBlock}>
                            <div className={styles.pair}>
                              <div className={styles.photoFrame}>
                                <Image
                                  src={photo.src}
                                  alt={photo.alt ?? ""}
                                  width={photo.width}
                                  height={photo.height}
                                  className={styles.photo}
                                  sizes="(max-width: 720px) 90vw, 400px"
                                  unoptimized
                                />
                              </div>
                              <p className={styles.pairCaption}>
                                {photo.captionLead ? (
                                  <span className={styles.captionLead}>
                                    {photo.captionLead}{" "}
                                  </span>
                                ) : null}
                                {photo.caption}
                              </p>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={key} className={styles.photoBlock}>
                          <div className={styles.photoFrame}>
                            <Image
                              src={photo.src}
                              alt={photo.alt ?? ""}
                              width={photo.width}
                              height={photo.height}
                              className={styles.photo}
                              sizes="(max-width: 720px) 90vw, 400px"
                              unoptimized
                            />
                          </div>
                        </div>
                      );
                    }
                    default:
                      return null;
                  }
                })}
              </section>
            );
          })}
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
