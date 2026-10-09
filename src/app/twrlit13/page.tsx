import type { Metadata } from "next";
import Image from "next/image";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../twrlit12/twrlitSingleImage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Kite & Key Club Guest Card — Tower of Light — nywf64.com",
  description:
    "Tower of Light Kite & Key Club guest card — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light — Kite & Key Club Guest Card (legacy twrlit13.html).
 */
export default function Twrlit13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Tower of Light">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/twrlitoverview/hero-banner.jpg"
            alt="Tower of Light at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TwrlitNavChrome />

      <article className={styles.article} aria-labelledby="twrlit13-title">
        <header className={styles.titleBar}>
          <h1 id="twrlit13-title" className={styles.titleBarMain}>
            Kite &amp; Key Club Guest Card
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/twrlit13/tol84.jpg"
            alt="Kite & Key Club guest card — Tower of Light"
            width={600}
            height={899}
            className={styles.image}
            unoptimized
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/twrlit12"
        explicitPrevious
        overviewHref="/twrlitoverview"
        nextHref="/twrlit14"
      />
    </>
  );
}
