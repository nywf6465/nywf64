import type { Metadata } from "next";
import Image from "next/image";
import { TrueFairNavChrome } from "@/components/TrueFairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./true_fairoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "An Unofficial World’s Fair — Overview — nywf64.com",
  description:
    "An Unofficial World’s Fair overview — the 1964/1965 New York World’s Fair and the Bureau International des Expositions on nywf64.com.",
};

/**
 * An Unofficial World’s Fair overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /belloverview).
 * Shared unofficialhero is reused on later true_fair pages.
 */
export default function TrueFairOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="An Unofficial World’s Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/true_fair/unofficialhero.jpg"
            alt="An Unofficial World’s Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrueFairNavChrome />

      <section
        className={styles.overview}
        aria-label="An Unofficial World’s Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Did you know that the 1964/1965 New York World&apos;s Fair
              wasn&apos;t an <strong>
                <em>official</em>
              </strong>{" "}
              World&apos;s Fair? Read the interesting story of the Fair&apos;s
              controversial beginnings.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/true_fairoverview/photo.jpg"
              alt="New York World’s Fair 1964-1965 emblem — Man’s Achievements in an Expanding Universe"
              width={1515}
              height={1038}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/information"
        explicitPrevious
        overviewHref="/true_fairoverview"
        nextHref="/true_fair01"
      />
    </>
  );
}
