import type { Metadata } from "next";
import Image from "next/image";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./scopap10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "A Brief History of Scott Paper Before and After 1964 — Scott Paper — nywf64.com",
  description:
    "A brief history of Scott Paper Company and its pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper — A Brief History of Scott Paper Before and After 1964.
 * Body from legacy scopap10.html.
 */
export default function Scopap10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Scott Paper">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/scopapoverview/hero-banner.jpg"
            alt="Scott Paper at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ScopapNavChrome />

      <article className={styles.article} aria-labelledby="scopap10-title">
        <header className={styles.titleBar}>
          <h1 id="scopap10-title" className={styles.titleBarMain}>
            A Brief History of Scott Paper Before and After 1964
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              The Scott Paper Company was founded in 1879 in Philadelphia by
              brothers Seymour and Irvin Scott, who had run a paper commission
              business in that city for twelve years prior. By 1890, Scott had
              become the nation&apos;s leading producer of bathroom tissue. This
              relatively recent invention caused a significant improvement in
              daily life, and manufacture of the then &quot;unmentionable&quot;
              product became the turning point for the company, paying huge
              dividends for a long time.
            </p>
            <p>
              In 1995, Scott Paper and Kimberly-Clark merged, creating a global
              consumer products company with annual revenue exceeding $13 billion.
              Scott is now part of Kimberly-Clark, but the Scott name has been
              retained.
            </p>
          </div>

          <hr className={styles.rule} aria-hidden="true" />

          <figure className={styles.figure}>
            <Image
              src="/images/scopap10/scott20.jpg"
              alt="Pavilion Aerial"
              width={487}
              height={373}
              unoptimized
            />
            <figcaption className={styles.photoCaption}>
              Visitors line up to tour Scott&apos;s <em>Enchanted Forest</em> on a
              beautiful Spring day in 1964. Looking north toward Travelers
              Insurance, the Scott Pavilion is in the lower half of the picture.
              This photo was probably taken from the Better Living Center.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>Scott Enterprise Magazine</em>, Summer 1964
            </p>
          </figure>

          <aside className={styles.webmasterNote} aria-label="Webmaster's note">
            <p>
              <strong>Webmaster&apos;s note...</strong> Many thanks to Mr. Bradd
              Schiffman for creating this <em>excellent</em> Feature on Scott
              Paper&apos;s participation in the Fair. Bradd is a frequent
              contributor to{" "}
              <span className={styles.nywf64}>nywf</span>
              <span className={styles.nywf64Red}>64</span>
              <span className={styles.nywf64Com}>.com</span>{" "}
              with his many photos, collectibles and memories of the Fair.
            </p>
            <dl>
              <dt>Bill Young</dt>
              <dt>January, 2002</dt>
            </dl>
          </aside>
        </div>
      </article>

      <Nav2Bar
        previousHref="/scopap09"
        explicitPrevious
        overviewHref="/scopapoverview"
        nextHref="/scopapoverview"
      />
    </>
  );
}
