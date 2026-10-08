import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import legacy from "@/styles/travelersLegacyPage.module.css";
import panels from "@/styles/travelersImageBrochure.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Article: Signs of Progress — Travelers Insurance — nywf64.com",
  description:
    "Article: Signs of Progress — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const IMG = "/images/travelers17";

/** Scan grids matching legacy travelers17.html (including duplicate cells). */
const GRIDS: string[][] = [
  [
    "trvlrs92.01.jpg",
    "trvlrs92.02.jpg",
    "trvlrs92.03.jpg",
    "trvlrs92.04.jpg",
    "trvlrs92.05.jpg",
    "trvlrs92.06.jpg",
    "trvlrs92.07.jpg",
    "trvlrs92.08.jpg",
    "trvlrs92.09.jpg",
    "trvlrs92.10.jpg",
    "trvlrs92.11.jpg",
    "trvlrs92.12.jpg",
  ],
  [
    "trvlrs93.01.jpg",
    "trvlrs93.02.jpg",
    "trvlrs93.03.jpg",
    "trvlrs93.04.jpg",
    "trvlrs93.05.jpg",
    "trvlrs93.06.jpg",
    "trvlrs93.07.jpg",
    "trvlrs93.08.jpg",
    "trvlrs93.09.jpg",
    "trvlrs93.10.jpg",
    "trvlrs93.11.jpg",
    "trvlrs93.12.jpg",
  ],
  [
    "trvlrs94.03.jpg",
    "trvlrs94.03.jpg",
    "trvlrs94.03.jpg",
    "trvlrs94.04.jpg",
    "trvlrs94.05.jpg",
    "trvlrs94.06.jpg",
    "trvlrs94.07.jpg",
    "trvlrs94.08.jpg",
    "trvlrs94.09.jpg",
    "trvlrs94.10.jpg",
    "trvlrs94.11.jpg",
    "trvlrs94.12.jpg",
  ],
  [
    "trvlrs95.01.jpg",
    "trvlrs95.02.jpg",
    "trvlrs95.03.jpg",
    "trvlrs95.01.jpg",
    "trvlrs95.05.jpg",
    "trvlrs95.06.jpg",
    "trvlrs95.01.jpg",
    "trvlrs95.08.jpg",
    "trvlrs95.09.jpg",
    "trvlrs95.01.jpg",
    "trvlrs95.11.jpg",
    "trvlrs95.12.jpg",
  ],
  [
    "trvlrs96.01.jpg",
    "trvlrs96.02.jpg",
    "trvlrs96.03.jpg",
    "trvlrs96.04.jpg",
    "trvlrs96.05.jpg",
    "trvlrs96.03.jpg",
    "trvlrs96.07.jpg",
    "trvlrs96.08.jpg",
    "trvlrs96.03.jpg",
    "trvlrs96.10.jpg",
    "trvlrs96.11.jpg",
    "trvlrs96.03.jpg",
  ],
  [
    "trvlrs97.01.jpg",
    "trvlrs97.02.jpg",
    "trvlrs97.03.jpg",
    "trvlrs97.01.jpg",
    "trvlrs97.05.jpg",
    "trvlrs97.06.jpg",
    "trvlrs97.01.jpg",
    "trvlrs97.08.jpg",
    "trvlrs97.09.jpg",
    "trvlrs97.01.jpg",
    "trvlrs97.11.jpg",
    "trvlrs97.12.jpg",
  ],
  [
    "trvlrs98.01.jpg",
    "trvlrs98.02.jpg",
    "trvlrs98.03.jpg",
    "trvlrs98.04.jpg",
    "trvlrs98.05.jpg",
    "trvlrs98.06.jpg",
    "trvlrs98.07.jpg",
    "trvlrs98.08.jpg",
    "trvlrs98.09.jpg",
    "trvlrs98.10.jpg",
    "trvlrs98.11.jpg",
    "trvlrs98.12.jpg",
  ],
];

function ScanCell({ file }: { file: string }) {
  const tall = file.includes(".04.") || file.includes(".05.") || file.includes(".06.");
  return (
    <Image
      src={`${IMG}/${file}`}
      alt=""
      width={300}
      height={tall ? 264 : 263}
      className={panels.panelImg}
      unoptimized
    />
  );
}

/** Travelers — Article: Signs of Progress (3×N scan grids). */
export default function Travelers17Page() {
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

      <article className={legacy.article} aria-labelledby="travelers17-title">
        <header className={legacy.titleBar}>
          <h1 id="travelers17-title" className={legacy.titleBarMain}>
            Article: Signs of Progress
          </h1>
        </header>

        <div className={legacy.articleInner}>
          <div className={panels.stack}>
            {GRIDS.map((grid, gi) => (
              <div key={gi}>
                <div className={panels.panel} style={{ maxWidth: 900 }}>
                  <div className={panels.row3}>
                    {grid.map((file, fi) => (
                      <ScanCell key={`${gi}-${fi}-${file}`} file={file} />
                    ))}
                  </div>
                </div>
                {gi === GRIDS.length - 1 ? (
                  <p className={panels.panelCaption}>
                    SOURCE: <em>The Columbus [Ohio] Dispatch Magazine - </em>
                    October 30, 1966
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers16"
        overviewHref="/travelersoverview"
        nextHref="/travelers18"
      />
    </>
  );
}
