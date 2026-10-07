import type { Metadata } from "next";
import Image from "next/image";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ibm18.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The End of the Fair — IBM Pavilion — nywf64.com",
  description:
    "Demolition photographs of the IBM Pavilion, Winter 1966 — 1964/1965 New York World’s Fair on nywf64.com.",
};

const photos = [
  ["ibm70.01.jpg", 300, 290],
  ["ibm70.02.jpg", 300, 290],
  ["ibm70.03.jpg", 300, 290],
  ["ibm70.04.jpg", 300, 290],
  ["ibm70.05.jpg", 300, 290],
  ["ibm70.06.jpg", 300, 290],
  ["ibm70.07.jpg", 300, 290],
  ["ibm70.08.jpg", 300, 290],
  ["ibm70.09.jpg", 300, 290],
] as const;

/**
 * IBM — The End of the Fair (demolition grid).
 * Body from legacy ibm18.html.
 */
export default function Ibm18Page() {
  return (
    <>
      <section className={styles.hero} aria-label="IBM Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ibmoverview/hero-banner.jpg"
            alt="IBM Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IbmNavChrome />

      <article className={styles.article} aria-labelledby="ibm18-title">
        <header className={styles.titleBar}>
          <h1 id="ibm18-title" className={styles.titleBarMain}>
            The End of the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.subhead}>
            Demolition of the IBM Pavilion, Winter, 1966
          </h2>
          <p className={styles.source}>SOURCE: Online Auction</p>

          <div className={styles.grid}>
            {photos.map(([file, width, height]) => (
              <Image
                key={file}
                src={`/images/ibm18/${file}`}
                alt=""
                width={width}
                height={height}
                className={styles.tile}
                unoptimized
              />
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ibm17"
        overviewHref="/ibmoverview"
        nextHref="/ibmoverview"
      />
    </>
  );
}
