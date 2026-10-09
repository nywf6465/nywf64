import type { Metadata } from "next";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — China — nywf64.com",
  description:
    "Republic of China pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China Information Manual page — “manual” standard.
 * Body from legacy china02.html. Layout: InformationManualPage (/bell02).
 */
export default function China02Page() {
  return (
    <InformationManualPage
      heroLabel="China"
      titleId="china02-title"
      hero={{
        src: "/images/chinaoverview/hero-banner.jpg",
        alt: "China at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<ChinaNavChrome />}
      previousHref="/china01"
      overviewHref="/chinaoverview"
      nextHref="/china03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Chinese Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "The Hon. Kien Wen Yu, Consul General",
            "Consulate General of the Republic of China",
            "30 Rockefeller Plaza",
            "New York 20, New York",
            "CI 6-3403",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 21, 1961"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thatcher Construction Co., Inc."],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 30; Lot 5", "International Area"],
        },
        {
          label: "AREA",
          lines: ["24,529 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Chao Chen Yang & Assoc",
            "13, Lane 20, Jen-I Street",
            "Yung Ho Chen",
            "Taipei Hsien, Taiwan",
            "Republic of China",
            "and",
            "Mr. Paul K. Y. Chen",
            "343 Lexington Avenue",
            "New York 16, N. Y.",
            "MU 5-0066",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/china02/line-drawing.jpg",
        width: 600,
        height: 261,
        alt: "Chinese Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              A pavilion with a &quot;Traditional Chinese&quot; architectural
              motif was deliberately selected to portray Chinese culture. It will
              rise four stories to a height of 78 feet. The ground floor will
              contain a general exhibit hall and gift shop and the second floor
              will be laid out as a series of multi-purpose meeting rooms. The
              core of the pavilion will be the third floor, where special
              exhibits will display precious jadeware, paintings, tapestries and
              sculpture. The building&apos;s fourth floor will be utilized for
              office and storage.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/china02/produced-photo.jpg",
        width: 600,
        height: 369,
        alt: "Republic of China",
        bordered: true,
        title: "Republic of China",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
