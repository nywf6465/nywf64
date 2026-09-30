import type { Metadata } from "next";
import Image from "next/image";
import { MapsLinks } from "@/components/MapsLinks";
import styles from "./maps.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Interactive Maps — nywf64.com",
  description:
    "Interactive Maps & Photos — maps and photographs of the 1964/1965 New York World’s Fair.",
};

/** Landing: header (layout) → exact hero → maps links → footer (layout). */
export default function MapsPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Interactive Maps">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/maps-hero.jpg"
            alt="Interactive Maps & Photos — maps and photographs of the Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <MapsLinks />
    </main>
  );
}
