import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texas09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "To Broadway with Love - Ephemera — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Promotional ephemera for To Broadway With Love at the Texas Pavilions Music Hall, 1964/1965 New York World’s Fair on nywf64.com.",
};

const GALLERY_SCENES = [
  { src: "texas18.jpg", alt: "Scene 1", w: 500, h: 318 },
  { src: "texas24.jpg", alt: "Scene 2", w: 500, h: 318 },
  { src: "texas19.jpg", alt: "Scene 3", w: 500, h: 318 },
  { src: "texas20.jpg", alt: "Scene 4", w: 500, h: 318 },
  { src: "texas21.jpg", alt: "Scene 5", w: 500, h: 318 },
  { src: "texas22.jpg", alt: "Scene 6", w: 500, h: 318 },
  { src: "texas25.jpg", alt: "Scene 7", w: 500, h: 318 },
  { src: "texas23.jpg", alt: "Scene 8", w: 500, h: 318 },
  { src: "texas02.jpg", alt: "Scene 9", w: 500, h: 318 },
  { src: "texas11.jpg", alt: "Scene 10", w: 500, h: 318 },
] as const;

const FLYER_QUOTES: { quote: string; source: string }[] = [
  {
    quote:
      "'To Broadway With Love' is the perfect show for a World's Fair, something to knock out the eyes of any visitor from Montana - or Manhattan.",
    source: "LIFE Magazine",
  },
  {
    quote: "A triumph of high spirits . . . thoroughly enjoyable.",
    source: "N.Y. Herald Tribune",
  },
  {
    quote: "It is a big show on a huge stage.  It's a great show for the Fair.",
    source: "N.Y. Post",
  },
  {
    quote: "A spectacular, fast-moving 90-minute show.",
    source: "United Press",
  },
  {
    quote:
      "'To Broadway With Love' is lavish, enjoyable, and delightfully nostalgic. There are lots of beautiful show girls and tunes you can sing. It's fine family entertainment.",
    source: "NBC TV",
  },
];

/**
 * Texas Pavilions — To Broadway with Love ephemera (legacy texas09.html).
 * Stack: hero → TexasNavChrome → navy title → ephemera → Nav2Bar.
 */
