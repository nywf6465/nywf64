import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "Seven Days in May — Hollywood — nywf64.com",
  description:
    "Seven Days in May souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood08Page() {
  return (
    <HollywoodLegacyTopicPage
      title="Seven Days in May"
      titleId="hollywood08-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood07"
      nextHref="/hollywood09"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood08/holwod12.jpg"
          alt="Banner"
          width={900}
          height={209}
          className={styles.bannerArt}
          unoptimized
        />
      </div>
      <Image
        src="/images/hollywood08/holwod16.jpg"
        alt="Seven Days in May Scene"
        width={900}
        height={379}
        className={styles.fullBleed}
        unoptimized
      />
      <div className={styles.threeCol}>
        <div className={styles.sidebarCenter}>
          <Image
            src="/images/hollywood08/holwod18.jpg"
            alt="Seven Days in May"
            width={204}
            height={95}
            className={styles.sidebarLogo}
            unoptimized
          />
        </div>
        <div className={styles.threeColCenter}>
          <p>
            Four Academy Award nominations indicate the high regard of Hollywood
            U.S.A. for its <i>Seven Days in May</i>, starring six of today&apos;s
            great actors: Burt Lancaster, Kirk Douglas, Fredric March, and Ava
            Gardner, with co-stars Edmond O&apos;Brien and Martin Balsam. From
            the book that topped the best-seller list for months, Paramount has
            faithfully recreated a story of drama and tension as the Earth nears
            the brink of total destruction. Hollywood U.S.A. shows the world how
            the White House and Washington, D.C., look -- inside and out. The
            President&apos;s office was reproduced on the studio stage, while a
            secret desert air base was filmed in Arizona and final exteriors shot
            in the nation&apos;s capital.
          </p>
          <p className={styles.sidebarCenter}>A SEVEN ARTS-JOEL-FRANKENHEIMER PRODUCTION</p>
          <p className={styles.sidebarCenter}>A PARAMOUNT RELEASE</p>
        </div>
        <div className={styles.sidebarCenter}>
          <Image
            src="/images/hollywood08/holwod19.jpg"
            alt="Paramount Logo"
            width={210}
            height={78}
            className={styles.sidebarLogo}
            unoptimized
          />
        </div>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
