import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Kitchen — Formica — nywf64.com",
  description:
    "Kitchen at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Kitchen.
 * Body from legacy formica11.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica11Page() {
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

      <article className={styles.article} aria-labelledby="formica11-title">
        <header className={styles.titleBar}>
          <h1 id="formica11-title" className={styles.titleBarMain}>
            Kitchen
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Kitchen Area I"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica11/formica25.jpg"
              alt="Floorplan featuring Kitchen Area I"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica11/formica28.jpg"
              alt="Kitchen Area I"
              width={379}
              height={500}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"A kitchen that's in love with my wife...Every eye-delighting surface in this all-electric kitchen can be wiped clean in seconds. A textured pattern of Formica laminate - mingling the white of the vinyl flooring with the freshest of spring greens - covers cabinets of new design by Yorktowne...The slim Frigidaire refrigerator-freezer at far right actually has a roomy 19-cubic-foot interior. Stainless sink next to dishwasher includes a disposer.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 21"}</p>
            <p className={styles.caption}>{"Not to mention the juicer. There are several things here that will prove to be quite popular in coming years, including the double stainless steel sink with built-in disposal, the dish sprayer, the well placed built-in dishwasher, the refrigerator nook, and the plentiful cabinets both below and above the work areas. Note also the good over-sink lighting as well as the nice three-unit Andersen thermopane window opening onto the patio and back yard."}</p>
          </figure>
          <p className={styles.sectionHead}>{"Kitchen Area II"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica11/formica26.jpg"
              alt="Floorplan featuring Kitchen Area II"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica11/formica29.jpg"
              alt="Kitchen Area II"
              width={500}
              height={384}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"Double electric ovens by Frigidaire are set in storage wall at convenient height. Smaller one is electronic - a glimpse into the future. Doors glide upward and cutting-board pulls out.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 33"}</p>
            <p className={styles.caption}>{"Note the aluminum exhaust hood, the sliding-door spice cabinet, the chemistry-lab type sink with swan neck spout and wide handle faucets, and the built in double ovens. We had a Frigidaire range like the one pictured, except the burners were where the cutting board is shown here. The oven doors lifted up like on a Mercedes-Benz 300SL Gull wing. I don't think we ever got the electronic oven features to work, and the electric burners were nearly impossible to heat with accurately. Still, it looked good."}</p>
          </figure>
          <p className={styles.sectionHead}>{"Kitchen Area III"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica11/formica27.jpg"
              alt="Floorplan featuring Kitchen Area III"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"This gets a bit confusing, so let's get oriented by standing in kitchen area III and looking back at area I. The sliding yellow panels serve to separate the eating area from the rest of the kitchen. (This and other tiny decorating variances indicate that this series may have been photographed in two different houses.) Now we'll swing around to where the refrigerator is and look back at area III, where we see that it has a kitchen office and a built in charcoal grill!"}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 53"}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica11/formica30.jpg"
                alt="Kitchen Area III"
                width={300}
                height={370}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/formica11/formica32.jpg"
              alt="Kitchen Area III"
              width={414}
              height={299}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"The compact office, tucked into an out-of-the-way corner of the kitchen, takes no more space than a pantry closet but controls the entire house. Here menus are planned, groceries ordered, bills and files kept orderly. With the house-wide Miami-Carey intercom system, it's possible to answer the front door or speak to members of the family in any of the various rooms without leaving this desk.\""}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 23"}</p>
            <p className={styles.caption}>{"The door just barely visible in the extreme left of the picture leads out onto the patio. The doorway in the center of the picture leads into the family room."}</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica11/formica31.jpg"
              alt="Kitchen Area III"
              width={500}
              height={491}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Closeup of the breakfast area. Note the Eames-like chairs and the fully extended sliding screen. The table has been set with \"World's Fair\" Melmac quality melamine dinnerware."}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, p. 23"}</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica10"
        overviewHref="/formicaoverview"
        nextHref="/formica12"
      />
    </>
  );
}
