import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "Cleopatra — Hollywood — nywf64.com",
  description:
    "Cleopatra souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood07Page() {
  return (
    <HollywoodLegacyTopicPage
      title="Cleopatra"
      titleId="hollywood07-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood06"
      nextHref="/hollywood08"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood07/holwod12.jpg"
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
            src="/images/hollywood07/holwod13.jpg"
            alt=""
            width={675}
            height={560}
            className={styles.sceneMainArt}
            unoptimized
          />
        </div>
        <aside className={styles.sidebar}>
          <Image
            src="/images/hollywood07/holwod14.jpg"
            alt=""
            width={225}
            height={36}
            className={styles.sidebarLogo}
            unoptimized
          />
          <p>
            Forty-three million dollars! that&apos;s what Hollywood U.S.A. spent
            to bring <i>Cleopatra</i>, immortal story of romance and history, to
            the screen for millions around the world. Starring Elizabeth Taylor,
            Richard Burton, and Rex Harrison, <i>Cleopatra</i> took three years to
            make -- and, certainly, is the most expensive motion picture ever
            made. The story, with its backdrop of two great empires at the peak
            of their grandeur, chronicles the life of the ambitious and seductive
            Egyptian queen. It begins at age 20 when in her Palace at Alexandria,
            she first greets Julious Ceasar; then moves on to her stormy romance
            with Marc Antony. Filmed in Egypt, Spain, London, and Italy, the
            production in Rome alone filled 30 buildings on a 12-acre complex.
          </p>
          <Image
            src="/images/hollywood07/holwod15.jpg"
            alt=""
            width={225}
            height={78}
            className={styles.sidebarLogo}
            unoptimized
          />
        </aside>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
