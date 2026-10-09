import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "South Pacific — Hollywood — nywf64.com",
  description:
    "South Pacific souvenir program spread — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

export default function Hollywood12Page() {
  return (
    <HollywoodLegacyTopicPage
      title="South Pacific"
      titleId="hollywood12-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood11"
      nextHref="/hollywood13"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood12/holwod12.jpg"
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
            src="/images/hollywood12/holwod26.jpg"
            alt="South Pacific Scene"
            width={675}
            height={1217}
            className={styles.sceneMainArt}
            unoptimized
          />
        </div>
        <aside className={styles.sidebar}>
          <Image
            src="/images/hollywood12/holwod27.jpg"
            alt="South Pacific"
            width={225}
            height={82}
            className={styles.sidebarLogo}
            unoptimized
          />
          <p>
            One of the greatest Broadway hits of all time, the Rogers and
            Hammerstein musical, <i>South Pacific</i>, recaptured magical moments
            in spectacular settings which thousands of GIs discovered during the
            island warfare against Japan. Whether for stark drama, historical
            reality, or escapist whimsy, Hollywood U.S.A. rules its own domain.
            Four shiploads of properties transformed the Hawaiian island of Kauai
            into the location for <i>South Pacific</i>. Nothing was left undone to
            achieve authenticity. For example: More than 100 cocoa trees were
            replanted near the beach for the Bali H&apos;ai sequence; 300 plastic
            plams were actually manufactured in Holllywood and shipped to the
            tropical island -- just to be sure it looked authentic!
          </p>
          <div className={styles.sidebarCenter}>
            <p>A&nbsp;MAGNA&nbsp;PRODUCTION</p>
            <p>
              <i>Released by</i>
            </p>
            <p>20TH&nbsp;CENTURY&nbsp;FOX</p>
          </div>
          <Image
            src="/images/hollywood12/holwod15.jpg"
            alt="20th Century Fox Logo"
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
