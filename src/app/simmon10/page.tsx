import type { Metadata } from "next";
import Image from "next/image";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/simmonEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Epilogue — Simmons — nywf64.com",
  description:
    "Epilogue on the Simmons Company after the 1964/1965 New York World’s Fair — nywf64.com.",
};

/**
 * Simmons — Epilogue.
 * Body from legacy simmon10.html.
 *
 * Stack: hero → SimmonNavChrome → navy title → article → Nav2Bar.
 */
export default function Simmon10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Simmons">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/simmonoverview/hero-banner.jpg"
            alt="Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SimmonNavChrome />

      <article className={styles.article} aria-labelledby="simmon10-title">
        <header className={styles.titleBar}>
          <h1 id="simmon10-title" className={styles.titleBarMain}>
            Epilogue
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              In 1978, Grant Simmons Jr. resigned. In 1979, Gulf &amp; Western
              acquired a controlling interest in Simmons through stock
              purchases. They split the company into two entities, Simmons U.S.A.
              and Simmons Universal. In 1986, Wickes Corporation purchases
              Simmons U.S.A. from Gulf &amp; Western, and one year later Wesray
              Capital and Simmons management acquired Simmons U.S.A. from Wickes.
              In 1988 the name was changed from Simmons U.S.A. back to Simmons
              Company, and in 1989 an Employee Stock Option Plan purchased all
              outstanding stock. Finally, in 1991, Merrill Lynch Capital Partners
              acquired a majority stock position. Edward Steed, a
              third-generation employee, noted what must have been a universal
              feeling among the workers: &quot;... it was affecting this sacred
              thing, this company my father worked for. To many employees, it
              was that old biblical thing: &apos;There rose up a Pharaoh who
              didn&apos;t know Moses.&apos; &quot;
            </p>
            <p>
              In 1996 Simmons exceeded $500 million in U.S. sales and about $800
              million worldwide. As of 2003, they are the world&apos;s number
              one name in bedding with $1 billion in worldwide sales. The
              company is headquartered in Atlanta.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 250 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon10/simmons31.jpg"
                alt="Simmons' Atlanta Headquarters"
                width={250}
                height={201}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Simmons&apos; Atlanta Headquarters
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              Author&apos;s note- I would like to thank the{" "}
              <em>Simmons Company</em>, and specifically Mr. Roger Murray and
              Ms. Jo Ann Merritt for their help in providing information for
              this feature.
            </p>
            <p>
              Be sure to check out Simmons&apos; web page:{" "}
              <a href="http://www.simmonsco.com/" rel="noopener noreferrer">
                http://www.simmonsco.com/
              </a>
            </p>
            <p>
              <em>-Bradd Schiffman, March 2003</em>
            </p>
            <p>
              Webmaster&apos;s note- I would like to Bradd for his &quot;
              <em>tireless</em>&quot; efforts in putting together this feature
              presentation on the Simmons Pavilion. Many thanks to Mike Kraus,
              Bill Cotter and Rich Post for their contributions as well.
            </p>
            <p>
              <em>-Bill Young, March 2003</em>
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/simmon09"
        explicitPrevious
        overviewHref="/simmonoverview"
        nextHref="/simmonoverview"
      />
    </>
  );
}
