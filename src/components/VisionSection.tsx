import { Star } from "./Star";
import styles from "./VisionSection.module.css";

/** Copy matches the ChatGPT mockup vision block (no invented sections). */
export function VisionSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="vision-title">
      <div className={styles.divider} aria-hidden="true">
        <span className={styles.rule} />
        <Star color="#26346e" size={13} />
        <span className={styles.rule} />
      </div>

      <h2 id="vision-title" className={styles.title}>
        More Than a Fair, a Vision for Tomorrow
      </h2>
      <p className={styles.body}>
        The 1964/1965 New York World’s Fair captured the imagination of a
        generation with its bold ideas, stunning architecture and a look at the
        future. Discover the people, places and stories that made it one of the
        most memorable events in history.
      </p>
    </section>
  );
}
