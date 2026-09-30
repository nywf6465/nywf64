import type { Metadata } from "next";
import Image from "next/image";
import { ArtifactsLinks } from "@/components/ArtifactsLinks";
import styles from "./artifacts.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Artifacts & Legacies — nywf64.com",
  description:
    "Artifacts & Legacies — the memories of the 1964/1965 New York World’s Fair.",
};

/** Landing: header (layout) → exact hero → links grid → footer (layout). */
export default function ArtifactsPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Artifacts & Legacies">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/artifacts-hero.jpg"
            alt="Artifacts & Legacies — the memories of the Fair"
            width={1914}
            height={822}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <ArtifactsLinks />
    </main>
  );
}
