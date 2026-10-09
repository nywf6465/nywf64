import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texas06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "An Oasis of Entertainment at the Fair — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Promotional folder for Texas Pavilions and Music Hall — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall — promotional folder.
 * Body from legacy texas06.html.
 * Stack: hero → TexasNavChrome → navy title → folder → Nav2Bar.
 */
export default function Texas06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Texas Pavilions & Music Hall">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/texasoverview/hero-banner.jpg"
            alt="Texas Pavilions & Music Hall at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TexasNavChrome />

      <article className={styles.article} aria-labelledby="texas06-title">
        <header className={styles.titleBar}>
          <h1 id="texas06-title" className={styles.titleBarMain}>
            An Oasis of Entertainment at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <hr className={styles.sectionRule} />
          <Image
            src="/images/texas06/texas42.jpg"
            alt=""
            width={900}
            height={51}
            className={styles.wideImg}
            unoptimized
          />
          <hr className={styles.sectionRule} />
          <Image
            src="/images/texas06/texas37.jpg"
            alt="Texas Pavilions &amp; Music Hall Aerial"
            width={900}
            height={400}
            className={styles.wideImg}
            unoptimized
          />
          <Image
            src="/images/texas06/texas40.jpg"
            alt="Texas Pavilions &amp; Music Hall Blueprint"
            width={900}
            height={682}
            className={styles.wideImg}
            unoptimized
          />

          <p className={styles.legend}>
            <span className={styles.legendNum}>1 </span>
            <span className={styles.legendLabel}>BEER GARDEN</span>
            <span className={styles.legendNum}> 2 </span>
            <span className={styles.legendLabel}>
              FOOD SERVICE AND EXHIBITS OF MODERN TEXAS
            </span>
            <span className={styles.legendNum}> 3 </span>
            <span className={styles.legendLabel}>
              NATIONAL AERONAUTICS AND SPACE ADMINISTRATION (NASA) EXHIBIT{" "}
            </span>
            <span className={styles.legendNum}>4 </span>
            <span className={styles.legendLabel}>
              SHRIMP BAR AND GULF COAST EXHIBITS
            </span>
            <span className={styles.legendNum}> 5 </span>
            <span className={styles.legendLabel}>SHIPPING INDUSTRY EXHIBITS</span>
            <span className={styles.legendNum}> 6 </span>
            <span className={styles.legendLabel}>
              EXHIBITS OF MODERN TEXAS
            </span>
            <span className={styles.legendNum}> 7 </span>
            <span className={styles.legendLabel}>
              MEXICAN GARDENS AND EXHIBITS
            </span>
            <span className={styles.legendNum}> 8 </span>
            <span className={styles.legendLabel}>
              FOOD SERVICE AND EXHIITS OF MODERN TEXAS
            </span>
            <span className={styles.legendNum}> 9 </span>
            <span className={styles.legendLabel}>CATTLE INDUSTRY EXHIBITS</span>
            <span className={styles.legendNum}> 10 </span>
            <span className={styles.legendLabel}>ENTRANCE TO FRONTIER PALACE</span>
            <span className={styles.legendNum}> 11 &amp; 12</span>
            <span className={styles.legendLabel}>
              LOBBY AND EXHIBIT AREA (1ST FLOOR){" "}
            </span>
            <span className={styles.legendNum}>11 </span>
            <span className={styles.legendLabel}>FRONTIER PALACE (2ND FLOOR)</span>
            <span className={styles.legendNum}> 12 </span>
            <span className={styles.legendLabel}>
              DRAWING-ROOM LOUNGE (2ND FLOOR){" "}
            </span>
            <span className={styles.legendNum}>13 </span>
            <span className={styles.legendLabel}>TEXAS TOURISM AND EXHIBITS</span>
            <span className={styles.legendNum}> 14 </span>
            <span className={styles.legendLabel}>PETROLEUM INDUSTRY EXHIBITS</span>
            <span className={styles.legendNum}> 15 </span>
            <span className={styles.legendLabel}>THE MUSIC HALL</span>
          </p>

          <p className={styles.source}>
            SOURCE: Promotional Folder, Texas Pavilions and Music Hall
          </p>

          <div className={styles.stack}>
            <Image
              src="/images/texas06/texas43.jpg"
              alt="THE TEXAS PAVILIONS"
              width={159}
              height={105}
              className={styles.stackImg}
              unoptimized
            />
            <Image
              src="/images/texas06/texas41.jpg"
              alt="Star"
              width={33}
              height={28}
              className={styles.star}
              unoptimized
            />
            <Image
              src="/images/texas06/texas44.jpg"
              alt="SPECIAL EXHIBIT AREAS"
              width={214}
              height={146}
              className={styles.stackImg}
              unoptimized
            />
            <Image
              src="/images/texas06/texas41.jpg"
              alt="Star"
              width={33}
              height={28}
              className={styles.star}
              unoptimized
            />
            <Image
              src="/images/texas06/texas45.jpg"
              alt="THE MUSIC HALL"
              width={198}
              height={80}
              className={styles.stackImg}
              unoptimized
            />
            <Image
              src="/images/texas06/texas41.jpg"
              alt="Star"
              width={33}
              height={28}
              className={styles.star}
              unoptimized
            />
            <Image
              src="/images/texas06/texas46.jpg"
              alt="COLORFUL MUSICAL EXTRAVAGANZA"
              width={253}
              height={167}
              className={styles.stackImg}
              unoptimized
            />
            <Image
              src="/images/texas06/texas41.jpg"
              alt="Star"
              width={33}
              height={28}
              className={styles.star}
              unoptimized
            />
            <Image
              src="/images/texas06/texas47.jpg"
              alt="THE FRONTIER PALACE"
              width={221}
              height={171}
              className={styles.stackImg}
              unoptimized
            />
            <Image
              src="/images/texas06/texas41.jpg"
              alt="Star"
              width={33}
              height={28}
              className={styles.star}
              unoptimized
            />
            <Image
              src="/images/texas06/texas48.jpg"
              alt="THE CHAMPAGNE CIRCLE"
              width={226}
              height={177}
              className={styles.stackImg}
              unoptimized
            />
            <Image
              src="/images/texas06/texas41.jpg"
              alt="Star"
              width={33}
              height={28}
              className={styles.star}
              unoptimized
            />
            <Image
              src="/images/texas06/texas49.jpg"
              alt="THE DRAWING-ROOM LOUNGE"
              width={217}
              height={157}
              className={styles.stackImg}
              unoptimized
            />
          </div>

          <div className={styles.contact}>
            <p>
              Special facilities for meetings, conventions, fashion shows,
              charity, civic and social functions. Centrally located, easy to get
              to, huge parking facilities.
            </p>
            <p>
              For complete information contact: Mr. Gordon R. Wynne,
              Vice-President, Wynne-Compass Fair, Inc. 1841 Broadway, New York
              23, N. Y.
            </p>
            <p>Telephone 212, JU&nbsp;6-8315.</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/texas05"
        explicitPrevious
        overviewHref="/texasoverview"
        nextHref="/texas07"
      />
    </>
  );
}
