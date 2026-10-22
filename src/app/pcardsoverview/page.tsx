import type { Metadata } from "next";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PcardsHero } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import styles from "./pcardsoverview.module.css";

export const metadata: Metadata = {
  title: "World’s Fair Postcard Collection — Overview — nywf64.com",
  description:
    "Introduction to the nywf64.com Post Card collection of the 1964/1965 New York World’s Fair — organized from Peter M. Warner’s list.",
};

/**
 * World’s Fair Postcard Collection overview (legacy pcards01 Introduction).
 * Same overview stack as /photolaboverview / /booksoverview.
 * Hero canvas matches ibm01 (1905×826) via PcardsHero.
 * Nav bar shows Page 1 (`pcardsoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /artifacts.
 */
export default function PcardsOverviewPage() {
  return (
    <>
      <PcardsHero />

      <PcardsNavChrome />

      <section
        className={styles.overview}
        aria-label="World’s Fair Postcard Collection overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In 1966, World&apos;s Fair enthusiast and historian Peter M.
              Warner compiled a comprehensive list of the Post Cards issued for
              the 1964/1965 New York World&apos;s Fair.{" "}
              <span className={styles.nywf}>
                nywf<span className={styles.nywfMark}>64</span>.com
              </span>{" "}
              salutes Peter Warner and his decades long work to preserve the
              Fair. It is his list that we used to organize and display our
              collection of the <strong>Post Cards of the Fair</strong>.
            </p>
            <p className={styles.body}>
              We present here some 300 cards from his list — Official, Exhibitor,
              Advertising, Unauthorized, and Miscellaneous issues — and will add
              more cards as they are acquired.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/pcardsoverview/photo.jpg"
              alt="Official Postcard — Unisphere — Dexter Press / Manhattan Post Card Publishing Co."
              width={450}
              height={280}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/pcardsoverview"
        hideNext
      />
    </>
  );
}
