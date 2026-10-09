import type { Metadata } from "next";
import Image from "next/image";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/simmonEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Releases & Press — Simmons — nywf64.com",
  description:
    "Simmons Beautyrest press releases and press coverage — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons — Press Releases & Press.
 * Body from legacy simmon06.html.
 *
 * Stack: hero → SimmonNavChrome → navy title → article → Nav2Bar.
 */
export default function Simmon06Page() {
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

      <article className={styles.article} aria-labelledby="simmon06-title">
        <header className={styles.titleBar}>
          <h1 id="simmon06-title" className={styles.titleBarMain}>
            Press Releases &amp; Press
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.source}>
            Source: Simmons Press Release, June 23, 1964
          </p>

          <h2 className={styles.heading}>Simmons Day at the World&apos;s Fair</h2>
          <div className={styles.body}>
            <p>
              It&apos;s Simmons Day at the New York World&apos;s Fair on June
              24th and to celebrate the occasion, Simmons invited their Atlantic
              Division retailers to be their guests at a special VIP reception.
            </p>
            <p>
              Over 600 dealers will meet at the Simmons New York Showroom for an
              early breakfast before boarding the sightseeing buses to the Fair.
              After a tour of the Fair grounds, Simmons President Grant Simmons,
              Jr. will greet the visitors as they arrive at the Simmons
              World&apos;s Fair Pavilion, &quot;Land of Enchantment&quot;. This
              is the popular building featuring the Simmons Rest Alcoves, that
              are rented to Fair visitors for half-hour naps.
            </p>
            <p>
              A special ceremony is planned when Grant Simmons, Jr. plants a
              tree on the Simmons Pavilion grounds at the Fair to commemorate
              Simmons Day. After the duration of the Fair in 1965, this tree
              will be moved to the grounds of the company&apos;s Munster plant
              in Indiana.
            </p>
            <p>
              A luncheon for VIP&apos;s will be held at the Pavilion of American
              Interiors. After lunch, guests will tour the Pavilion to see room
              settings of Simmons hide-a-beds.
            </p>
          </div>

          <div className={styles.photoRow}>
            <figure className={styles.figure} style={{ maxWidth: 198 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon06/simmons08.jpg"
                  alt="Simmons Day coupons"
                  width={198}
                  height={600}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 236 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon06/simmons09.jpg"
                  alt="VIP button"
                  width={236}
                  height={243}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>
          <p className={styles.caption}>
            Promotional materials for <em>Simmon&apos;s Day at the New York
            World&apos;s Fair</em> include coupons for admittance to attractions
            and this large <em>VIP</em> button.
          </p>

          <p className={styles.source}>
            Source: Simmons Press Release, June 22, 1964
          </p>
          <h2 className={styles.heading}>
            Simmons Equips World&apos;s Fair Atomedic Hospital
          </h2>
          <div className={styles.body}>
            <p>
              A revolutionary new concept in hospital design called the Atomedic
              Hospital opens as the working hospital of the New York World&apos;s
              Fair tomorrow. The second such hospital ever built, the Atomedic
              Hospital will be presented to the World&apos;s Fair President,
              Robert Moses and the Medical Officer, General Brownton, M.D. at a
              special ceremony Tuesday morning, June 23 by the Atomedic Research
              Center Inc.
            </p>
            <p>
              The first Atomedic Hospital opened in Montgomery, Alabama just a
              year ago under the direction of Hugh C. MacQuire, M.D. the
              originator of this unique concept, and has been in operation since
              then.
            </p>
            <p>
              A member of the Atomedic Industry Planning Council, Simmons has
              developed furniture, built-in units for the wedge-shaped
              patients&apos; rooms, new concepts in operating room equipment
              through the Simmons Hausted Division and furnished specially
              designed color-coded storage and office equipment for the
              laboratory and administrative sections of the Atomedic Hospital.
              Ray Pascoe of Simmons and Chairman of the Industry Planning
              Council, stated these products were only the beginning of the
              development of this totally new concept. Simmons research continues
              on new methods, materials, techniques and designs to contribute to
              this significant advance.
            </p>
            <p>
              All interiors of the round, windowless Atomedic Hospital structure
              were planned, furnished and color coordinated by the Interior
              Design Department of Simmons to create a feeling of comfort and
              well being for patients and a convenient, pleasant and efficient
              working atmosphere for hospital staff.
            </p>
            <p>
              Nurses from the original Atomedic Hospital in Montgomery will be
              in attendance at the World&apos;s Fair Atomedic to explain and
              guide professional medical groups through the building. Tours are
              arranged by the industry representative.
            </p>
            <p>
              As a working emergency hospital at the New York World&apos;s Fair,
              the Atomedic Hospital will be the only installation at the Fair
              (outside of the Fair&apos;s maintenance group) to be in operation
              around the clock 24 hours a day.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon06/simmons10.jpg"
                alt="Atomedic Hospital"
                width={350}
                height={172}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Atomedic Hospital</figcaption>
          </figure>
          <p className={styles.source}>
            Source: Photo courtesy Mike Kraus Collection © Copyright 2002
          </p>

          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon06/simmons23.jpg"
                alt="Stairway to Dreamland"
                width={320}
                height={354}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Stairway to Dreamland sets off the daring Simmons Beautyrest
              Center pavilion. After climbing spiral stairs visitors will be
              able to take 30-minute catnaps to rest aching backs.
            </figcaption>
          </figure>

          <h2 className={styles.heading}>If You Must Sleep...</h2>
          <div className={styles.body}>
            <p>
              The scarcest commodity at the World&apos;s Fair will be doled out
              in 46 tiny rooms.
            </p>
            <p>It is sleep.</p>
            <p>
              This is the prime attraction of the Simmons Beautryest Center.
              Fair visitors with tired feet and aching backs will be able to
              relax in the center&apos;s carpeted rest alcoves for 30-minute
              naps.
            </p>
            <p>
              Each air-conditioned room is fitted-out with and electric
              adjustable bed and is protected from the sun by ceiling-to-floors
              Venetian blinds.
            </p>
            <p>
              The king-sized snoozeville also includes a display of Simmons
              products.
            </p>
            <p>
              The three-story pavilion has the Fair&apos;s only outside spiral
              staircase, winding upwards above a reflecting pool.
            </p>
          </div>
          <p className={styles.source}>
            SOURCE: <em>Long Island Star Journal</em>, Tuesday, March 31, 1964,
            Courtesy Rich Post Collection
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/simmon05"
        explicitPrevious
        overviewHref="/simmonoverview"
        nextHref="/simmon07"
      />
    </>
  );
}
