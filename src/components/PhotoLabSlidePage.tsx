import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PhotoLabHero } from "@/components/PhotoLabHero";
import { PhotoLabNavChrome } from "@/components/PhotoLabNavChrome";
import styles from "@/styles/photolabSlidePage.module.css";

export type PhotoLabSlidePageProps = {
  /** Slide number, e.g. 5601. */
  slideId: number;
  /** Navy title bar text. */
  title: string;
  image: { src: string; width: number; height: number; alt?: string };
  /** Caption lines under the photograph. */
  captions: string[];
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
              <p>GENERAL TOUR SET OF 50</p>
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
