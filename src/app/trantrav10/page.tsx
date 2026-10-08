import type { Metadata } from "next";
import Image from "next/image";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import featureStyles from "./trantrav10.module.css";

export const metadata: Metadata = {
  title: "United Air Lines — Transportation & Travel — nywf64.com",
  description:
    "United Air Lines exhibit at the Transportation & Travel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

const TILES_1964 = [
  "tratra92.1.jpg",
  "tratra92.2.jpg",
  "tratra92.3.jpg",
  "tratra92.4.jpg",
  "tratra92.5.jpg",
  "tratra92.6.jpg",
].map((name, i) => ({
  src: `/images/trantrav10/${name}`,
  width: 300,
  height: i < 2 ? 331 : 330,
  alt: `United Air Lines advertisement panel ${i + 1}`,
}));

const TILES_1965 = [
  "tratra93.1.jpg",
  "tratra93.2.jpg",
  "tratra93.3.jpg",
  "tratra93.4.jpg",
  "tratra93.5.jpg",
  "tratra93.6.jpg",
].map((name, i) => ({
  src: `/images/trantrav10/${name}`,
  width: 300,
  height: i < 2 ? 331 : 330,
  alt: `United Air Lines 1965 advertisement panel ${i + 1}`,
}));

/**
 * United Air Lines — legacy trantrav10.html.
 * Collages via AdvertisingPage; exhibit article and photos in `content`.
 */
export default function Trantrav10Page() {
  return (
    <AdvertisingPage
      heroLabel="Transportation & Travel"
      titleId="trantrav10-title"
      title="United Air Lines"
      hero={{
        src: "/images/trantravoverview/hero-banner.jpg",
        alt: "Transportation & Travel at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TrantravNavChrome />}
      previousHref="/trantrav09"
      overviewHref="/trantravoverview"
      nextHref="/trantrav11"
      collages={[
        {
          columns: 2,
          tiles: TILES_1964,
          sources: [
            <>
              Source: Advertisement{" "}
              <em>
                1964 Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
        {
          columns: 2,
          tiles: TILES_1965,
          sources: [
            <>
              Source: Advertisement 1965{" "}
              <em>
                Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
      ]}
      featureDivider
      content={
        <div className={featureStyles.exhibit}>
          <div className={featureStyles.articleHead}>
            <div>
              <p className={featureStyles.showTitle}>
                <em>United Shows</em>
              </p>
              <p className={featureStyles.showTitle}>
                <em>&quot;From Here to There&quot;</em>
              </p>
            </div>
            <Image
              src="/images/trantrav10/tratra14.jpg"
              alt="Projector"
              width={200}
              height={182}
              className={featureStyles.headImg}
              unoptimized
            />
          </div>
          <div className={featureStyles.threeCol}>
            <p>
              <span className={featureStyles.dropCap}>V</span>ISITORS to the
              United Air Lines Exhibit in the Travel and Transportation Pavilion
              are ushered into a plush, compact little red and blue theater where
              the Saul Bass&apos; film production, <em>From Here to There</em>, is
              shown by a special Reevesound motion picture projection system.
            </p>
            <p>
              The system includes a 35mm Simplex XL projector equipped with a
              Strong Arc X-16 light source and single-track Ampex magnetic sound
              reproducer, a 50 watt Fairchild power amplifier and a 27 amp Strong
              Arc Rectifier.
            </p>
            <p>
              The 35mm film uses the big Cinemascope image to relate the story of a
              United jet enroute from Los Angeles, soaring cross-country and
              arriving at an East Coast destination. The film begins in
              narrow-image format which gradually enlarges to the full wide-image
              dimension as the plane takes off from the Pacific Coast.
            </p>
            <p>
              This transition from narrow to wide-image is an effect printed onto
              the film. It is accomplished by control tones, carried by the single
              sound track, which trigger curtains
            </p>
            <p>
              at either side of the screen, causing them to move out as the plane
              ascends. Accurate timing permits the expanding screen image to
              precede by one second the opening of the traveling curtain, thus
              providing a continuous clean picture edge.
            </p>
            <p>
              As the story nears its conclusion and the filmed image of the United
              plane begins its descent, the curtains begin to close, retuning the
              screen again to narrow-image format. As this action takes place, the
              printed image follows the curtain by approximately one second to
              maintain the clean picture edge.
            </p>
          </div>

          <div className={featureStyles.photoPair}>
            <figure>
              <p className={featureStyles.photoCaption}>
                <em>
                  All popular Fair exhibits have their waiting lines. This one is
                  seen at the entrance to United Air Line&apos;s{" "}
                </em>
                188<em>-seat Jetarama film theater.</em>
              </p>
              <Image
                src="/images/trantrav10/tratra12.jpg"
                alt="Theater Entrance"
                width={300}
                height={210}
                className={featureStyles.framed}
                unoptimized
              />
            </figure>
            <figure>
              <p className={featureStyles.photoCaption}>
                <em>
                  Comfortable theater seats provide a restful pause within the
                  United theater, just before a showing of Saul Bass&apos;
                  &quot;From Here to There.&quot;
                </em>
              </p>
              <Image
                src="/images/trantrav10/tratra13.jpg"
                alt="Theater"
                width={300}
                height={206}
                className={featureStyles.framed}
                unoptimized
              />
            </figure>
          </div>
          <p className={featureStyles.source}>
            Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
            Collection
          </p>

          <div className={featureStyles.floatBlock}>
            <Image
              src="/images/trantrav10/tratra61.jpg"
              alt=""
              width={400}
              height={270}
              className={featureStyles.floatImg}
              unoptimized
            />
            <p className={featureStyles.label}>
              <strong>United&apos;s Exhibit in T&amp;T</strong>
            </p>
          </div>
          <p className={featureStyles.sourceCenter}>
            Photo presented courtesy Mike Kraus Collection
          </p>
          <hr className={featureStyles.hr} />

          <div className={featureStyles.floatBlock}>
            <Image
              src="/images/trantrav10/tratra02.jpg"
              alt="Theater entrance"
              width={350}
              height={238}
              className={featureStyles.floatImg}
              unoptimized
            />
            <p className={featureStyles.label}>
              <strong>
                Entrance to United&apos;s <em>Jetarama</em> Theater
              </strong>
            </p>
          </div>
          <div className={featureStyles.floatBlock}>
            <Image
              src="/images/trantrav10/tratra03.jpg"
              alt="United exhibit area"
              width={350}
              height={234}
              className={featureStyles.floatImg}
              unoptimized
            />
            <p className={featureStyles.label}>
              <strong>
                United Air Lines display in the T&amp;T Pavilion. Note the cutaway
                model of a United <em>Jet Mainliner</em> in the display case!
              </strong>
            </p>
          </div>
          <p className={featureStyles.sourceCenter}>
            Photos presented courtesy Bradd Schiffman Collection
          </p>
          <p className={featureStyles.source}>
            Source: &quot;United Airlines Presents&quot; Promotional Slide Show
          </p>
          <hr className={featureStyles.hr} />

          <div className={featureStyles.floatBlock}>
            <Image
              src="/images/trantrav10/tratra86.jpg"
              alt="1965 View of Theatre Entrance"
              width={400}
              height={268}
              className={featureStyles.floatImg}
              unoptimized
            />
            <p className={featureStyles.label}>
              <strong>The Theatre Entrance in 1965</strong>
            </p>
          </div>
          <p className={featureStyles.sourceCenter}>
            Photo presented courtesy Bill Cotter Collection
          </p>
        </div>
      }
    />
  );
}
