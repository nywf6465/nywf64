import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "Continental Airlines — Airlines & The Fair — nywf64.com",
  description:
    "Continental Airlines and the Unisphere logo — Fair legacy on the airline’s fleet identity — on nywf64.com.",
};

/**
 * Airlines feature page 9 (legacy airlines10.html remapped to /airlines09).
 * Stack: hero → Airlines nav (Page 10) → navy title bar → article → nav2
 * PREVIOUS → /airlines08; NEXT → /airlinesoverview (series closer)
 */
export default function Airlines09Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines09-title">
        <header className={styles.titleBar}>
          <h1 id="airlines09-title" className={styles.titleBarMain}>
            Continental Airlines
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.continentalLogo}>
            <Image
              src="/images/airlines09/airlines33.jpg"
              alt="Continental Airlines Logo"
              width={600}
              height={155}
              className={styles.continentalLogoPhoto}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              It is not uncommon to see the image of Unisphere on today&apos;s
              corporate advertising. The huge globe often symbolizes world-wide
              service. No corporation has embraced the symbol of the 1964/1965
              New York World&apos;s Fair as completely, or as beautifully, as
              Continental Airlines. Since 1991, the styalized image of an open
              globe of latitude and logitude lines in blue, white and gold has
              graced the tails of Contiental&apos;s fleet and has served the
              company well as their logo. The image is known all around the
              world wherever Continental flies.
            </p>
            <p>
              Back in 1991, when Continental introduced the new logo to the
              public, their timetable featured Unisphere on the cover. In 2010,
              Continental merged with United Airlines. The new United opted to
              retain the &quot;Unisphere&quot; logo as their corporate identity.
            </p>
          </div>

          <figure className={styles.continentalTimetable}>
            <Image
              src="/images/airlines09/airlines34.jpg"
              alt="Continental Airlines 6/14/91 Timetable"
              width={218}
              height={480}
              className={styles.continentalTimetablePhoto}
              unoptimized
            />
          </figure>

          <p className={styles.sourceLeft}>
            Source: All Photos are Copyright Continental Airlines, Inc., All
            Rights Reserved
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines08"
        explicitPrevious
        nextHref="/airlinesoverview"
      />
    </>
  );
}
