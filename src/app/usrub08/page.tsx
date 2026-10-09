import type { Metadata } from "next";
import Image from "next/image";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./usrub08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: 'U.S. Royal "GIANT TIRE" Toy — U.S. Rubber — nywf64.com',
  description:
    'The U.S. Royal battery-operated Giant Tire toy from the 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * U.S. Rubber — U.S. Royal "GIANT TIRE" Toy.
 * Body from legacy usrub08.html. Legacy wording (“toys been”, “it's original”) preserved.
 *
 * Stack: hero → UsrubNavChrome → navy title → photos → Nav2Bar.
 */
export default function Usrub08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Rubber">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/usruboverview/hero-banner.jpg"
            alt="U.S. Rubber at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UsrubNavChrome />

      <article className={styles.article} aria-labelledby="usrub08-title">
        <header className={styles.titleBar}>
          <h1 id="usrub08-title" className={styles.titleBarMain}>
            U.S. Royal &quot;GIANT&nbsp;TIRE&quot;&nbsp;Toy
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            Ferris Wheel toys been popular for as long as Ferris Wheels have been
            around. Old tin versions from the late 1800s and early 1900s are
            sought-after by antique collectors the world over. U.S. Rubber created
            a battery-operated model of their famous World&apos;s Fair Giant Tire which
            was sold at the Fair that has become a sought-after and popular
            collectible as well. The toy features gondolas that actually rotate
            around the wheel. It came complete with a number of tiny plastic people
            that could be loaded into the gondolas for a ride. The model is
            especially collectible if it can be acquired with the plastic people
            and it's original yellow box.
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/usrub08/usrub13.jpg"
              alt="US Royal Tire Toy"
              width={500}
              height={375}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/usrub08/usrub27.jpg"
              alt="Toy Tire Box"
              width={500}
              height={384}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>
              SOURCE: (Top) on-line Auction (Bottom) Courtesy Larry Hubble collection
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/usrub07"
        explicitPrevious
        overviewHref="/usruboverview"
        nextHref="/usrub09"
      />
    </>
  );
}
