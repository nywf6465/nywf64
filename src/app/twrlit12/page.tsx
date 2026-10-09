import type { Metadata } from "next";
import Image from "next/image";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./twrlitSingleImage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Information Request Card — Tower of Light — nywf64.com",
  description:
    "Tower of Light information request card — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light — Information Request Card (legacy twrlit12.html).
 * Stack: hero → TwrlitNavChrome → navy title bar → centered image → Nav2Bar.
 */
export default function Twrlit12Page() {
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

      <article className={styles.article} aria-labelledby="twrlit12-title">
        <header className={styles.titleBar}>
          <h1 id="twrlit12-title" className={styles.titleBarMain}>
            Information Request Card
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/twrlit12/tol83.jpg"
            alt="Tower of Light information request card"
            width={600}
            height={364}
            className={styles.image}
            unoptimized
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/twrlit11"
        explicitPrevious
        overviewHref="/twrlitoverview"
        nextHref="/twrlit13"
      />
    </>
  );
}
