import Image from "next/image";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/spainEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type SpainEssayBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "source"; text: string }
  | { type: "caption"; text: string }
  | { type: "display"; lines: string[] }
  | { type: "img"; src: string; width: number; height: number; alt: string };

type SpainEssayPageProps = {
  slug: string;
  title: string;
  blocks: SpainEssayBlock[];
  previousHref: string;
  nextHref: string;
};

function SourceLine({ text }: { text: string }) {
  const body = text.replace(/^Source:\s*/i, "").replace(/^SOURCE:\s*/i, "");
  return (
    <p className={styles.source}>
      Source: <em>{body}</em>
    </p>
  );
}

/**
 * Shared layout for Spain essay / feature pages (spain06–spain14).
 */
export function SpainEssayPage({
  slug,
  title,
  blocks,
  previousHref,
  nextHref,
}: SpainEssayPageProps) {
  const titleId = `${slug}-title`;

  return (
    <>
      <section className={styles.hero} aria-label="Spain">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/spainoverview/hero-banner.jpg"
            alt="Spanish Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpainNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={`${styles.articleInner} ${styles.body}`}>
          {blocks.map((block, index) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={index} className={styles.sectionHeading}>
                    {block.text}
                  </h2>
                );
              case "p":
                return <p key={index}>{block.text}</p>;
              case "lead":
                return (
                  <p key={index} className={styles.lead}>
                    {block.text}
                  </p>
                );
              case "display":
                return (
                  <div key={index} className={styles.displayTitle}>
                    {block.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={
                          line === "JEWEL" || line === "FAIR"
                            ? styles.displayTitleJewel
                            : styles.displayTitleLine
                        }
                      >
                        {line === "LIFE visits the Spanish Pavilion" ? (
                          <em>{line}</em>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                );
              case "caption":
                return (
                  <p key={index} className={styles.caption}>
                    {block.text}
                  </p>
                );
              case "source":
                return <SourceLine key={index} text={block.text} />;
              case "img":
                return (
                  <figure
                    key={index}
                    className={`${styles.figure} ${
                      block.width >= 500 ? styles.figureWide : ""
                    }`}
                  >
                    <Image
                      src={`/images/${slug}/${block.src}`}
                      alt={block.alt}
                      width={block.width}
                      height={block.height}
                      unoptimized
                    />
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/spainoverview"
        nextHref={nextHref}
      />
    </>
  );
}
