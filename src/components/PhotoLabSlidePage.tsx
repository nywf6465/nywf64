import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PhotoLabHero } from "@/components/PhotoLabHero";
import { PhotoLabNavChrome } from "@/components/PhotoLabNavChrome";
import styles from "@/styles/photolabSlidePage.module.css";

export type PhotoLabSlidePageProps = {
  /** Slide id, e.g. 5601 or S301A. */
  slideId: number | string;
  /** Navy title bar text. */
  title: string;
  image: { src: string; width: number; height: number; alt?: string };
  /** Caption lines under the photograph. */
  captions: string[];
  /** Second plate header. General Tour slides use the default. */
  setLabel?: string;
  previousHref: string;
  nextHref?: string;
};

/**
 * Photo Lab General Tour slide (legacy plabNNNN.html).
 * Stack: Photo Lab hero → PhotoLabNavChrome → navy title → slide plate → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export function PhotoLabSlidePage({
  slideId,
  title,
  image,
  captions,
  setLabel = "GENERAL TOUR SET OF 50",
  previousHref,
  nextHref,
}: PhotoLabSlidePageProps) {
  const titleId = `photolab${slideId}-title`;

  return (
    <>
      <PhotoLabHero />

      <PhotoLabNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.plate} role="group" aria-label={`Slide ${slideId}`}>
            <div className={styles.headers}>
              <p>NEW YORK WORLD&apos;S FAIR 1964-1965</p>
              <p>{setLabel}</p>
            </div>
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              width={image.width}
              height={image.height}
              className={styles.slideImage}
              unoptimized
            />
            <div className={styles.captions}>
              {captions.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <p className={styles.credit}>
            Image 2018 PHOTO LAB, INC. - NO Unauthorized Reproduction is Permitted
          </p>
          <p className={styles.credit}>
            WebPage 2018 nywf64.com - NO Unauthorized Reproduction is Permitted
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/photolaboverview"
        nextHref={nextHref}
        hideNext={!nextHref}
      />
    </>
  );
}
