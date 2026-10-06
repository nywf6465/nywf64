import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "West Side Story — Hollywood — nywf64.com",
  description:
    "West Side Story souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood10Page() {
  return (
    <HollywoodLegacyTopicPage
      title="West Side Story"
      titleId="hollywood10-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood09"
      nextHref="/hollywood11"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood10/holwod12.jpg"
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
            src="/images/hollywood10/holwod21.jpg"
            alt="West Side Story Scene"
            width={675}
            height={1208}
            className={styles.sceneMainArt}
            unoptimized
          />
        </div>
        <aside className={styles.sidebar}>
          <Image
            src="/images/hollywood10/holwod22.jpg"
            alt="West Side Story"
            width={225}
            height={247}
            className={styles.sidebarLogo}
            unoptimized
          />
          <p>
            Acclaimed one of the great musicals of our generation, and certainly
            the most vital from the point of view of social commentary,{" "}
            <i>West Side Story</i> made a brilliant transition from stage to
            screen. The production won ten Academy Awards as well as awards and
            citations from dozens of countries. In addition to is artistic success,
            the film ranks as one of the five biggest commercial successes in
            motion picture history. Filmed in Hollywood, with the exception of a
            few street scenes made in New York City, Natalie Wood stars. Others in
            the cast are Richard Beymer, Russ Tamblyn, Rita Moreno, George
            Chakiris.
          </p>
          <p>
            Special note to Fair visitors: To make this Candy Store set of{" "}
            <i>West Side Story</i> more alive and colorful, we have arranged to
            have the Candy Store in <i>actual operation</i>. Not only will you see
            candies being made from private recies of Hollywood stars, but they
            will be offered for sale to those who would like this Sweet Souvenir
            from Hollywood U.S.A.
          </p>
          <div className={styles.sidebarCenter}>
            <p>A Robert Wise Production</p>
            <p>Presented by Mirisch Pictures, Inc.</p>
            <p>
              In Association with Seven Arts Productions, Inc. Released
            </p>
          </div>
          <Image
            src="/images/hollywood10/holwod23.jpg"
            alt="United Artists Logo"
            width={225}
            height={113}
            className={styles.sidebarLogo}
            unoptimized
          />
        </aside>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
