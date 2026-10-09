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
    "Brochure: The Travelers at the New York World's Fair — Travelers Insurance — nywf64.com",
  description:
    "Brochure: The Travelers at the New York World's Fair — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const IMG = "/images/travelers10";

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

function ColStack({
  prefix,
  count,
  w = 350,
  h = 209,
}: {
  prefix: string;
  count: number;
  w?: number;
  h?: number;
}) {
  return (
    <div className={panels.panel} style={{ maxWidth: w }}>
      <div className={panels.colStack}>
        {Array.from({ length: count }, (_, i) => (
          <PanelImg
            key={i}
            src={`${IMG}/${prefix}.${String(i + 1).padStart(2, "0")}.jpg`}
            w={w}
            h={h}
          />
        ))}
      </div>
    </div>
  );
}

function Grid2xN({
  prefix,
  rows,
  w = 350,
  h = 209,
}: {
  prefix: string;
  rows: number;
  w?: number;
  h?: number;
}) {
  const cells = rows * 2;
  return (
    <div className={panels.panel} style={{ maxWidth: w * 2 }}>
      <div className={panels.row2}>
        {Array.from({ length: cells }, (_, i) => (
          <PanelImg
            key={i}
            src={`${IMG}/${prefix}.${String(i + 1).padStart(2, "0")}.jpg`}
            w={w}
            h={h}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Travelers — brochure scan grids (legacy travelers10.html).
 * Preserves trvlrs85 divider between panel groups.
 */
export default function Travelers10Page() {
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

      <article className={legacy.article} aria-labelledby="travelers10-title">
        <header className={legacy.titleBar}>
          <h1 id="travelers10-title" className={legacy.titleBarMain}>
            Brochure: The Travelers at the New York World&apos;s Fair
          </h1>
        </header>

        <div className={legacy.articleInner}>
          <div className={panels.stack}>
            <ColStack prefix="trvlrs81" count={4} />

            <Grid2xN prefix="trvlrs82" rows={4} />

            <Image
              src={`${IMG}/trvlrs85.jpg`}
              alt=""
              width={750}
              height={47}
              className={panels.divider}
              unoptimized
            />

            <div className={panels.dualRow}>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs83" count={4} />
              </div>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs84" count={4} />
              </div>
            </div>

            <div className={panels.dualRow}>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs86" count={4} />
              </div>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs87" count={4} />
              </div>
            </div>

            <div className={panels.dualRow}>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs88" count={4} />
              </div>
              <div className={panels.dualCol}>
                <ColStack prefix="trvlrs89" count={4} />
              </div>
            </div>

            <Grid2xN prefix="trvlrs90" rows={4} />

            <div>
              <ColStack prefix="trvlrs91" count={4} />
              <p className={panels.panelCaption}>
                SOURCE: Brochure:{" "}
                <em>The Travelers at the New York World&apos;s Fair</em>
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers09"
        overviewHref="/travelersoverview"
        nextHref="/travelers11"
      />
    </>
  );
}
