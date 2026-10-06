import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genfoo10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Epilogue: Old Archway gets a New Life! — General Foods Arches — nywf64.com",
  description:
    "A surviving General Foods Archway at the Cherry Valley Shopping Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches — Epilogue: Old Archway gets a New Life!
 * Body from legacy genfoo10.html (custom epilogue page).
 * Legacy wording (“Photographs a courtesy”) preserved.
 * Last General Foods topic — NEXT returns to overview.
 */
export default function Genfoo10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Foods Arches">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/genfoooverview/hero-banner.jpg"
            alt="General Foods Arches at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GenfooNavChrome />

      <article className={styles.article} aria-labelledby="genfoo10-title">
        <header className={styles.titleBar}>
          <h1 id="genfoo10-title" className={styles.titleBarMain}>
            Epilogue: Old Archway gets a New Life!
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.photoRow}>
            <Image
              src="/images/genfoo10/legacy41.jpg"
              alt="West Hempstead Arch - top"
              width={200}
              height={135}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genfoo10/legacy43.jpg"
              alt="West Hempstead Arch - signage"
              width={200}
              height={135}
              className={styles.photo}
              unoptimized
            />
          </div>
          <div className={styles.photoSingle}>
            <Image
              src="/images/genfoo10/legacy42.jpg"
              alt="West Hempstead Arch - longshot"
              width={200}
              height={135}
              className={styles.photo}
              unoptimized
            />
          </div>
          <div className={styles.body}>
            <p>
              Still displaying information after more than 35 years, this
              &quot;Archway to Understanding&quot; stands in the parking lot of
              the Cherry Valley Shopping Center along the Hempstead Turnpike,
              West Hempstead, Long Island, Nassau County, NY.
            </p>
            <p>
              The bolts that originally held the &quot;Peace Through
              Understanding&quot; lettering at the top of the arch can still be
              seen in the top photos.
            </p>
            <p>
              It has also been reported that General Foods Arches may be found
              at &quot;The Enchanted Forest&quot; in Old Forge, NY and at Rocky
              Point, RI, a defunct amusement park.
            </p>
            <p>
              You&apos;re invited to visit the{" "}
              <Link href="/legacies01">Legacies Pages</Link> at{" "}
              <span className={styles.brandNywf}>nywf</span>
              <span className={styles.brandSixtyFour}>64</span>
              <span className={styles.brandDotCom}>.com</span> if you&apos;d
              like to find more surviving legacies of the Fair!
            </p>
          </div>
          <p className={styles.source}>
            Source: Photographs a courtesy of Curtis Cates of BBQ Productions
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genfoo09"
        overviewHref="/genfoooverview"
        nextHref="/genfoooverview"
      />
    </>
  );
}
