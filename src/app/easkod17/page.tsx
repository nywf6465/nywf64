import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Picture Tower — Eastman Kodak — nywf64.com",
  description:
    "The Eastman Kodak Picture Tower at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak Picture Tower article.
 * Body from legacy easkod17.html.
 */
export default function Easkod17Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkod17-title">
        <header className={styles.titleBar}>
          <h1 id="easkod17-title" className={styles.titleBarMain}>
            The Picture Tower
          </h1>
        </header>
        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod17/kod26.jpg"
              alt="Close-up of Kodak's Picture Tower"
              width={470}
              height={311}
              className={styles.figureImg}
              unoptimized
            />
          </figure>
          <p className={styles.italicLead}>
            The brightest lights on the biggest prints combine to make this one
            of the most spectacular displays in or outside the World&apos;s
            Fair.
          </p>
          <p className={styles.body}>
            It stands to reason that the nation&apos;s largest producer of
            things photographic would make its pavilion at the New York
            World&apos;s Fair one big montage of photography, and Eastman Kodak
            does not disappoint.
          </p>
          <p className={styles.body}>
            Rising above the Eastman Kodak Pavilion is one of the most
            spectacular features at the Fair. It is a giant, circular picture
            tower displaying five huge outdoor color prints. Each measuring 30
            by 36 feet, they are the largest such prints in the world.
          </p>
          <p className={styles.body}>
            The pictures will be changed every three or four weeks while the
            Fair is open six months this year and six months next; consequently,
            there was a need for a great many special pictures for this part of
            the Kodak exhibit. That need set off the most extensive
            picture-taking project ever for Kodak&apos;s Photo Illustrations
            Division. People, places and things were photographed, with
            emphasis on the beautiful, the dramatic, the familiar and the
            unfamiliar. To provide the necessary pictures, Kodak&apos;s
            in-plant photographers covered the United States by caravan and flew
            all over the world.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod17/kod27.jpg"
              alt="Unrolling Ektacolor paper for printing of World's Fair pictures"
              width={253}
              height={149}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              A 40-inch wide roll of Ektacolor paper about to be unrolled for
              printing. This 30-foot strip is now a section of one of the
              30x36-foot tower prints atop the Kodak pavilion.
            </p>
          </figure>
          <p className={styles.body}>
            The problem with displaying the huge prints in the tower stimulated
            some remarkable technical achievements. For example, Kodak Park
            scientists had to develop new methods for protecting the prints,
            which are exposed to the elements.
          </p>
          <p className={styles.body}>
            However, the most spectacular technical achievement in connection
            with the tower display is the special 1,2000,000-watt outdoor
            lighting system which shines on the giant prints day and night,
            making them the world&apos;s most brilliantly lit pictures. This
            system literally rivals the brilliance of the sun.
          </p>
          <p className={styles.body}>
            The lights throw a total of 15,000,000 candles on the photos. They
            are so brilliant that the prints resemble glowing transparencies,
            even when the sun is shining directly on them.
          </p>
          <p className={styles.body}>
            This unprecedented level of illumination is made possible by a new
            type of xenon lamp made by Osram GmbH, a West German firm that
            specializes in gas discharge lamps. Special fixtures to accommodate
            the powerful lamps were made by another West German firm, Siemens
            Schuckertwerke.
          </p>
          <p className={styles.body}>
            &quot;To our knowledge, this type of lamp has never been used in the
            United States before,&quot; said Norman Macbeth, president of the
            Macbeth Corporation of Newburgh, N.Y., which did the engineering
            work for the lighting installation. &quot;They&apos;ve been tried
            for a few specialized applications in Europe, such as airports and
            football stadiums, but the Kodak lights concentrate more
            illumination on the picture tower than would be used for an entire
            stadium. The xenon lamps as used by Kodak constitute an illumination
            extravaganza such as has never been seen before.&quot;
          </p>
          <p className={styles.body}>
            The Osram lamps are concealed in five outriggers at the base of each
            picture. They are in the form of 6 1/2-foot quartz tubes, arranged
            in three rows of four lamps within each outrigger, 12 lamps per
            picture, or a total of 60 lamps in all. Each individual lamp is
            rated at 20,000 watts.
          </p>
          <p className={styles.body}>
            Expressed in terms of light cast, each of the 60 tubes generates a
            half-million lumens. six million lumens fall on the 1,080-square-foot
            surface of each picture, or a total of 30,000,000 lumens for all
            five prints. In comparison, a 25-watt incandescent bulb casts about
            300 lumens.
          </p>
          <p className={styles.body}>
            Despite the fact that precision-designed reflectors collect almost
            all of the spilled light and refocus it on the pictures, the lamps
            are so powerful that it is possible at night to read by reflected
            light alone at a distance of 70 feet.
          </p>
          <p className={styles.body}>
            Three switching and relay stations within the picture tower, each a
            10-foot cube, contains the complicated tangle of circuits needed to
            control the lights. Intensity of illumination can be remote
            controlled from a console within the Kodak pavilion&apos;s lounge.
            At night, when the Osram lamps no longer have to outshine sunlight,
            the level of illumination is reduced considerably to avoid any
            suggestion of glare.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod17/kod28.jpg"
              alt="30x36 foot illuminated print at night"
              width={400}
              height={227}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              The level of illumination is reduced considerably at night when
              the lamps no longer have to outshine sunlight.
            </p>
          </figure>
          <p className={styles.body}>
            Igniting the big lamps takes 80,000 volts of electricity. The
            electrodes, projecting about two inches into the xenon-filled tube
            at either end, are of solid tungsten and are as big around as a
            finger. Engineers predict about 2,000 hours of operation per lamp.
          </p>
          <p className={styles.body}>
            The electricity needed to run the five fixtures is equivalent to the
            electrical needs of approximately 1,700 average U.S. homes, each
            equipped with a full complement of lights and electrical appliances.
          </p>
          <p className={styles.source}>
            Source: © <em>Industrial Photography</em>, Volume 13 No. 5, May 1964
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod16"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod18"
      />
    </>
  );
}
