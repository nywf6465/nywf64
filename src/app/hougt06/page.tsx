import type { Metadata } from "next";
import Image from "next/image";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hougt06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import {
  EXHIBITORS_LEFT,
  EXHIBITORS_RIGHT,
  type ExhibitorLine,
} from "./exhibitors";

export const metadata: Metadata = {
  title: "Lists of Sub-Exhibitors — House of Good Taste — nywf64.com",
  description:
    "House of Good Taste sub-exhibitors from the 1964 World's Fair Information Manual on nywf64.com.",
};

function NameList({ items }: { items: ExhibitorLine[] }) {
  return (
    <ul className={styles.names}>
      {items.map((item, index) => {
        const indent = typeof item !== "string";
        const text = typeof item === "string" ? item : item.text;
        return (
          <li
            key={`${text}-${index}`}
            className={indent ? styles.indent : undefined}
          >
            {text}
          </li>
        );
      })}
    </ul>
  );
}

/** Body from legacy hougt06.html. Legacy spellings preserved (Manfuacturing, Ameria, etc.). */
export default function Hougt06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="House of Good Taste">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hougtoverview/hero-banner.jpg"
            alt="House of Good Taste at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HougtNavChrome />

      <article className={styles.article} aria-labelledby="hougt06-title">
        <header className={styles.titleBar}>
          <h1 id="hougt06-title" className={styles.titleBarMain}>
            List of Sub-Exhibitors from 1964 World&apos;s Fair Information
            Manual
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.columns}>
            <NameList items={EXHIBITORS_LEFT} />
            <NameList items={EXHIBITORS_RIGHT} />
          </div>
          <p className={styles.source}>
            SOURCE: 1964 World&apos;s Fair Information Manual
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hougt05"
        overviewHref="/hougtoverview"
        nextHref="/hougt07"
      />
    </>
  );
}
