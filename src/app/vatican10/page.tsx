import type { Metadata } from "next";
import Image from "next/image";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vatican10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Irony — Vatican — nywf64.com",
  description:
    "The Irony — damage to Michelangelo’s Pietà after the 1964/1965 New York World’s Fair — Vatican Pavilion on nywf64.com.",
};

export default function Vatican10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Vatican Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/vaticanoverview/hero-banner.jpg"
            alt="Vatican Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VaticanNavChrome />

      <article className={styles.article} aria-labelledby="vatican10-title">
        <header className={styles.titleBar}>
          <h1 id="vatican10-title" className={styles.titleBarMain}>
            The Irony
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              In May of 1972, a Hungarian ex-patriate, Laszlo Toth, broke
              through flimsy barricades, rushed past slow-to-react Vatican
              guards and attacked Michelangelo&apos;s <em>Pieta</em> with a
              12-pound hammer.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/vatican10/vatpietadmg3.jpg"
                alt="Pieta showing damaged nose"
                width={250}
                height={314}
                className={styles.photo}
                unoptimized
              />
            </figure>

            <p>
              He swung and smashed the hammer into Mary&apos;s face, breaking
              off a large piece of the sculpture&apos;s nose and gouging a
              piece out of the left eye. He also broke off the fingers on her
              outstretched hand before Vatican guards finally subdued him. In
              all, some 50 pieces lay scattered about the Basilica floor.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/vatican10/vatpietadmg2.jpg"
                alt="Pieta showing repaired nose, chipped eyelid"
                width={200}
                height={323}
                className={styles.photo}
                unoptimized
              />
            </figure>

            <p>
              Over the next year, Vatican art restorers worked with precision
              equipment to repair the damage done in the attack. The end of the
              Madonna&apos;s nose and the eyelid near the corner of her eye were
              glued back into place. Synthetic marble was used to repair the
              remaining damage done to the eye.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/vatican10/vatpietadmg1.jpg"
                alt="Repairing damaged hand"
                width={200}
                height={335}
                className={styles.photo}
                unoptimized
              />
            </figure>

            <p>
              How ironic, after the precautions taken to ensure the safety of
              this beautiful statue on its trip to America for -- and at -- the
              Fair, that the Vatican would provide such poor security to protect
              its priceless art treasure back in Rome.
            </p>

            <p className={styles.source}>
              Source: Life Magazine, <em>The Beat of Life</em>, Volume 73 Number
              22, December 1, 1972
            </p>

            <aside className={styles.visitorNote}>
              Interesting to note... Website visitor Todd Kelson adds,
              &quot;It seems that a fellow named Bob Hupka, a utility stage
              hand at CBS, was a photographer and liturgical music expert. He
              was asked by the archdiocese to program the music for the pavilion
              and lay out the sound system. He had an opportunity to photograph
              the Pieta from all sorts of unusual angles; above, below, many
              usually impossible to take, while the statue was being moved in and
              out. He took dozens of rolls of film, many of which sat in his
              freezer undeveloped for years. After the attack he offered his
              hundreds of photos to the Vatican which used many of them as guides
              for the restoration. Some of Mr. Hupka&apos;s photos were
              published in a small volume in the late 70s. So, it seems, the
              Pieta as restored today really has a strong tie with the &apos;64
              Fair.&quot; -March 28, 2001
            </aside>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/vatican09"
        overviewHref="/vaticanoverview"
        nextHref="/vatican01"
      />
    </>
  );
}
