import type { Metadata } from "next";
import Image from "next/image";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WESHOU08_BLOCKS } from "./contentBlocks";
import { renderLegacyBlocks } from "../weshou/renderLegacyBlocks";
import shared from "../weshou/weshouArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Story of the Westinghouse Time Capsule — Westinghouse — nywf64.com",
  description:
    "The Story of the Westinghouse Time Capsule — Westinghouse at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Weshou08Page() {
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

      <article className={shared.article} aria-labelledby="weshou08-title">
        <header className={shared.titleBar}>
          <h1 id="weshou08-title" className={shared.titleBarMain}>
            The Story of the Westinghouse Time Capsule
          </h1>
        </header>

        <div className={`${shared.articleInner} ${shared.serifBody}`}>
          {renderLegacyBlocks(WESHOU08_BLOCKS)}
        </div>
      </article>

      <Nav2Bar
        previousHref="/weshou07"
        overviewHref="/weshouoverview"
        nextHref="/weshou09"
      />
    </>
  );
}
