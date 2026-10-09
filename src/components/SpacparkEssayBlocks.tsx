import Image from "next/image";

export type SpacparkEssayBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "source"; text: string }
  | { type: "caption"; text: string }
  | { type: "img"; src: string; width: number; height: number; alt: string };

type EssayStyles = { readonly [key: string]: string | undefined };

export function SpacparkEssayBlocks({
  blocks,
  imageDir,
  styles,
}: {
  blocks: SpacparkEssayBlock[];
  imageDir: string;
  styles: EssayStyles;
}) {
  return (
    <div className={styles.body}>
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
          case "source":
            return (
              <p key={index} className={styles.source}>
                {block.text.startsWith("SOURCE:") ? (
                  <>
                    SOURCE: <em>{block.text.replace(/^SOURCE:\s*/i, "")}</em>
                  </>
                ) : block.text.startsWith("Source:") ? (
                  <>
                    Source: <em>{block.text.replace(/^Source:\s*/i, "")}</em>
                  </>
                ) : (
                  <em>{block.text}</em>
                )}
              </p>
            );
          case "caption":
            return (
              <p key={index} className={styles.caption}>
                {block.text}
              </p>
            );
          case "img":
            return (
              <figure
                key={index}
                className={`${styles.figure} ${
                  block.width >= 450 ? styles.figureWide : ""
                }`}
              >
                <Image
                  src={`${imageDir}/${block.src}`}
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
  );
}
