import Image from "next/image";
import Link from "next/link";
import type { WeshouBlock } from "./legacyBlockTypes";
import styles from "./weshouArticle.module.css";

export function renderLegacyBlocks(blocks: WeshouBlock[]) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "p":
        return (
          <p key={i} className={styles.bodyText}>
            {block.text}
          </p>
        );
      case "strong":
        return (
          <p key={i} className={styles.bodyText}>
            <strong>{block.text}</strong>
          </p>
        );
      case "em":
        return (
          <p key={i} className={styles.subhead}>
            <em>{block.text}</em>
          </p>
        );
      case "h2":
        return (
          <h2
            key={i}
            className={
              block.variant === "red"
                ? styles.sectionTitleRed
                : styles.italicHeading
            }
          >
            {block.variant === "italic" ? <em>{block.text}</em> : block.text}
          </h2>
        );
      case "dt":
        return (
          <p key={i} className={styles.bodyText}>
            {block.text}
          </p>
        );
      case "dd":
        return (
          <p key={i} className={styles.nestedItem}>
            {block.text}
          </p>
        );
      case "listRow":
        return (
          <div key={i} className={styles.listRow}>
            {block.num ? (
              <span className={styles.listNum}>{block.num}</span>
            ) : null}
            <span>{block.text}</span>
          </div>
        );
      case "listRow3":
        return (
          <div key={i} className={styles.listRow3}>
            <span className={styles.listNum}>{block.num}</span>
            <span className={styles.listMid}>{block.mid}</span>
            <span>{block.rest}</span>
          </div>
        );
      case "note":
        return (
          <p key={i} className={styles.note}>
            <em>{block.text}</em>
          </p>
        );
      case "source":
        return (
          <p key={i} className={styles.source}>
            {block.text}
          </p>
        );
      case "hr":
        return <hr key={i} className={styles.rule} />;
      case "link":
        return (
          <p key={i} className={styles.bodyText}>
            <Link href={block.href} target="_blank" rel="noreferrer">
              {block.text}
            </Link>
          </p>
        );
      case "blockquote":
        return (
          <blockquote key={i} className={styles.blockquote}>
            <p>
              <em>{block.text}</em>
            </p>
          </blockquote>
        );
      case "figure":
        return (
          <figure key={i} className={styles.figure}>
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              className={
                block.border
                  ? `${styles.photoImg} ${styles.bordered}`
                  : styles.photoImg
              }
              unoptimized
            />
            {block.caption ? (
              <figcaption
                className={
                  block.captionEm ? styles.captionEm : styles.caption
                }
              >
                {block.captionEm ? <em>{block.caption}</em> : block.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      case "twoFigures":
        return (
          <div key={i} className={styles.twoColPhotos}>
            {block.figures.map((fig, j) => (
              <figure key={j} className={styles.figure}>
                <Image
                  src={fig.src}
                  alt={fig.alt}
                  width={fig.width}
                  height={fig.height}
                  className={styles.photoImg}
                  unoptimized
                />
                {fig.caption ? (
                  <figcaption className={styles.captionEm}>
                    <em>{fig.caption}</em>
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        );
      default:
        return null;
    }
  });
}
