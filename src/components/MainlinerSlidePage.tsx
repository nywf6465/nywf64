import Image from "next/image";
import { MainlinerHero } from "@/components/MainlinerHero";
import { MainlinerNavChrome } from "@/components/MainlinerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/mainlinerSlidePage.module.css";

export type MainlinerSlidePageProps = {
  /** Catalog id, e.g. "555-01". */
  slideId: string;
  /** Navy title bar text, e.g. "Slide 555-01 - Entrance Building". */
  title: string;
  /** Times lead above the photograph. */
  lead: string;
  image: { src: string; width: number; height: number; alt?: string };
  previousHref: string;
  nextHref: string;
};

/**
 * Blackhawk Films MAINLINER slide (legacy mainliner555NN.html).
 * Stack: hero → MainlinerNavChrome → navy title → slide plate → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export function MainlinerSlidePage({
  slideId,
  title,
  lead,
  image,
  previousHref,
  nextHref,
}: MainlinerSlidePageProps) {
  const titleId = `mainliner${slideId.replace(/\W/g, "")}-title`;

  return (
    <>
      <MainlinerHero />

      <MainlinerNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.plate} role="group" aria-label={`Slide ${slideId}`}>
            <p className={styles.lead}>{lead}</p>
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              width={image.width}
              height={image.height}
              className={styles.slideImage}
              unoptimized
            />
            <p className={styles.brand}>MAINLINER</p>
            <p className={styles.series}>VACATION&nbsp;SERIES</p>
          </div>
          <p className={styles.credit}>
            Image 2018 BLACKHAWK FILMS - NO Unauthorized Reproduction is
            Permitted
          </p>
          <p className={styles.credit}>
            WebPage 2018 nywf64.com - NO Unauthorized Reproduction is Permitted
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/mainlineroverview"
        nextHref={nextHref}
      />
    </>
  );
}
