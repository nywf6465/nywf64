import type { Metadata } from "next";
import Image from "next/image";
import { FlushingMeadowsLinks } from "@/components/FlushingMeadowsLinks";
import styles from "./flushing-meadows.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Flushing Meadows Park — nywf64.com",
  description:
    "Flushing Meadows Park — a tribute to the home of the 1964/1965 New York World’s Fair.",
};

/** Landing: header (layout) → exact hero → links grid → footer (layout). */
export default function FlushingMeadowsParkPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Flushing Meadows Park">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/flushing-meadows-park-hero.jpg"
            alt="Flushing Meadows Park — a tribute to the home of the Fair"
            width={1911}
            height={823}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <FlushingMeadowsLinks />
    </main>
  );
}
