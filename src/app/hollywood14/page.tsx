import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "The Unsinkable Molly Brown — Hollywood — nywf64.com",
  description:
    "The Unsinkable Molly Brown souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood14Page() {
  return (
    <HollywoodLegacyTopicPage
      title="The Unsinkable Molly Brown"
      titleId="hollywood14-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood13"
      nextHref="/hollywood15"
      source={SOUVENIR_SOURCE}
    >
      <div className={`${styles.banner} ${styles.bannerLeft}`}>
        <Image
          src="/images/hollywood14/holwod35.jpg"
          alt=""
          width={850}
          height={209}
          className={styles.bannerArt}
          unoptimized
        />
      </div>
      <div className={styles.splitRow}>
        <div className={styles.sceneMain}>
          <Image
            src="/images/hollywood14/holwod32.jpg"
            alt="Unsinkable Molly Brown Scene"
            width={675}
            height={525}
            className={styles.sceneMainArt}
            unoptimized
          />
        </div>
        <aside className={styles.sidebar}>
          <Image
            src="/images/hollywood14/holwod33.jpg"
            alt="The Unsinkable Molly Brown"
            width={150}
            height={245}
            className={styles.sidebarLogo}
            unoptimized
          />
          <p>
            Fabulous Molly Brown! From opening scene to fade-out, she is the
            irresistible, irrepressible Molly, vividly reliving the fascinating
            Cinderella story of the unschooled Irish-American girl who rose from
            abject poverty in the rough mining camp of Leadville, Colorado, to
            incredible riches. In doing so, Molly became a legend in her time --
            and ours. The film company which made the motion picture{" "}
            <i>The Unsinkable Molly Brown</i> nearly matched her mobility. For it
            did its shooting in the Colorado Rocky Mountains, Europe, and
            Hollywood. Based on the Broadway hit with Meredith Willson&apos;s
            great musical score, <i>Molly Brown</i> was transferred to the screen
            with Debbie Reynolds in the title role and Harve Presnell as Leadville
            Johnny Brown.
          </p>
          <p className={styles.sidebarCenter}>Metro-Goldwyn-Mayer Pictures</p>
          <Image
            src="/images/hollywood14/holwod34.jpg"
            alt="MGM Logo"
            width={225}
            height={141}
            className={styles.sidebarLogo}
            unoptimized
          />
        </aside>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
