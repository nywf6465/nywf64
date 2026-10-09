import type { Metadata } from "next";
import { SocmobilNavChrome } from "@/components/SocmobilNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Socony Mobil — nywf64.com",
  description:
    "Socony Mobil pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Socony Mobil Information Manual page — “manual” standard.
 * Body from legacy socmobil02.html. Layout: InformationManualPage (/bell02).
 */
export default function Socmobil02Page() {
  return (
    <InformationManualPage
      heroLabel="Socony Mobil"
      titleId="socmobil02-title"
      hero={{
        src: "/images/socmobiloverview/hero-banner.jpg",
        alt: "Socony Mobil pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SocmobilNavChrome />}
      previousHref="/socmobil01"
      overviewHref="/socmobiloverview"
      nextHref="/socmobil03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Socony Mobil Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Messrs. Frank Meunier and Ray Burton",
            "Socony Mobil Oil Company, Inc.",
            "150 East 42nd Street",
            "New York 17, N. Y.",
            "OX 7-4200",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["July 23, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 50; Lot 20", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["20,988 Sq. Ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Peter Schadermundt",
            "205 East 42nd Street",
            "New York 17, N. Y.",
            "MU 3-3802",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Wm. Crow Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/socmobil02/socmobil02.jpg",
        width: 600,
        height: 353,
        alt: "Socony Mobil Exhibit",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The &quot;driver game&quot; exhibit is an expanded version of
              Socony Mobil&apos;s highly successful exhibit in the Seattle Fair,
              where it proved to be one of the most popular audience
              participation displays.
            </>
          ),
        },
        {
          body: (
            <>
              In this pavilion, 36 participants will &quot;ride&quot; in the
              driver&apos;s seat of an automobile and work the steering wheel,
              accelerator and brake according to their reactions to a motion
              picture of situations which occurred in the famous Mobil Economy
              Run. The &quot;driver&apos;s&quot; reactions will be evaluated, and
              an automatic data processing machine will indicate the gasolien
              mileage he would have gotten had he actually driven in that
              particular trial of automative efficiency. When a &quot;driver&quot;
              operates with &quot;correct&quot; reactions, he maintains a perfect
              score and, when he deviates from this optimum condition, penalities
              are automatically recorded. A huge scoreboard will light up at the
              end of each &quot;game&quot; to show the drivers the gasoline
              mileage they scored. This makes the &quot;game&quot; both
              interesting to play and fascinating to observe as a spectator.
            </>
          ),
        },
      ]}
    />
  );
}
