import type { Metadata } from "next";
import Image from "next/image";
import { EducardsHero } from "@/components/EducardsHero";
import { EducardsNavChrome } from "@/components/EducardsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./educardsoverview.module.css";

export const metadata: Metadata = {
  title: "The “Edu-Cards” Set — Overview — nywf64.com",
  description:
    "The “Edu-Cards” Set — Official Souvenir Flash Card Set of the 1964/1965 New York World’s Fair, on nywf64.com.",
};

/**
 * The “Edu-Cards” Set overview — follows the overview prototype
 * (same stack as /stampsoverview / /vmoverview).
 * Hero canvas matches ibm01 (1905×826) via EducardsHero.
 * Nav bar shows Page 1 (`educardsoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /artifacts; NEXT hidden until the first feature page ships.
 */
export default function EducardsOverviewPage() {
  return (
    <>
      <EducardsHero />

      <EducardsNavChrome />

      <section
        className={styles.overview}
        aria-label="The Edu-Cards Set overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Remember <em>flash-cards</em> -- those arithmetic quiz cards with
              the equation on the front and the answer on the back? Enjoy the
              Fair&apos;s version with these flash-back to the Fair cards
              courtesy of the Steve Perley and Al Soltesz collections.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/educardsoverview/photo.jpg"
              alt="Official Souvenir Flash Card Set — New York World’s Fair Pictures, 1964-1965"
              width={999}
              height={1575}
              sizes="(max-width: 720px) 90vw, 22rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/educardsoverview"
        hideNext
      />
    </>
  );
}
