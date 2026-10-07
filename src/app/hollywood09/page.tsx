import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "The King and I — Hollywood — nywf64.com",
  description:
    "The King and I souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood09Page() {
  return (
    <HollywoodLegacyTopicPage
      title="The King and I"
      titleId="hollywood09-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood08"
      nextHref="/hollywood10"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood09/holwod12.jpg"
          alt="Banner"
          width={900}
          height={209}
          className={styles.bannerArt}
          unoptimized
        />
      </div>
      <Image
        src="/images/hollywood09/holwod17.jpg"
        alt="The King and I Scene"
        width={900}
        height={378}
        className={styles.fullBleed}
        unoptimized
      />
      <div className={styles.threeCol}>
        <div className={styles.sidebarCenter}>
          <Image
            src="/images/hollywood09/holwod20.jpg"
            alt="The King and I"
            width={214}
            height={44}
            className={styles.sidebarLogo}
            unoptimized
          />
        </div>
        <div className={styles.threeColCenter}>
          <p>
            The magnificent musical starring Deborah Kerr and Yul Brynner grew out
            of the beloved tale of an English governess at the Siamese court. It
            was Anna Leonowen&apos;s true story, first told in her own books,
            rewritten by Margaret Landon as <i>Anna and the King of Siam</i> and
            then transformed into a Broadway musical sensation for the late, great
            Gertrude Lawrence. An example of the lengths to which Hollywood U.S.A.
            goes to recreate the real: For a single shot in this picture -- that
            of Anna&apos;s arrival with her young son who was to die there -- a
            complete, full-size seaport village of 25 buildings was constructed
            on a set covering more than three acres.
          </p>
        </div>
        <div className={styles.sidebarCenter}>
          <Image
            src="/images/hollywood09/holwod15.jpg"
            alt="20th Century Fox Logo"
            width={225}
            height={78}
            className={styles.sidebarLogo}
            unoptimized
          />
        </div>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
