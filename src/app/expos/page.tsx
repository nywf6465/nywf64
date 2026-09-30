import type { Metadata } from "next";
import Image from "next/image";
import { ExposLinks } from "@/components/ExposLinks";
import styles from "./expos.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Expos — Other Fairs & Expos — nywf64.com",
  description:
    "Other Fairs & Expos — the expositions of the mid-20th century, related to the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header (layout) → exact hero → links grid → footer (layout). */
export default function ExposPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Other Fairs & Expos">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/expos-hero-banner.jpg"
            alt="Other Fairs & Expos — The Expositions of the mid-20th Century"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <ExposLinks />
    </main>
  );
}
