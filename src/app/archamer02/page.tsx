import type { Metadata } from "next";
import Image from "next/image";
import { ArchamerNavChrome } from "@/components/ArchamerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./archamer02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Story of the Arch — Arch of the Americas — nywf64.com",
  description:
    "The Story of the Arch — Arch of the Americas at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Arch of the Americas — The Story of the Arch.
 * Body from legacy archamer02.html (menu label: The Story of the Arch).
 * Stack: hero → ArchamerNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — figures with sources are photo → caption → SOURCE.
 */
export default function Archamer02Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Arch of the Americas">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/archameroverview/hero-banner.jpg"
            alt="Arch of the Americas at the 1964/1965 New York World’s Fair"
            width={1912}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArchamerNavChrome />

      <article className={styles.article} aria-labelledby="archamer02-title">
        <header className={styles.titleBar}>
          <h1 id="archamer02-title" className={styles.titleBarMain}>
            The Story of the Arch
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.photoBlock}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/archamer02/architects-rendering.jpg"
                alt="Artist's rendering of the Arch of the Americas"
                width={361}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.photoCaption}>
              Artist&apos;s Rendering of the Arch of the Americas
            </figcaption>
            <p className={styles.photoSource}>
              SOURCE: World&apos;s Fair Progress Report No. 6
            </p>
          </figure>

          <div className={styles.bodyCopy}>
            <p>
              IN January, 1960, the State Department of the United States issued
              formal invitations to countries and foreign organizations to
              participated in the World&apos;s Fair. By May 8th, 1961 the
              Organization of American States had accepted the invitation.
              Established in 1948, the Organization of American States (Oasis an
              international organization that brings together the independent
              countries of the Americas to promote cooperation, democracy, human
              rights, security and development. Its current membership includes
              35 independent countries of North America, Central America, South
              America, and the Caribbean. The participation of some countries has
              varied over time.
            </p>
          </div>

          <figure className={`${styles.photoBlock} ${styles.photoBlockWide}`}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/archamer02/site-map.jpg"
                alt="Site map showing the planned Arch of the Americas"
                width={400}
                height={323}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <div className={styles.bodyCopy}>
            <p>
              The arch was meant to symbolize the goals of the Organization.
              Spanning the Fair&apos;s Avenue of the Americas, it would also
              symbolize the unity and friendship of the nations of the Western
              Hemisphere. The arch was designed by architect Stephen J. Kagel.
              The last mention of the arch appears in the World&apos;s Fair
              Progress Report of April 22, 1963 where it is still listed as an
              exhibit. Like many other proposed exhibits for the Fair, the Arch
              of the Americas faded away.
            </p>
            <p>
              Miraculously, strangely or coincidentally, a remarkably similar
              arch, designed by Walter C. Harry, was constructed in Miami,
              Florida in 1965! This arch stands at the intersection of Northwest
              167th Street and Northwest 13th Avenue in Miami. It has been
              recorded that the inspiration for the arch came from the St. Louis
              Gateway Arch. However the similarity between it and the Arch of the
              Americas is undeniable. Locals call it the &quot;Modernage
              Arch&quot; because it marked the entrance to a Modernage furniture
              store and the Sunshine State Industrial Park. It was designated as
              a historical site by Miami-Dade County in 2011.
            </p>
          </div>

          <figure className={styles.photoBlock}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/archamer02/sunshine-state-arch.jpg"
                alt='The "Modernage Arch" in Miami'
                width={400}
                height={294}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.photoCaption}>
              The &quot;Modernage Arch&quot; in Miami
            </figcaption>
            <p className={styles.photoSource}>SOURCE: Facebook</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/archamer01"
        overviewHref="/archameroverview"
        nextHref="/archameroverview"
        explicitPrevious
      />
    </>
  );
}
