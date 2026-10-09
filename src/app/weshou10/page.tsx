import type { Metadata } from "next";
import Image from "next/image";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WESHOU10_BLOCKS } from "./contentBlocks";
import { renderLegacyBlocks } from "../weshou/renderLegacyBlocks";
import shared from "../weshou/weshouArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Contents of the 1938 Time Capsule — Westinghouse — nywf64.com",
  description:
    "Complete list of contents of the 1938 Westinghouse Time Capsule — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Weshou10Page() {
  return (
    <>
      <section className={shared.hero} aria-label="Westinghouse">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/weshouoverview/hero-banner.jpg"
            alt="Westinghouse pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WeshouNavChrome />

      <article className={shared.article} aria-labelledby="weshou10-title">
        <header className={shared.titleBar}>
          <h1 id="weshou10-title" className={shared.titleBarMain}>
            The Contents of the 1938 Time Capsule
          </h1>
        </header>

        <div className={`${shared.articleInner} ${shared.wideInner}`}>
          {renderLegacyBlocks(WESHOU10_BLOCKS)}
        </div>
      </article>

      <Nav2Bar
        previousHref="/weshou09"
        overviewHref="/weshouoverview"
        nextHref="/weshou11"
      />
    </>
  );
}
