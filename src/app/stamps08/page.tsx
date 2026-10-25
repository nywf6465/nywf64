import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps08.module.css";

export const metadata: Metadata = {
  title: "Epilogue — Postage Stamps of the Fair — nywf64.com",
  description:
    "Epilogue by Randy Lambertus on the Postage Stamps of the Fair feature — nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

function NoteBrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.noteBrandNywf}>nywf</span>
      <span className={styles.noteBrandSixtyFour}>64</span>
      <span className={styles.noteBrandDot}>.</span>
      <span className={styles.noteBrandCom}>com</span>
    </span>
  );
}

/**
 * Postage Stamps of the Fair — Epilogue (legacy stamps09.html → /stamps08).
 * Shared StampsHero (1905×826). Nav Page 9.
 * PREVIOUS → /stamps07; NEXT → /stampsoverview.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps08Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps08-title">
        <header className={styles.titleBar}>
          <h1 id="stamps08-title" className={styles.titleBarMain}>
            Epilogue
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.body}>
            I believe this list is the most comprehensive list of 1964-1965 New
            York World&apos;s Fair stamp issues to-date. Over the course of six
            months, I discovered new stamps related to this World&apos;s Fair
            that others had not known of previously. However, I cannot guarantee
            that it is 100% complete as things do change over time.
          </p>

          <p className={styles.body}>
            For example, in 1989 the countries of Antigua &amp; Barbuda issued a
            set of eight stamps and two souvenir sheets for the World Stamp Expo
            depicting Disney characters posed with various railroad locomotives
            from history. The unique aspect of this set was that it also had an
            inscription celebrating the 50th anniversary of the 1939-1940 New
            York World&apos;s Fair which even included the image of the Trylon
            and Perisphere on one of the souvenir sheets shown below!
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/stamps08/stamp_Antigua_1989_Sc1256.jpg"
              alt="Antigua & Barbuda"
              width={350}
              height={275}
              className={styles.stamp}
              unoptimized
            />
          </figure>

          <p className={styles.body}>
            Who can say that in a few years time some country won&apos;t issue a
            new set honoring the 50th anniversary of the 1964-1965 New York
            World&apos;s Fair? I&apos;ll be patiently waiting!
          </p>

          <p className={styles.body}>
            I&apos;d like to thank <strong>Bill Young</strong> and his splendid{" "}
            <BrandMark /> website which allows me to share my enthusiasm for
            stamp collecting with both the{" "}
            <strong>New York World&apos;s Fair</strong> and the general
            philatelic communities. I&apos;d also like to thank{" "}
            <strong>W. Jay Wanczyk</strong> a lifelong friend and fellow
            collector for his knowledge and proofreading skills. Last, but not
            least, I&apos;d like to thank my best friend and wife{" "}
            <strong>Tara</strong> for her inspiration, devotion and
            understanding of my never-ending desire to research various aspects
            of the New York World&apos;s Fair.
          </p>

          <p className={styles.signature}>
            Randy Lambertus - September 26, 2003
          </p>

          <aside className={styles.noteBox} aria-label="Webmaster's note">
            <p className={styles.noteLead}>
              <strong>Webmaster&apos;s note...</strong> At the risk of sounding
              like a &quot;Mutual Admiration Society,&quot; I&apos;d like to
              thank Randy for this wonderful gift to <NoteBrandMark />. As a
              long-time stamp enthusiast myself, I&apos;m especially happy to be
              able to include this colorful display of World&apos;s Fair
              Philatelic history online. The feature is visual proof of the
              popularity and world-wide interest the Fair generated in the
              mid-sixties. And since postage stamps are miniature portraits,
              this Feature gives the visitor a veritable gallery of New York
              World&apos;s Fair artwork.
            </p>
            <p className={styles.noteLead}>
              Thank you, Randy, for this wonderful presentation! You can contact
              Randy at{" "}
              <a
                className={styles.noteLink}
                href="mailto:rl@sgi.com?subject=Stamp Feature at nywf64.com"
              >
                rl@sgi.com
              </a>{" "}
              for more information or comments on his Feature.
            </p>
            <ul className={styles.noteSign}>
              <li>Bill Young</li>
              <li>September 26, 2003</li>
            </ul>
          </aside>
        </div>
      </article>

      <Nav2Bar
        previousHref="/stamps07"
        explicitPrevious
        overviewHref="/stampsoverview"
        nextHref="/stampsoverview"
      />
    </>
  );
}
