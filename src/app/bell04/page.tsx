import type { Metadata } from "next";
import Image from "next/image";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { BellNavChrome } from "@/components/BellNavChrome";
import styles from "@/styles/advertisingPage.module.css";

export const metadata: Metadata = {
  title: "Advertising — Bell System — nywf64.com",
  description:
    "Bell System Pavilion advertisement from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System advertising page — “advertising” standard.
 * Body from legacy bell04.html. Layout: AdvertisingPage (/amex04)
 * with a reconstructed typeset advertisement (`content`).
 */
export default function Bell04Page() {
  return (
    <AdvertisingPage
      heroLabel="Bell System Pavilion"
      titleId="bell04-title"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell03"
      overviewHref="/belloverview"
      nextHref="/bell05"
      sources={[
        "Source: Advertisement, Official Guide - New York World's Fair, 1964 Edition, Time-Life Books, publisher",
      ]}
      content={
        <>
          <Image
            src="/images/bell04/bell25.jpg"
            alt="Bell System artist's rendering"
            width={460}
            height={351}
            className={styles.lead}
            unoptimized
          />
          <p className={styles.headline}>
            <span className={styles.headlineLead}>IT&apos;S FOR YOU</span>
            <span className={styles.headlineRest}>
              {" "}
              -- The Bell System Exhibit of
              <br />
              Communications Past, Present and Future
            </span>
          </p>
          <div className={styles.split}>
            <div className={styles.copy}>
              <p>
                Visit the Bell System exhibit and be our guest as upholstered
                arm chairs, each equipped with its own speaker, take you on a
                moving tour of the history of communications--one of the
                theatrical highlights of the Fair.
              </p>
              <p>
                Then, see for yourself the new technology that is now bringing
                people ever closer together, making business more productive
                and efficient, strengthening our Nation&apos;s defense. You and
                your children can play ingenious electronic games designed to
                demonstrate these advances.
              </p>
              <p>
                This exciting exhibit is easy to find. It&apos;s in the heart of
                the Fair at the head of the Pool of Industry. Come in
                today--it&apos;s all for you!
              </p>
            </div>
            <Image
              src="/images/bell04/bell26.jpg"
              alt="Ride chairs artist's rendering"
              width={180}
              height={246}
              className={styles.side}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            (Right) At the Bell System exhibit, you&apos;ll ride in individual
            easy chairs through the main presentation--see and hear a dramatic
            show in modern comfort.
          </p>
          <Image
            src="/images/bell04/bell27.jpg"
            alt="Bell System logo"
            width={460}
            height={66}
            className={styles.logo}
            unoptimized
          />
        </>
      }
    />
  );
}
