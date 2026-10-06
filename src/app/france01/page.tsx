import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FranceNavChrome } from "@/components/FranceNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import styles from "@/styles/guidebookSouvenirPage.module.css";
import franceStyles from "./france01.module.css";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — France — nywf64.com",
  description:
    "Pavilion of France entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * France guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy france01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; never-built
 * note and companion Pavilon of Paris feature sit under the Souvenir Map column.
 * Preserve legacy typo (Pavilon).
 */
export default function France01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="France"
      titleId="france01-title"
      hero={{
        src: "/images/franceoverview/hero-banner.jpg",
        alt: "France at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FranceNavChrome />}
      previousHref="/franceoverview"
      nextHref="/france02"
      guide1964={{
        cover: {
          src: "/images/france01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this exhibit was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/france01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this exhibit was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/france01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/france01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/francemap",
        entry: {
          logo: {
            src: "/images/france01/france01.jpg",
            width: 150,
            height: 136,
            alt: "",
          },
          note: "The Pavilion of France was never built.",
          after: (
            <div className={franceStyles.companion}>
              <hr className={franceStyles.rule} />
              <div className={franceStyles.companionInner}>
                <Image
                  src="/images/france01/pavpar01.jpg"
                  alt="The Pavilon of Paris and French Industry"
                  width={127}
                  height={150}
                  className={franceStyles.companionPhoto}
                  unoptimized
                />
                <p className={franceStyles.clickHere}>
                  <Link href="/pavpar01">
                    <u>Click HERE</u>
                  </Link>
                </p>
                <p className={franceStyles.companionCopy}>
                  Be sure to visit our companion feature on{" "}
                  <strong>The Pavilon of Paris and French Industry</strong>.
                </p>
                <p className={`${styles.intro} ${franceStyles.dateStamp}`}>
                  2.28.10
                </p>
              </div>
            </div>
          ),
        },
      }}
    />
  );
}
