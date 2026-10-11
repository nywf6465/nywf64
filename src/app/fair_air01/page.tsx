import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FairAirNavChrome } from "@/components/FairAirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { FAIR_AIR_GALLERY_ITEMS } from "@/data/fairAirGallery";
import styles from "./fair_air01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Vintage Publicity Photos — See the Fair from the Air — nywf64.com",
  description:
    "Vintage publicity aerial photographs from the Craig Bavaro Collection — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — photo index.
 * Body from legacy fair_air01.html (Page 1). Photo links follow A–Z menu order (Pages 2–46).
 *
 * Stack: airhero → FairAirNavChrome → navy title → thumbnail index → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="See the Fair from the Air"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_air/airhero.jpg"
            alt="See the Fair from the Air — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairAirNavChrome />

      <article className={styles.article} aria-labelledby="fair-air01-title">
        <header className={styles.titleBar}>
          <h1 id="fair-air01-title" className={styles.titleBarMain}>
            Vintage Publicity Photos from the{" "}
            <em>Craig Bavaro Collection</em> Show the Fair from the Air
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.instruction}>
            Navigate this section simply by selecting the thumbnail image to see
            a larger image.
          </p>

          <ul className={styles.list}>
            {FAIR_AIR_GALLERY_ITEMS.map((item) => {
              const href = `/fair_air${String(item.num).padStart(2, "0")}`;
              return (
                <li key={item.num} className={styles.row}>
                  <Link href={href} className={styles.thumbLink}>
                    <Image
                      src={`/images/fair_air01/thumbs/${item.thumb}`}
                      alt={item.alt}
                      width={150}
                      height={119}
                      className={styles.thumb}
                      unoptimized
                    />
                  </Link>
                  <div className={styles.copy}>
                    <p className={styles.title}>
                      <Link href={href}>{item.title}</Link>
                    </p>
                    {item.feat ? (
                      <p className={styles.feat}>{item.feat}</p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </article>

      <Nav2Bar
        previousHref="/fair_airoverview"
        explicitPrevious
        nextHref="/fair_air02"
      />
    </>
  );
}
