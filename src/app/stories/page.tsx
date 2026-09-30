import type { Metadata } from "next";
import Image from "next/image";
import { StoriesLinks } from "@/components/StoriesLinks";
import styles from "./stories.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Stories & Essays — nywf64.com",
  description:
    "Stories & Essays — literary contributions to nywf64.com about the 1964/1965 New York World’s Fair.",
};

/** Landing: header (layout) → exact hero → five link panels → footer (layout). */
export default function StoriesPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Stories & Essays">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/stories-hero.jpg"
            alt="Stories & Essays — literary contributions to nywf64.com by its followers"
            width={1911}
            height={823}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <StoriesLinks />
    </main>
  );
}
