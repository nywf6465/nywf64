import type { Metadata } from "next";
import { GarmedNavChrome } from "@/components/GarmedNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import styles from "./garmed02.module.css";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Garden of Meditation — nywf64.com",
  description:
    "Garden of Meditation entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Garden of Meditation Information Manual page — “manual” standard.
 * Body from legacy garmed02.html. Layout: InformationManualPage (/bell02).
 * Preserve legacy typo (sitated).
 */
export default function Garmed02Page() {
  return (
    <InformationManualPage
      heroLabel="Garden of Meditation"
      titleId="garmed02-title"
      hero={{
        src: "/images/garmedoverview/hero-banner.jpg",
        alt: "Garden of Meditation at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GarmedNavChrome />}
      previousHref="/garmed01"
      overviewHref="/garmedoverview"
      nextHref="/garmed03"
      factsLeft={[
        {
          label: "ATTRACTION",
          lines: ["Garden of Meditation"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Stuart Constable",
            "Vice President - Operations",
            "New York World's Fair",
            "1964-1965 Corporation",
            "Flushing Meadow Park",
            "Flushing 52, New York",
            "WF 4-2251",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 26; Lot 5", "International Area"],
        },
        {
          label: "AREA",
          lines: ["78,265 sq. ft."],
        },
        {
          label: "LANDSCAPE ARCHITECT",
          lines: [
            "Clarke & Rapuano",
            "830 Third Avenue",
            "New York 22, New York",
            "PL 4-1030",
          ],
        },
      ]}
      features={[
        {
          body: (
            <>
              The Garden of Meditation will be a place where visitors can rest
              and meditate, each in his own way, and come away feeling better
              because of the quiet moment of personal communication
            </>
          ),
        },
        {
          body: (
            <>
              An oval walk surrounds a lawn area which contains an informal
              pool. There will be benches on one side of the oval which will be
              connected by paths to the border walks of the Fair. Only two
              entrances and exits will be provided so that those who wish to
              walk through the garden may do so along one side of the oval
              opposite the benches and thus not disturb those who wish to sit
              and tarry longer.
            </>
          ),
        },
        {
          body: (
            <>
              The entire area will be screened with pine, birch, pin oaks and
              other major trees in mass, in groups and as single specimens with
              underplantings of laurel, azaleas and other shade tolerant
              material. A variety of lilies will be planted along the borders in
              order to have flowers during the summer.
            </>
          ),
        },
        {
          body: (
            <>
              A granite slab bearing a plaque engraved with a description will
              be placed on a small triangular plot in the path system. This plot
              will also have a large tree on it. Three granite boulders will be
              sitated near the pool, some distance from the path and from the
              triangular plot. The plaque&apos;s inscription will read:
            </>
          ),
        },
      ]}
      afterFeatures={
        <div className={styles.plaque}>
          <p className={styles.plaqueTitle}>THE GARDEN OF MEDITATION</p>
          <div className={styles.plaqueBody}>
            <p>
              The three granite boulders are of metamorphic rock; at one time
              they were a part of the original surface of the earth situated
              many miles north of this place. The great glacier transported them
              to this region millions of years ago. They are placed here to
              testify to the everlasting faith in the CREATOR.
            </p>
            <p>
              The three BIBLE references are timeless words of hope and guidance
              in a troubled world.
            </p>
            <p>
              NUMBERS 6:24,25,26
              <br />
              MICA 6:8
              <br />
              ROMANS 12:10 and 12
            </p>
          </div>
          <p className={styles.closing}>
            The Garden of Meditation will remain as a permanent part of Flushing
            Meadow Park at the end of the Fair.
          </p>
        </div>
      }
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
    />
  );
}
