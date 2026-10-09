import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "Visit the General Store — Hollywood — nywf64.com",
  description:
    "Visit the General Store — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Hollywood15Page() {
  return (
    <HollywoodLegacyTopicPage
      title="Visit the General Store"
      titleId="hollywood15-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood14"
      nextHref="/hollywoodoverview"
    >
      <div className={styles.storeFrame}>
        <div className={styles.storeBar} />
        <div className={styles.storeInner}>
          <Image
            src="/images/hollywood15/holwod37.jpg"
            alt="Banner1"
            width={570}
            height={34}
            className={styles.bannerArt}
            unoptimized
          />
        </div>
        <div className={styles.storeBar} />
        <div className={styles.storeInner}>
          <Image
            src="/images/hollywood15/holwod38.jpg"
            alt="Banner 2"
            width={600}
            height={73}
            className={styles.bannerArt}
            unoptimized
          />
        </div>
      </div>
      <Image
        src="/images/hollywood15/holwod36.jpg"
        alt=""
        width={600}
        height={638}
        className={styles.bannerArt}
        unoptimized
      />
    </HollywoodLegacyTopicPage>
  );
}
