import Image from "next/image";
import styles from "./Hero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

/** User-provided hero artwork (photo + copy + CTA baked in). Do not overlay text. */
export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Relive a Remarkable Era">
      <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/hero-user-provided-sharpened.jpg"
          alt="Relive a Remarkable Era — The 1964/1965 New York World’s Fair. Explore the people, pavilions, attractions and lasting legacy of America’s Space Age World’s Fair."
          width={1206}
          height={606}
          priority
          sizes="100vw"
          className={styles.art}
          unoptimized
        />
        {/* Transparent hotspot over baked-in “Explore the Fair >” — do not redraw */}
        <a
          className={styles.ctaHotspot}
          href="/explore"
          aria-label="Explore the Fair"
        />
      </div>
    </section>
  );
}
