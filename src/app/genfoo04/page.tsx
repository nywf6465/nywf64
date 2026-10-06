import type { Metadata } from "next";
import Image from "next/image";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import styles from "@/styles/advertisingPage.module.css";

export const metadata: Metadata = {
  title: "Advertising — General Foods Arches — nywf64.com",
  description:
    "General Foods / Maxwell House advertising from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches advertising page — “advertising” standard.
 * Body from legacy genfoo04.html. Layout: AdvertisingPage (/amex04)
 * with a reconstructed Maxwell House advertisement (`content`) plus a
 * 1965 Official Guide collage.
 * Legacy wording (aways) preserved.
 */
export default function Genfoo04Page() {
  return (
    <AdvertisingPage
      heroLabel="General Foods Arches"
      titleId="genfoo04-title"
      hero={{
        src: "/images/genfoooverview/hero-banner.jpg",
        alt: "General Foods Arches at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GenfooNavChrome />}
      previousHref="/genfoo03"
      overviewHref="/genfoooverview"
      nextHref="/genfoo05"
      content={
        <>
          <Image
            src="/images/genfoo04/gf13.jpg"
            alt="Chef at the Fair"
            width={400}
            height={430}
            className={styles.lead}
            unoptimized
          />
          <p className={styles.headline}>
            <span className={styles.headlineLead}>Maxwell House -</span>
            <br />
            <span className={styles.headlineRest}>
              Official Coffee of the World&apos;s Fair
            </span>
          </p>
          <div className={styles.split}>
            <div className={styles.copy}>
              <p>
                <strong>
                  Chefs at many fine restaurants all over the Fair serve Maxwell
                  House Coffee. That&apos;s because Maxwell House always smells
                  good...aways tastes good...always tastes as good as it smells!
                </strong>
              </p>
              <p style={{ textAlign: "right" }}>
                <Image
                  src="/images/genfoo04/gf15.jpg"
                  alt="Maxwell House Tag Line"
                  width={180}
                  height={34}
                  unoptimized
                />
              </p>
            </div>
            <Image
              src="/images/genfoo04/gf14.jpg"
              alt="GF Logo"
              width={80}
              height={106}
              className={styles.side}
              unoptimized
            />
          </div>
          <p className={styles.source}>
            Source: National Advertising for General Foods&apos;{" "}
            <em>Maxwell House Coffee</em>, April 18, 1964
          </p>

          <div className={styles.collageWrap} style={{ marginTop: "2rem" }}>
            <div
              className={styles.collage}
              style={{
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              }}
              role="group"
              aria-label="Advertisements"
            >
              {[
                ["gf19.01.jpg", 300, 327],
                ["gf19.02.jpg", 300, 327],
                ["gf19.03.jpg", 300, 328],
                ["gf19.04.jpg", 300, 328],
                ["gf19.05.jpg", 300, 327],
                ["gf19.06.jpg", 300, 327],
              ].map(([src, w, h]) => (
                <Image
                  key={src as string}
                  src={`/images/genfoo04/${src as string}`}
                  alt=""
                  width={w as number}
                  height={h as number}
                  className={styles.tile}
                  unoptimized
                />
              ))}
            </div>
            <p className={styles.source}>
              Source: Advertisement{" "}
              <em>1965 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </p>
          </div>
        </>
      }
    />
  );
}
