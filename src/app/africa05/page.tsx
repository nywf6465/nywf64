import type { Metadata } from "next";
import Image from "next/image";
import { AfricaNavChrome } from "@/components/AfricaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./africa05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Press Announcement — Africa — nywf64.com",
  description:
    "Download the Africa Pavilion press announcement pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAMPHLET_PDF = "/pdf/africa/press-conference.pdf";

/**
 * Africa pamphlet page — Press Announcement PDF download.
 * Body from legacy africa05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Stack: hero → AfricaNavChrome → navy title bar → cover + copy → Nav2Bar.
 */
export default function Africa05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Africa">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/africaoverview/hero-banner.jpg"
            alt="Africa pavilion at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AfricaNavChrome />

      <article className={styles.article} aria-labelledby="africa05-title">
        <header className={styles.titleBar}>
          <h1 id="africa05-title" className={styles.titleBarMain}>
            Pamphlet: Press Announcement
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverWrap}>
            <a
              className={styles.coverLink}
              href={PAMPHLET_PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Download Africa Pavilion press announcement pamphlet (PDF)"
            >
              <Image
                src="/images/africa05/press-announcement.jpg"
                alt="Africa Pavilion press announcement pamphlet"
                width={200}
                height={133}
                className={styles.cover}
                unoptimized
              />
            </a>
          </div>

          <div className={styles.body}>
            <p>
              The pamphlet has been saved in <strong>PDF format</strong>.{" "}
              <span className={styles.tapHint}>
                Click or tap the image above
              </span>{" "}
              to download the pamphlet. Once inside the document you can use the{" "}
              <em>zoom feature</em> to increase or decrease the document size to
              a comfortable viewing level.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/africa04"
        explicitPrevious
        overviewHref="/africaoverview"
        nextHref="/africaoverview"
      />
    </>
  );
}
