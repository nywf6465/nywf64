import type { Metadata } from "next";
import Image from "next/image";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import styles from "@/styles/advertisingPage.module.css";

export const metadata: Metadata = {
  title: "Advertising — Sierra Leone — nywf64.com",
  description:
    "Sierra Leone pavilion advertisement from The New York Times Magazine — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sierra Leone advertising page — “advertising” standard.
 * Body from legacy sierra03.html. Layout: AdvertisingPage (/bell04)
 * with a reconstructed typeset advertisement (`content`).
 */
export default function Sierra03Page() {
  return (
    <AdvertisingPage
      heroLabel="Sierra Leone"
      titleId="sierra03-title"
      hero={{
        src: "/images/sierraoverview/hero-banner.jpg",
        alt: "Sierra Leone pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SierraNavChrome />}
      previousHref="/sierra02"
      overviewHref="/sierraoverview"
      nextHref="/sierra04"
      sources={[
        "SOURCE: The New York Times Magazine, April 19, 1964",
      ]}
      content={
        <>
          <Image
            src="/images/sierra03/sierra09.jpg"
            alt="Pavilion Artist"
            width={600}
            height={386}
            className={styles.lead}
            unoptimized
          />
          <p className={styles.headline}>
            <span className={styles.headlineLead}>Welcome to the</span>
            <br />
            <span className={styles.headlineRest}>Mountain of Lions</span>
          </p>
          <p className={styles.headline}>
            <span className={styles.headlineLead}>SIERRA LEONE</span>
          </p>
          <div className={styles.split}>
            <div className={styles.copy}>
              <p>
                If Sierra Leone was transported to the States it would be about
                the size of Maine - and it too is a coastal country. But from
                that point on, Sierra Leone has a climate, a culture, and an
                economic drive unlike anything you can find here
              </p>
              <p>
                Sandwiched between the Republic of Guinea to the north and the
                Republic of Liberia to the south, Sierra Leone has a mean
                temperature of 80 degrees and two seasons - dry and wet. We are
                mainly an agricultural and cattle land but our exports, the
                wares you know us by, are from our mines. Diamonds, iron,
                chromite, gold, bauxite, rutile - all these are in abundance in
                our country.
              </p>
              <p>Sierra Leone is also a developing nation.</p>
              <p>
                Since we obtained our independence in 1961 we have shared both
                the throes and achievements of our other African neighbors. New
                Industries have been established, but there is still a long way
                to go.
              </p>
              <p>
                That&apos;s one reason we came to the Fair. We would like you to
                see our accomplishments and to investigate some of the
                opportunities we have to offer.
              </p>
              <p>
                We also want you to have fun during your visit and we know you
                will. We&apos;ve brought our dancers and musicians, our
                woodcarvers and weavers, and our native arts (some of which you
                can buy).
              </p>
              <p>
                So when you come to the Fair, visit Sierra Leone. We&apos;ve
                made sure you&apos;ll enjoy it.
              </p>
            </div>
            <div>
              <Image
                src="/images/sierra03/sierra10.jpg"
                alt="Sierra Leone Artwork"
                width={100}
                height={219}
                className={styles.side}
                unoptimized
              />
              <Image
                src="/images/sierra03/sierra11.jpg"
                alt="Sierra Leone Artwork"
                width={100}
                height={181}
                className={styles.side}
                unoptimized
              />
              <Image
                src="/images/sierra03/sierra12.jpg"
                alt="Coat of Arms"
                width={150}
                height={125}
                className={styles.side}
                unoptimized
              />
            </div>
          </div>
          <p className={styles.caption}>
            <em>And for further information about Sierra Leone write:</em>
            <br />
            Sierra Leone Consulate General
            <br />
            30 East 42 Street (Room 609), New York City
          </p>
        </>
      }
    />
  );
}
