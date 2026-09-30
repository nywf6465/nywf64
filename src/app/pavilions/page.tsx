import type { Metadata } from "next";
import Image from "next/image";
import { PavilionsLinks } from "@/components/PavilionsLinks";
import styles from "./pavilions.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Pavilions, Attractions & Exhibits — nywf64.com",
  description:
    "Pavilions, Attractions & Exhibits — the buildings and shows of the 1964/1965 New York World’s Fair.",
};

/** Landing: header (layout) → exact hero → gap → pavilion links → footer (layout). */
export default function PavilionsPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Pavilions, Attractions & Exhibits">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/pavilions-hero.jpg"
            alt="Pavilions, Attractions & Exhibits — the buildings and shows of the Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      {/* Mirror first→second link-set gap in pavilions-links.jpg (171/1536 of frame width). */}
      <div className={styles.afterHeroGap} aria-hidden="true" />
      <PavilionsLinks />
    </main>
  );
}
