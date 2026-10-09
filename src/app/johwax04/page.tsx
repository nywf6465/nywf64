import type { Metadata } from "next";
import Image from "next/image";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import styles from "@/styles/advertisingPage.module.css";
import local from "./johwax04.module.css";

export const metadata: Metadata = {
  title: "Advertising — Johnson Wax — nywf64.com",
  description:
    "Johnson Wax Pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax04Page() {
  return (
    <AdvertisingPage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax04-title"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax03"
      overviewHref="/johwaxoverview"
      nextHref="/johwax05"
      columns={2}
      tiles={[
        { src: "/images/johwax04/jw56.01.jpg", width: 300, height: 326, alt: "" },
        { src: "/images/johwax04/jw56.02.jpg", width: 300, height: 326, alt: "" },
        { src: "/images/johwax04/jw56.03.jpg", width: 300, height: 325, alt: "" },
        { src: "/images/johwax04/jw56.04.jpg", width: 300, height: 325, alt: "" },
        { src: "/images/johwax04/jw56.05.jpg", width: 300, height: 325, alt: "" },
        { src: "/images/johwax04/jw56.06.jpg", width: 300, height: 325, alt: "" },
      ]}
      sources={[
        <>
          Source: Advertisement <em>1964 & 1965 Official Guide, 1964-1965 New York World&apos;s Fair</em>
        </>,
      ]}
      content={
        <>
          <div className={local.adFrame}>
            <Image
              src="/images/johwax04/johwax49.jpg"
              alt="National advertisement (top)"
              width={550}
              height={216}
              className={local.adArt}
              unoptimized
            />
            <p className={styles.headline}>
              <span className={styles.headlineLead}>
                Entertainment for Everyone!
              </span>
            </p>
            <div className={styles.split}>
              <div className={styles.copy}>
                <p>
                  <strong>Movie fans</strong> can sit in a Theater-in-the-Air! See
                  Johnson&apos;s great color movie that dramatizes the universal joy
                  of living! Shown on the Tri-Screen System that puts you in the
                  picture!
                </p>
                <p>
                  <strong>Linguists</strong> can talk to multi-lingual guides from
                  nations served by Johnson Wax in every part of the world.
                </p>
                <p>
                  <strong>Homemakers</strong> will be fascinated by Johnson&apos;s
                  real Electronic Brain. Ask it your home-care questions. See it
                  flash back the answers instantly.
                </p>
                <p>
                  <strong>Children</strong> will love the surprise-filled Fun
                  Machine with all kinds of gimmicks and gadgets to intrigue and
                  delight all ages.
                </p>
                <p>
                  <strong>Everybody who wears shoes</strong> can get a free
                  shoe-shine in Johnson&apos;s Automated Shoe Shine Parlor.
                </p>
              </div>
            </div>
            <p className={styles.headline}>
              <span className={styles.headlineRest}>
                at the Johnson Wax Golden Rondelle
              </span>
            </p>
            <p className={styles.copy} style={{ textAlign: "center" }}>
              Eisenhower Boulevard and the Avenue of Europe
            </p>
            <Image
              src="/images/johwax04/johwax48.jpg"
              alt="National advertisement (bottom)"
              width={550}
              height={370}
              className={styles.lead}
              unoptimized
            />
          </div>
          <p className={local.adSource}>SOURCE: National Advertisement</p>
        </>
      }
    />
  );
}
