import type { Metadata } from "next";
import Image from "next/image";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { CitservNavChrome } from "@/components/CitservNavChrome";
import styles from "./citserv03.module.css";

export const metadata: Metadata = {
  title: "Advertising — Cities Service Band — nywf64.com",
  description:
    "Cities Service World's Fair Band of America advertisement from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Cities Service Band advertising page — “advertising” standard.
 * Body from legacy citserv03.html. Layout: AdvertisingPage with reconstructed
 * typeset advertisement (`content`).
 */
export default function Citserv03Page() {
  return (
    <AdvertisingPage
      heroLabel="Cities Service World's Fair Band of America"
      titleId="citserv03-title"
      hero={{
        src: "/images/citservoverview/hero-banner.jpg",
        alt: "Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CitservNavChrome />}
      previousHref="/citserv02"
      overviewHref="/citservoverview"
      nextHref="/citserv04"
      sources={[
        <>
          Source: Advertisement{" "}
          <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em>
        </>,
      ]}
      content={
        <div className={styles.ad}>
          <p className={styles.teaser}>
            <strong>C</strong>ome listen to the
            <br />
            world&apos;s most
            <br />
            exciting music!
          </p>
          <p className={styles.brand}>
            CITIES
            <br />
            SERVICE
            <br />
            WORLD&apos;S
            <br />
            FAIR
            <br />
            BAND
            <br />
            OF
            <br />
            AMERICA
          </p>
          <div className={styles.directorRow}>
            <Image
              src="/images/citserv03/citserv09.jpg"
              alt="Paul Lavalle line art"
              width={144}
              height={94}
              className={styles.lavalle}
              unoptimized
            />
            <p className={styles.director}>
              <em>directed by</em>
              <br />
              <strong>PAUL LAVALLE</strong>
            </p>
          </div>
          <p className={styles.copy}>
            The stirring melodies of America, the historic music of the nations
            of the world, the rhythms that have inspired millions of men and
            women everywhere -- this is what you will hear from the Cities
            Service World&apos;s Fair Band of America. Six memorable concerts
            every day at the Fair. Just come and listen. Admission is free.
          </p>
          <Image
            src="/images/citserv03/citserv04.jpg"
            alt="Cities Service logo"
            width={85}
            height={87}
            className={styles.logo}
            unoptimized
          />
        </div>
      }
    />
  );
}
