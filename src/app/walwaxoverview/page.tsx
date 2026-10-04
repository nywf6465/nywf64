import type { Metadata } from "next";
import Image from "next/image";
import { WalwaxNavChrome } from "@/components/WalwaxNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./walwaxoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Walter's International Wax Museum — Overview — nywf64.com",
  description:
    "Walter's International Wax Museum overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Walter's International Wax Museum overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (walwax menu) → overview body → nav2 → footer
 */
export default function WalwaxOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Walter's International Wax Museum"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/walwaxoverview/hero-banner.jpg"
            alt="Walter's International Wax Museum at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WalwaxNavChrome />

      <section
        className={styles.overview}
        aria-label="Walter's International Wax Museum overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Figures in this collection of life-sized images range from Lady
              Godiva to the Beatles.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/walwaxoverview/photo.jpg"
              alt="Walter's International Wax Museum exterior and ticket booth"
              width={1557}
              height={1010}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/walwaxoverview"
        overviewHref="/walwaxoverview"
        nextHref="/walwax01"
      />
    </>
  );
}
