import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Master Bedroom & Master Bath — Formica — nywf64.com",
  description:
    "Master Bedroom & Master Bath at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Master Bedroom & Master Bath.
 * Body from legacy formica08.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Formica">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/formicaoverview/hero-banner.jpg"
            alt="Formica at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FormicaNavChrome />

      <article className={styles.article} aria-labelledby="formica08-title">
        <header className={styles.titleBar}>
          <h1 id="formica08-title" className={styles.titleBarMain}>
            Master Bedroom &amp; Master Bath
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Master Bedroom"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica08/formica14.jpg"
              alt="Floorplan featuring Master Bedroom"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <p className={styles.caption} style={{ fontStyle: "italic" }}>{"\"Predominant here, a restful color scheme of cool blues and greens. The sprightly daisy pattern is one of the specially designed, washable acrylic fabrics that appear throughout the house. Here it curtains bedroom windows and covers the bed; and the same pattern is repeated in laminated plastic for the headboard.\""}</p>
          <p className={styles.source}>{"SOURCE: Souvenir Book, p. 17"}</p>
          <p className={styles.caption}>{"A luxurious plush \"Imperial Court\" carpet has joined the \"Dancing Daisy\" draperies and bedspread. The round three-legged nightstands as well as the rolling vanity with the boomerang top are right out of the 50's, and maybe The Jetsons. Note the white TouchTone Princess phone on the far nightstand. The room seems to have a rather feminine look compared with today's designs."}</p>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica08/formica15.jpg"
                alt="Bed"
                width={243}
                height={344}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica08/formica16.jpg"
                alt="Sitting Area"
                width={251}
                height={344}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <p className={styles.sectionHead}>{"Master Bath"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica08/formica17.jpg"
              alt="Floorplan featuring Master Bath"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica08/formica18.jpg"
              alt="Master Bath"
              width={457}
              height={500}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"Master bathroom of World's Fair House serves two persons with twin American Standard lavatories...Push-Pull faucets control water temperature and volume with one hand.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 84"}</p>
            <p className={styles.caption}>{"Note the \"WFH\" monograms on all the towels, as well as the bizarre (by our standards) color combinations. Green, blue and yellow seem to be a recurring theme in this house, if not the sixties altogether. They've got the idea for the bathtub surround almost right, but those seams between the laminate sheets will not be easy to keep clean. It will be several more decades before one-piece fiberglass shower-bath stalls become standard in new homes, but the one-faucet push-pull control for the sink will catch on sooner. This master bath would seem extremely cramped in today's home."}</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica07"
        overviewHref="/formicaoverview"
        nextHref="/formica09"
      />
    </>
  );
}
