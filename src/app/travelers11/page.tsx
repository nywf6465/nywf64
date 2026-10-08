import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import legacy from "@/styles/travelersLegacyPage.module.css";
import panels from "@/styles/travelersImageBrochure.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Your Guide to the Fair — Travelers Insurance — nywf64.com",
  description:
    "Brochure: Your Guide to the Fair — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const IMG = "/images/travelers11";

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

function ColStack({ prefix, count }: { prefix: string; count: number }) {
  return (
    <div className={panels.panel} style={{ maxWidth: 350 }}>
      <div className={panels.colStack}>
        {Array.from({ length: count }, (_, i) => (
          <PanelImg
            key={i}
            src={`${IMG}/${prefix}.${String(i + 1).padStart(2, "0")}.jpg`}
            w={350}
            h={i === 1 && prefix === "tra02" ? 210 : 209}
          />
        ))}
      </div>
    </div>
  );
}

function Grid2xN({ prefix, rows }: { prefix: string; rows: number }) {
  const cells = rows * 2;
  return (
    <div className={panels.panel} style={{ maxWidth: 700 }}>
      <div className={panels.row2}>
        {Array.from({ length: cells }, (_, i) => (
          <PanelImg
            key={i}
            src={`${IMG}/${prefix}.${String(i + 1).padStart(2, "0")}.jpg`}
            w={350}
            h={209}
          />
        ))}
      </div>
    </div>
  );
}

/** Travelers — Brochure: Your Guide to the Fair (tra01–04 panels). */
export default function Travelers11Page() {
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

      <article className={legacy.article} aria-labelledby="travelers11-title">
        <header className={legacy.titleBar}>
          <h1 id="travelers11-title" className={legacy.titleBarMain}>
            Brochure: Your Guide to the Fair
          </h1>
        </header>

        <div className={legacy.articleInner}>
          <div className={panels.stack}>
            <ColStack prefix="tra01" count={4} />
            <Grid2xN prefix="tra03" rows={4} />
            <Grid2xN prefix="tra04" rows={4} />
            <div>
              <ColStack prefix="tra02" count={4} />
              <p className={panels.panelCaption}>
                SOURCE: Brochure: <em>Your Guide to the Fair</em>
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers10"
        overviewHref="/travelersoverview"
        nextHref="/travelers12"
      />
    </>
  );
}
