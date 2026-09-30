import type { Metadata } from "next";
import Image from "next/image";
import { DawsonHero } from "@/components/DawsonHero";
import { DawsonNavChrome } from "@/components/DawsonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../dawsonEssay.module.css";

export const metadata: Metadata = {
  title: "Meet Greg Dawson — nywf64.com",
  description:
    "Introduction to Greg Dawson, Director of Public Relations for the 1964/1965 New York World’s Fair Corporation — from nywf64.com.",
};

/**
 * Greg Dawson page stack (modeled on rm01 / fisher01):
 * site header → hero → Dawson nav → intro body → nav2 → site footer
 *
 * Body from legacy dawson01.html.
 */
export default function Dawson01Page() {
  return (
    <>
      <DawsonHero />

      <DawsonNavChrome />

      <article className={styles.article} aria-labelledby="dawson01-title">
        <header className={styles.titleBar}>
          <h1 id="dawson01-title" className={styles.titleBarMain}>
            Introduction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.introRow}>
            <Image
              src="/images/dawson/dawson01.jpg"
              alt="Greg Dawson"
              width={150}
              height={183}
              className={styles.portrait}
              unoptimized
            />
            <p className={styles.introCopy}>
              Meet Greg Dawson,{" "}
              <strong>Director of Public Relations</strong> for the New York
              World&apos;s Fair 1964/1965 Corporation.{" "}
              <span className={styles.brand}>
                <span className={styles.brandNy}>nywf</span>
                <span className={styles.brandWf}>64</span>
                <span className={styles.brandCom}>.com</span>
              </span>{" "}
              is honored to present an interview with one of the men who sold
              the Fair to the World. This interview was completed in 2002.
            </p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/rm03"
        explicitPrevious
        nextHref="/dawson02"
        hideOverview
      />
    </>
  );
}
