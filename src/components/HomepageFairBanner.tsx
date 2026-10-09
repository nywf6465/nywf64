import Image from "next/image";
import styles from "./HomepageFairBanner.module.css";

/**
 * Homepage mid-banner above the category hub cards.
 * “What would you like to see? / We have the Fair for you.”
 */
export function HomepageFairBanner() {
  return (
    <section
      className={styles.section}
      aria-label="What would you like to see? We have the Fair for you."
    >
      <div className={styles.frame}>
        <Image
          src="/images/homepage-fair-banner.jpg"
          alt="What would you like to see? We have the Fair for you."
          width={1278}
          height={234}
          sizes="(max-width: 900px) 100vw, 900px"
          className={styles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
