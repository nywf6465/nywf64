import type { Metadata } from "next";
import Image from "next/image";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import styles from "@/styles/advertisingPage.module.css";

export const metadata: Metadata = {
  title: "Advertising — China — nywf64.com",
  description:
    "Republic of China pavilion advertisement from the 1964 Official Guide Book — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China advertising page — “advertising” standard.
 * Body from legacy china04.html. Layout: AdvertisingPage (/amex04)
 * with a reconstructed typeset advertisement (`content`).
 */
export default function China04Page() {
  return (
    <AdvertisingPage
      heroLabel="China"
      titleId="china04-title"
      hero={{
        src: "/images/chinaoverview/hero-banner.jpg",
        alt: "China at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<ChinaNavChrome />}
      previousHref="/china03"
      overviewHref="/chinaoverview"
      nextHref="/china05"
      sources={[
        <>
          SOURCE: Advertisement 1964{" "}
          <em>Official Guide Book 1964-1965 New York World&apos;s Fair</em>
        </>,
      ]}
      content={
        <>
          <Image
            src="/images/china04/flag-banner.jpg"
            alt="Flag & Chinese Characters"
            width={500}
            height={99}
            className={styles.lead}
            unoptimized
          />
          <Image
            src="/images/china04/rendering.jpg"
            alt="Architectural Rendering"
            width={500}
            height={481}
            className={styles.lead}
            unoptimized
          />
          <p className={styles.headline}>
            <span className={styles.headlineLead}>
              THE PAVILION OF THE REPUBLIC OF CHINA
            </span>
          </p>
          <div className={styles.copy}>
            <p>
              AN EXHIBITION OF ART, CULTURE AND MODERN PROGRESS - see the
              priceless art treasurers - more than 400 objects of jade,
              porcelain, bronze and calligraphy - specially selected from the
              national museums of China in Taiwan where the culture of the
              oldest living civilization is now preserved + see the mystical
              stone carving dating back more than 3,000 years; the tortoise
              shell with the original Chinese characters inscribed on its back +
              see the gracious way of Chinese living and modern progress as
              exemplified by land reform and economic development in Taiwan.
            </p>
          </div>
        </>
      }
    />
  );
}
