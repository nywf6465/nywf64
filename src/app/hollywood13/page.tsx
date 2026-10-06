import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "Dr. Kildare — Hollywood — nywf64.com",
  description:
    "Dr. Kildare souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood13Page() {
  return (
    <HollywoodLegacyTopicPage
      title="Dr. Kildare"
      titleId="hollywood13-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood12"
      nextHref="/hollywood14"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood13/holwod12.jpg"
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
            src="/images/hollywood13/holwod28.jpg"
            alt="Dr. Kildare Scene"
            width={675}
            height={1209}
            className={styles.sceneMainArt}
            unoptimized
          />
        </div>
        <aside className={styles.sidebar}>
          <Image
            src="/images/hollywood13/holwod30.jpg"
            alt="Dr. Kildare"
            width={225}
            height={105}
            className={styles.sidebarLogo}
            unoptimized
          />
          <p>
            When <i>Dr. Kildare</i> began its fourth season on the NBC Network in
            1964-65, it joined an exclusive circle of long-run television shows.
            Before they came to TV, young Kildare and his friend and mentor, Dr.
            Gillespie of Blair Hospital, were central figures in a number of hit
            motion pictures. The <i>Dr. Kildare</i> TV&nbsp;series lifted Richard
            Chamberlain, in the title role, from obscurity to become
            television&apos;s most popular young actor. Rayomd Massey, famed for his
            portrayals of Abe Lincoln, crowned his brilliant stage and screen
            career as Dr. Gillespie. Big-name stars appear in key guest roles
            during each episode filmed at MGM studios in Culver City, Calif.
            Norman Felton is executive producer and David Victor is producer of
            the series.
          </p>
          <Image
            src="/images/hollywood13/holwod29.jpg"
            alt="MGM Television Logo"
            width={225}
            height={117}
            className={styles.sidebarLogo}
            unoptimized
          />
        </aside>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
