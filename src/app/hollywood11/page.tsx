import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "The Fall of the Roman Empire — Hollywood — nywf64.com",
  description:
    "The Fall of the Roman Empire souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood11Page() {
  return (
    <HollywoodLegacyTopicPage
      title="The Fall of the Roman Empire"
      titleId="hollywood11-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood10"
      nextHref="/hollywood12"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood11/holwod12.jpg"
          alt="Banner"
          width={900}
          height={209}
          className={styles.bannerArt}
          unoptimized
        />
      </div>
      <div className={styles.splitRow}>
        <div className={styles.sceneMain}>
          <Image
            src="/images/hollywood11/holwod24.jpg"
            alt="The Fall of the Roman Empire Scene"
            width={675}
            height={1244}
            className={styles.sceneMainArt}
            unoptimized
          />
        </div>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarCenter}>SAMUEL&nbsp;RONSTON PRESENTS</p>
          <Image
            src="/images/hollywood11/holwod25.jpg"
            alt="The Fall of the Roman Empire"
            width={125}
            height={167}
            className={styles.sidebarLogo}
            unoptimized
          />
          <p>
            Magnificent sets are the trademark of Samuel Bronston&apos;s{" "}
            <i>The Fall of the Roman Empire</i>, a tale of events leading to the
            destruction of one of the most fascinating periods in civilization. A
            full-scale reproduction of the entire Second Century Roman Forum is
            the maor setting, built in seven months on a 250-acre site near
            Madrid, and said to be the largest of all motion picture sets. For
            talent, Hollywood U.S.A. called on Sophia Loren, Stephen Boyd, Alec
            Guiness, James Mason, and Christopher Plummer to recreate for modern
            audiences the era that knew the only absolute power in history.
          </p>
          <p className={styles.sidebarCenter}>A&nbsp;PARAMOUNT RELEASE</p>
          <Image
            src="/images/hollywood11/holwod19.jpg"
            alt="Paramount Logo"
            width={210}
            height={78}
            className={styles.sidebarLogo}
            unoptimized
          />
        </aside>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
