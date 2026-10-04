import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texasoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Texas Pavilions & Music Hall — Overview — nywf64.com",
  description:
    "Texas Pavilions & Music Hall overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function TexasOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Texas Pavilions & Music Hall">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/texasoverview/hero-banner.jpg"
            alt="Texas Pavilions & Music Hall at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TexasNavChrome />

      <section
        className={styles.overview}
        aria-label="Texas Pavilions & Music Hall overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              &quot;Friendship at the Fair&quot; is the theme of an exuberant
              multiple exhibit which has been produced for the state by Dallas
              showman Angus G. Wynne Jr., in association with Compass Fair,
              Inc.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/texasoverview/photo.jpg"
              alt="Texas Music Hall — To Broadway With Love and monorail"
              width={1536}
              height={1024}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/texasoverview"
        overviewHref="/texasoverview"
        nextHref="/texas01"
      />
    </>
  );
}
