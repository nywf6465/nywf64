import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import legacy from "@/styles/travelersLegacyPage.module.css";
import panels from "@/styles/travelersImageBrochure.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: You're Invited — Travelers Insurance — nywf64.com",
  description:
    "Brochure: You're Invited — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const IMG = "/images/travelers09";

function PanelImg({
  src,
  w,
  h,
  alt = "",
}: {
  src: string;
  w: number;
  h: number;
  alt?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={panels.panelImg}
      unoptimized
    />
  );
}

/**
 * Travelers — Brochure: You're Invited (image panels).
 * Body from legacy travelers09.html.
 */
export default function Travelers09Page() {
  return (
    <>
      <section className={legacy.hero} aria-label="Travelers Insurance Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/travelersoverview/hero-banner.jpg"
            alt="Travelers Insurance Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TravelersNavChrome />

      <article className={legacy.article} aria-labelledby="travelers09-title">
        <header className={legacy.titleBar}>
          <h1 id="travelers09-title" className={legacy.titleBarMain}>
            Brochure: You&apos;re Invited
          </h1>
        </header>

        <div className={legacy.articleInner}>
          <div className={panels.stack}>
            <div className={panels.panel} style={{ maxWidth: 500 }}>
              <div className={panels.row2}>
                <PanelImg src={`${IMG}/trvlrs99.01.jpg`} w={250} h={283} />
                <PanelImg src={`${IMG}/trvlrs99.02.jpg`} w={250} h={283} />
              </div>
            </div>

            <div className={panels.panel} style={{ maxWidth: 500 }}>
              <div className={panels.row2}>
                <PanelImg src={`${IMG}/trvlrs100.01.jpg`} w={250} h={290} />
                <PanelImg src={`${IMG}/trvlrs100.02.jpg`} w={250} h={290} />
                <PanelImg src={`${IMG}/trvlrs100.03.jpg`} w={250} h={290} />
                <PanelImg src={`${IMG}/trvlrs100.04.jpg`} w={250} h={290} />
              </div>
            </div>

            <div>
              <div className={panels.panel} style={{ maxWidth: 500 }}>
                <div className={panels.row2}>
                  <PanelImg src={`${IMG}/trvlrs101.01.jpg`} w={250} h={283} />
                  <PanelImg src={`${IMG}/trvlrs101.02.jpg`} w={250} h={283} />
                </div>
              </div>
              <p className={panels.panelCaption}>
                SOURCE: Brochure: <em>You&apos;re Invited to Visit the Travelers Exhibit</em>
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers08"
        overviewHref="/travelersoverview"
        nextHref="/travelers10"
      />
    </>
  );
}
