import type { Metadata } from "next";
import Image from "next/image";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./austria08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A World's Fair Legacy Lost — Austria — nywf64.com",
  description:
    "The Austrian Pavilion’s post-Fair life at Cockaigne Ski Resort and its loss to fire in 2011 — 1964/1965 New York World’s Fair on nywf64.com.",
};

type FirePhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const FIRE_PHOTOS: FirePhoto[] = [
  {
    src: "/images/austria08/austria06.jpg",
    width: 400,
    height: 266,
    alt: "Fire destroys the Austrian Pavilion at the Cockaigne Ski Lodge",
    caption: "Fire destroys the Austrian Pavilion at the Cockaigne Ski Lodge",
  },
  {
    src: "/images/austria08/austria07.jpg",
    width: 400,
    height: 266,
    alt: "Firefighters look on as fire engulfs the Lodge",
    caption: "Firefighters look on as fire engulfs the Lodge",
  },
  {
    src: "/images/austria08/austria08.jpg",
    width: 400,
    height: 266,
    alt: "Austria's Pavilion ablaze at Cockaigne Ski Lodge",
    caption: "Austria's Pavilion ablaze at Cockaigne Ski Lodge",
  },
  {
    src: "/images/austria08/austria09.jpg",
    width: 400,
    height: 266,
    alt: "Austria's Pavilion ablaze at Cockaigne Ski Lodge",
    caption: "Austria's Pavilion ablaze at Cockaigne Ski Lodge",
  },
  {
    src: "/images/austria08/austria10.jpg",
    width: 400,
    height: 245,
    alt: "Smoldering ruins of the Austria Pavilion at Cockaigne Ski Lodge",
    caption: "Smoldering ruins of the Austria Pavilion at Cockaigne Ski Lodge",
  },
  {
    src: "/images/austria08/austria11.jpg",
    width: 400,
    height: 300,
    alt: "Smoldering ruins of the Austria Pavilion at Cockaigne Ski Lodge",
    caption: "Smoldering ruins of the Austria Pavilion at Cockaigne Ski Lodge",
  },
  {
    src: "/images/austria08/austria12.jpg",
    width: 400,
    height: 300,
    alt: "Smoldering ruins of the Austria Pavilion at Cockaigne Ski Lodge",
    caption: "Smoldering ruins of the Austria Pavilion at Cockaigne Ski Lodge",
  },
];

/**
 * Austria — A World's Fair Legacy Lost.
 * Body from legacy austria08.html (custom essay / news reprint — no shared
 * brochure/manual/photographs standard).
 *
 * Stack: hero → AustriaNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Austria08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Austria">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/austriaoverview/hero-banner.jpg"
            alt="Austria at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AustriaNavChrome />

      <article className={styles.article} aria-labelledby="austria08-title">
        <header className={styles.titleBar}>
          <h1 id="austria08-title" className={styles.titleBarMain}>
            A World&apos;s Fair Legacy Lost
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            <strong>The Austrian Pavilion </strong>
            became a part of the Cockaigne Ski Resort in Cherry Valley, NY, just
            east and just north of Jamestown after the Fair closed. It was moved
            there from the Fair and reconstructed as a ski lodge during the
            winter of 1966. This World&apos;s Fair legacy was lost to history on
            the night of January 24-25, 2011 when fire completely destroyed the
            former Austrian Pavilion at the Cockaigne Ski Resort.
          </p>

          <div className={styles.lodgePair}>
            <figure className={styles.figure} style={{ width: "min(16.6875rem, 100%)" }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/austria08/austria14.jpg"
                  alt="Austrian Pavilion at the Cockaigne Ski Lodge, portrait view"
                  width={267}
                  height={400}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ width: "min(25rem, 100%)" }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/austria08/austria13.jpg"
                  alt="Austrian Pavilion at the Cockaigne Ski Lodge, landscape view"
                  width={400}
                  height={267}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>
          <div className={styles.lodgePairMeta}>
            <p className={styles.caption}>
              Photos of the Austrian Pavilion at the Cockaigne Ski Lodge c. 2009
            </p>
            <p className={styles.source}>
              SOURCE: presented courtesy Kate Hill Collection
            </p>
          </div>

          <hr className={styles.sectionRule} />

          <div className={styles.newsWrap}>
            <div className={styles.newsBox}>
              <h2 className={styles.newsHeadline}>Lodge Burns</h2>
              <h3 className={styles.newsSubhead}>
                Fire Destroys Main Building at Cockaigne
              </h3>
              <p className={styles.newsByline}>By Christopher Kinsler</p>
              <p>
                CHERRY&nbsp;CREEK - The historic building that has long been the
                symbol for Cockaigne Ski Center is gone.
              </p>
              <p>
                Fire gutted the Austrian World&apos;s Fair Pavilion that stood at
                the base of the Cherry Creek resort&apos;s slopes Monday night as
                fire crews from throughout the region scurried to contain the
                blaze.
              </p>
              <p>
                The initial call - coming shortly before 10:30 p.m., was delivered
                by a Chautauqua County Highway Department plow driver who spotted
                flames from the road. When first responders arrived at the site,
                hope of saving the structure was gone.
              </p>
              <p>
                &quot;The building was fully engulfed when we got here,&quot;
                Cherry Creek Fire Chief Jim Abbey said. &quot;At that point it
                became a defensive fire. Our concern now is keeping those arches
                from falling, and there are oxygen bottles in the first aid
                room.&quot;
              </p>
              <p>
                No one was believed to be in the building and the cause of the
                fire is still unknown, Abbey said at the scene.
              </p>
              <p>
                Meanwhile, three employees stood on the slope side of the
                building, watching in tears as embers filled the air.
              </p>
              <p>&quot;It&apos;s like watching my home burn,&quot; one said.</p>
              <p>
                Crews pushed onlookers back as a precaution for possible
                explosions from oxygen tanks inside the building and fire trucks
                filled the resort&apos;s parking lot.
              </p>
              <p>
                The fire marks the end for a building that was filled with
                history. The pavilion, originally constructed in Austria for $1
                million, was designed for the 1964 World&apos;s Fair in New York
                City, where it won top awards for its innovative design.
                Cockaigne Inc., then purchased the building for $3,000 in 1965
                from the Austrian Trade Delegation.
              </p>
              <p>
                The pavilion was then transported in pieces from Flushing, N.Y.
                to Jamestown via rail and road and finally reassembled in the
                winter of 1966. The final piece of the building&apos;s history was
                Monday with firefighters from nine departments working into the
                early morning.
              </p>
              <p>
                Abbey said the wind and cold weather were causing no major
                issues, except for one tanker freezing up.
              </p>
              <p>
                Volunteer crews from Cherry Creek, Ellington, Kennedy,
                Sinclairville, Conewango, Falconer and Mayville were called to
                the scene with Ellington and Cherry Creek EMS&nbsp;on site also.
                At presstime, Ellery Center was on standby with a water tanker,
                and Rescue-71 was alerted.
              </p>
            </div>
            <p className={styles.newsSource}>
              SOURCE: Jamestown Post Journal January 25, 2011
            </p>
          </div>

          <div className={styles.fireGrid}>
            {FIRE_PHOTOS.map((photo) => (
              <figure key={photo.src} className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>{photo.caption}</figcaption>
                <p className={styles.source}>SOURCE: Online</p>
              </figure>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/austria07"
        explicitPrevious
        overviewHref="/austriaoverview"
        nextHref="/austriaoverview"
      />
    </>
  );
}
