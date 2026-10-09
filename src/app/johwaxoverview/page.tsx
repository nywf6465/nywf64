import type { Metadata } from "next";
import Image from "next/image";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./johwaxoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Johnson Wax — Overview — nywf64.com",
  description:
    "Johnson Wax Pavilion overview at the 1964/1965 New York World’s Fair — To Be Alive on nywf64.com.",
};

/**
 * Johnson Wax overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (johwax menu) → overview body → nav2 → footer
 */
export default function JohwaxOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Johnson Wax Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/johwaxoverview/hero-banner.jpg"
            alt="Johnson Wax Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JohwaxNavChrome />

      <section className={styles.overview} aria-label="Johnson Wax overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              &quot;To Be Alive,&quot; an 18-minute film that has been one of the
              Fair&apos;s great hits, depicts the joys of living shared by all
              people.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/johwaxoverview/photo.jpg"
              alt="Johnson Wax Pavilion — To Be Alive"
              width={1271}
              height={1238}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/johwax17"
        explicitPrevious
        overviewHref="/johwaxoverview"
        nextHref="/johwax01"
      />
    </>
  );
}
