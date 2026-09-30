import { Star } from "./Star";
import { categoryHubs } from "@/lib/legacy";
import styles from "./CategoryGrid.module.css";

export function CategoryGrid() {
  const top = categoryHubs.slice(0, 6);
  const last = categoryHubs[6];

  return (
    <section
      id="explore"
      className={styles.section}
      aria-label="Explore Fair categories"
    >
      <ul className={styles.grid}>
        {top.map((hub) => (
          <li key={hub.id} className={styles.item}>
            <CategoryLink
              href={hub.href}
              title={hub.title}
              stem={hub.legacyStem}
              images={hub.imageRoot}
            />
          </li>
        ))}
      </ul>

      <div className={styles.solo}>
        <CategoryLink
          href={last.href}
          title={last.title}
          stem={last.legacyStem}
          images={last.imageRoot}
        />
      </div>

      {categoryHubs.map((hub) => (
        <div
          key={`hook-${hub.id}`}
          id={hub.id}
          className={styles.hook}
          data-legacy-stem={hub.legacyStem}
          data-legacy-html={`/${hub.legacyStem}.html`}
          data-legacy-images={hub.imageRoot}
          hidden
          aria-hidden="true"
        />
      ))}
    </section>
  );
}

function CategoryLink({
  href,
  title,
  stem,
  images,
}: {
  href: string;
  title: string;
  stem: string;
  images: string;
}) {
  return (
    <a
      className={styles.link}
      href={href}
      data-legacy-stem={stem}
      data-legacy-images={images}
    >
      {/* Mockup: TL navy · TR burgundy · BL burgundy · BR navy */}
      <Star className={styles.starTL} color="#26346e" size={12} />
      <Star className={styles.starTR} color="#990000" size={12} />
      <span className={styles.label}>{title}</span>
      <Star className={styles.starBL} color="#990000" size={9} />
      <Star className={styles.starBR} color="#26346e" size={9} />
    </a>
  );
}