export default function Texas09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Texas Pavilions & Music Hall">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/texasoverview/hero-banner.jpg"
            alt="Texas Pavilions & Music Hall at the 1964/1965 New York World&apos;s Fair"
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

      <article className={styles.article} aria-labelledby="texas09-title">
        <header className={styles.titleBar}>
          <h1 id="texas09-title" className={styles.titleBarMain}>
            To Broadway with Love - Ephemera
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section aria-label="Promotional brochure">
            <figure>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/texas09/texas51.jpg"
                  alt="To Broadway With Love brochure cover"
                  width={600}
                  height={282}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/texas09/texas53.jpg"
                  alt="To Broadway With Love brochure spread"
                  width={600}
                  height={199}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <div className={styles.brochureBlock}>
              <div className={styles.brochureCols}>
                <div>
                  <p>
                    A new kind of musical production marks a milestone in the
                    American theatre . . . with the presentation of TO BROADWAY
                    WITH LOVE in the fabulous new Music Hall at the Fair.
                  </p>
                  <p>
                    Featuring the great and unforgettable melodies of the past
                    100 years on the American stage, TO BROADWAY WITH LOVE is a
                    spectacular salute to the Great White Way and its restless,
                    dynamic, brilliant theatrical beat. It will unfold on one of
                    the world&apos;s largest stages and in the newest and most
                    interesting theatre -- THE MUSIC HALL -- designed especially
                    to hold this panoramic presentation and its talented company
                    performing across the boards,
                  </p>
                </div>
                <div>
                  <p>a sweeping 184 feet, in dazzling production numbers.</p>
                  <p>
                    Produced by George Schaefer and conceived and staged by
                    Morton Da Costa, TO BROADWAY WITH LOVE combines the talents
                    of many of America&apos;s leading theatrical personalities.
                    The dances and musical numbers will be staged by Donald
                    Saddler, the music adapted and arranged by Philip J. Lange,
                    scenery designed by Peter Wolf, costumes designed by Freddy
                    Wittop, lighting designed by Jean Rosenthal and musical
                    direction by Franz Allers.
                  </p>
                  <p>
                    TO BROADWAY WITH LOVE is presented by Angus G. Wynne, Jr.,
                    and
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.brochureBlock}>
              <div className={styles.brochureCols}>
                <div>
                  <p>
                    Compass Fair, Inc. The Music Hall in The Texas Pavilions and
                    the production it showcases will be one of your most
                    memorable adventures at The New York World&apos;s Fair. Plan
                    now to see it!
                  </p>
                  <p>
                    Reservations should be made early for choice seats.
                    Performances daily at 3:00, 7:00 and 9:30 p.m., all during
                    the 1964-1965 New York World&apos;s Fair.
                  </p>
                  <p>
                    TO BROADWAY WITH LOVE opens on April 22, 1964. Reservations
                    may now be made for any of the performances. Prices are
                    $4.80, $4.00, $3.00 and $2.00. For mail orders write to
                    Wynne-Compass Fair, Inc., Suite 606, Chatham Hotel, 33 East
                    48th Street, New York 17, New York. For information call
                    PLaza 2-7810.
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span className={styles.photoFrame}>
                    <Image
                      src="/images/texas09/texas52.jpg"
                      alt="Music Hall exterior"
                      width={300}
                      height={269}
                      className={styles.photoImg}
                      unoptimized
                    />
                  </span>
                </div>
              </div>
            </div>
            <p className={styles.source}>
              Source: Promotional Brochure, To Broadway With Love
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <section aria-label="Promotional flyer">
            <figure>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/texas09/texas67.jpg"
                  alt="To Broadway With Love promotional flyer"
                  width={600}
                  height={333}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <div className={styles.flyerWrap}>
              <div className={styles.flyerInner}>
                <Image
                  src="/images/texas09/texas70.jpg"
                  alt="Be Sure to See"
                  width={333}
                  height={61}
                  className={styles.photoImg}
                  unoptimized
                />
                <dl className={styles.flyerQuotes}>
                  {FLYER_QUOTES.map((item) => (
                    <div key={item.source}>
                      <dt>{item.quote}</dt>
                      <dd>-{item.source}</dd>
                    </div>
                  ))}
                </dl>
                <Image
                  src="/images/texas09/texas69.jpg"
                  alt="Prices"
                  width={333}
                  height={32}
                  className={styles.photoImg}
                  unoptimized
                />
                <Image
                  src="/images/texas09/texas68.jpg"
                  alt="Map"
                  width={333}
                  height={210}
                  className={styles.photoImg}
                  unoptimized
                />
                <Image
                  src="/images/texas09/texas71.jpg"
                  alt="Save"
                  width={300}
                  height={146}
                  className={styles.photoImg}
                  unoptimized
                />
              </div>
            </div>
            <p className={styles.source}>
              Source: Promotional Flyer, To Broadway With Love
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <section aria-label="Matchbooks">
            <div className={styles.matchbooks}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/texas09/texas65.jpg"
                  alt="Matchbook cover, Souvenir of The Texas Pavilions"
                  width={280}
                  height={588}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/texas09/texas64.jpg"
                  alt="Matchbook cover, Souvenir of The Texas Pavilions"
                  width={280}
                  height={588}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <p className={styles.source}>
              Source: Matchbook Cover, Souvenir of The Texas Pavilions, nywf64.com
              Collection
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <section aria-label="Ticket">
            <figure>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/texas09/texas66.jpg"
                  alt="Unused ticket, TO BROADWAY WITH LOVE"
                  width={500}
                  height={210}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <p className={styles.source}>
              Source: Unused Ticket, TO BROADWAY WITH LOVE, nywf64.com Collection
            </p>
          </section>

          <div className={styles.galleryBanner}>
            <h2 className={styles.galleryTitle}>TO BROADWAY WITH LOVE</h2>
            <h2 className={styles.galleryHeading}>GALLERY</h2>
          </div>

          <section className={styles.galleryPanel} aria-label="Scenes gallery">
            <p className={styles.galleryCaption}>
              SCENES FROM
              <span className={styles.galleryCaptionSub}>
                TO BROADWAY WITH LOVE
              </span>
            </p>
            <div className={styles.galleryStack}>
              {GALLERY_SCENES.map((scene) => (
                <figure key={scene.src}>
                  <span className={styles.photoFrame}>
                    <Image
                      src={`/images/texas09/${scene.src}`}
                      alt={scene.alt}
                      width={scene.w}
                      height={scene.h}
                      className={styles.photoImg}
                      unoptimized
                    />
                  </span>
                </figure>
              ))}
            </div>
            <p className={styles.source} style={{ color: "#fff", marginTop: "0.75rem" }}>
              Source: All Photos presented courtesy nywf64.com Collection and are
              © Copyright 2017 William Young, All Rights Reserved
            </p>
          </section>

          <figure style={{ marginTop: "2rem" }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/texas09/texas136.jpg"
                alt="To Broadway With Love auction photograph"
                width={650}
                height={523}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>Source: Online Auction</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/texas08"
        explicitPrevious
        overviewHref="/texasoverview"
        nextHref="/texas10"
      />
    </>
  );
}
