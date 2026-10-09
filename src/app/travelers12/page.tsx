import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import legacy from "@/styles/travelersLegacyPage.module.css";
import panels from "@/styles/travelersImageBrochure.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    'Brochure: "The Triumph of Man" at the COSI Columbus, Ohio — Travelers Insurance — nywf64.com',
  description:
    'Brochure: "The Triumph of Man" at the COSI Columbus — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.',
};

const IMG = "/images/travelers12";

function PanelImg({
  src,
  w,
  h,
}: {
  src: string;
  w: number;
  h: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={w}
      height={h}
      className={panels.panelImg}
      unoptimized
    />
  );
}

function ColStack({ prefix }: { prefix: string }) {
  return (
    <div className={panels.panel} style={{ maxWidth: 350 }}>
      <div className={panels.colStack}>
        <PanelImg src={`${IMG}/${prefix}.01.jpg`} w={350} h={318} />
        <PanelImg src={`${IMG}/${prefix}.02.jpg`} w={350} h={318} />
      </div>
    </div>
  );
}

/** Travelers — COSI Columbus brochure (trvlrs102–105). */
export default function Travelers12Page() {
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

      <article className={legacy.article} aria-labelledby="travelers12-title">
        <header className={legacy.titleBar}>
          <h1 id="travelers12-title" className={legacy.titleBarMain}>
            Brochure: &quot;The Triumph of Man&quot; at the COSI Columbus, Ohio
          </h1>
        </header>

        <div className={legacy.articleInner}>
          <div className={panels.stack}>
            <ColStack prefix="trvlrs102" />

            <div className={panels.dualRow}>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs103" />
              </div>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs104" />
              </div>
            </div>

            <div>
              <ColStack prefix="trvlrs105" />
              <p className={panels.panelCaption}>
                SOURCE: Brochure:{" "}
                <em>The Triumph of Man at the COSI Columbus, OH</em>
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers11"
        overviewHref="/travelersoverview"
        nextHref="/travelers13"
      />
    </>
  );
}
