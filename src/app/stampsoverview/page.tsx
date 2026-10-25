import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stampsoverview.module.css";

export const metadata: Metadata = {
  title: "The Postage Stamps of the Fair — Overview — nywf64.com",
  description:
    "The Postage Stamps of the Fair — commemorative postage stamps of the 1964/1965 New York World’s Fair, on nywf64.com.",
};

/**
 * Postage Stamps of the Fair overview — follows the overview prototype
 * (same stack as /scrapbookoverview / /matchbooksoverview).
 * Hero canvas matches ibm01 (1905×826) via StampsHero.
 * Nav bar shows Page 1 (`stampsoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /artifacts; NEXT → /stamps01.
 */
export default function StampsOverviewPage() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <section
        className={styles.overview}
        aria-label="The Postage Stamps of the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              All around the world,{" "}
              <strong>Commemorative Postage Stamps</strong> are issued to
              publicize events of national and historic importance. The
              1964/1965 New York World&apos;s Fair was such an event. Randy
              Lambertus takes a look at the &quot;Stamps of the Fair&quot; in
              this excellent Feature story.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/stampsoverview/photo.jpg"
              alt="5-Cent New York World’s Fair commemorative postage stamp — available April 23, 1964"
              width={1381}
              height={1139}
              sizes="(max-width: 720px) 90vw, 28rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/stampsoverview"
        nextHref="/stamps01"
      />
    </>
  );
}
