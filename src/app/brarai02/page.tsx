import type { Metadata } from "next";
import { BraraiNavChrome } from "@/components/BraraiNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";
import styles from "./brarai02.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Brass Rail — nywf64.com",
  description:
    "Brass Rail Food Services entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

type SiteRow = {
  blockLabel?: string;
  block: string;
  note?: string;
  sqft: string;
};

function AreaTable({
  title,
  rows,
  footnote,
}: {
  title: string;
  rows: SiteRow[];
  footnote?: string;
}) {
  return (
    <div className={styles.areaBlock}>
      <p className={styles.areaTitle}>{title}</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Location</th>
            <th></th>
            <th></th>
            <th className={styles.sqft}>Square Feet</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.block}-${index}`}>
              <td>{index === 0 ? (row.blockLabel ?? "Block") : ""}</td>
              <td>{row.block}</td>
              <td>{row.note ?? ""}</td>
              <td className={styles.sqft}>{row.sqft}</td>
            </tr>
          ))}
          {footnote ? (
            <tr className={styles.noteRow}>
              <td></td>
              <td></td>
              <td>{footnote}</td>
              <td></td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Brass Rail Information Manual page — “manual” standard.
 * Body from legacy brarai02.html. Layout: InformationManualPage (/bell02).
 * After FEATURES: location tables (legacy “page 2”) then 1965 manual photo.
 */
export default function Brarai02Page() {
  return (
    <InformationManualPage
      heroLabel="Brass Rail"
      titleId="brarai02-title"
      hero={{
        src: "/images/braraioverview/hero-banner.jpg",
        alt: "Brass Rail at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<BraraiNavChrome />}
      previousHref="/brarai01"
      overviewHref="/brarai01"
      nextHref="/brarai03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Refreshment Complexes"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Jerome A. Johnson, President",
            "Mr. Robert A. Rabbino, Vice-President",
            "Brass Rail Food Service Organization",
            "120-20 Rosevelt Avenue",
            "World's Fair, New York  11380",
            "888-7000",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Robert Cohen"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 10, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["See Page 2"],
        },
        {
          label: "AREA",
          lines: ["See Page 2"],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Victor A. Lundy",
            "6 East 65th Street",
            "New York 21, New York",
            "YU 8-8993",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["William L. Crow Construction"],
        },
      ]}
      primaryFigure={{
        src: "/images/brarai02/line-drawing.jpg",
        width: 600,
        height: 476,
        alt: "Brass Rail refreshment complex line drawing",
      }}
      features={[
        {
          body: (
            <>
              The Brass Rail has{" "}
              <span className={manualStyles.u}>
                25 Refreshment and Souvenir Centers
              </span>{" "}
              and <span className={manualStyles.u}>6 major restaurants</span>{" "}
              throughout the Industrial, International, Transporation, Federal
              and State and Lake Areas of the Fair. The refreshment centers
              provide food and beverages, an outdoor eating area, a souvenir
              stand, public telephones and pubic comfort stations. Five of these
              stands have{" "}
              <span className={manualStyles.u}>first aid stations</span>. Three
              stands have adjoining picnic areas: one in the Transportation
              area, one in the area of State Pavilions and one in the Industrial
              area.
            </>
          ),
        },
        {
          body: (
            <>
              The 6 restaurants include: The Danish Garden Restaurant, Brass Rail
              Sandwich Garden, Brass Rail Sandwich Garden*, Brass Rail Italian
              Garden*, Brass Rail Steak House*, and Brass Rail Pan American
              Garden*.
            </>
          ),
        },
        {
          body: (
            <>
              All restaurants offer self-service hot delicatessen sandwiches and
              the latter two, in addition, offer table service steak dinners.
            </>
          ),
        },
        {
          body: <>* have bars</>,
        },
      ]}
      afterFeatures={
        <>
          <hr className={manualStyles.rule} />
          <AreaTable
            title="INDUSTRIAL AREA"
            rows={[
              { block: "5", sqft: "10,892" },
              { block: "11", note: "First aid station", sqft: "12,071" },
              { block: "15", sqft: "10,117" },
              { block: "16", sqft: "10,000" },
              { block: "16", sqft: "10,483" },
              { block: "18", sqft: "10,148" },
              { block: "19", note: "Picnic Area", sqft: "10,165" },
              {
                block: "19",
                note: "Brass Rail Pan American Garden* 888-6260",
                sqft: "19,553",
              },
            ]}
          />
          <AreaTable
            title="INTERNATIONAL AREA"
            rows={[
              { block: "21", sqft: "11,344" },
              {
                block: "21",
                note: "Brass Rail Sandwich Garden* 888-8770 First aid",
                sqft: "9,120",
              },
              { block: "22", sqft: "10,058" },
              { block: "23", sqft: "10,176" },
              {
                block: "23",
                note: "The Danish Garden Restaurant 888-5660",
                sqft: "13,417",
              },
              { block: "24", sqft: "10,000" },
              { block: "28", sqft: "8,850" },
              { block: "30", sqft: "9,453" },
              { block: "32", sqft: "8,499" },
              { block: "33", sqft: "10,828" },
            ]}
          />
          <AreaTable
            title="STATE AREA"
            rows={[
              { block: "35C", sqft: "10,120" },
              { block: "39", note: "Picnic Area", sqft: "10,000" },
              { block: "45", note: "First aid station", sqft: "10,912" },
              {
                block: "45",
                note: "Brass Rail Steak House* 888-6250",
                sqft: "21,897",
              },
            ]}
          />
          <AreaTable
            title="TRANSPORTATION AREA"
            rows={[
              { block: "47", note: "Picnic Area", sqft: "7,845" },
              { block: "49", sqft: "9,307" },
              {
                block: "49",
                note: "Brass Rail Italian Garden* 888-5670",
                sqft: "6,000",
              },
              { block: "50", sqft: "11,150" },
              { block: "50", sqft: "11,352" },
              {
                block: "50",
                note: "Brass Rail Sandwich Garden 888-4670 First aid",
                sqft: "8,620",
              },
              { block: "51", sqft: "10,780" },
            ]}
          />
          <AreaTable
            title="LAKE AREA"
            rows={[
              { block: "57", note: "First aid station", sqft: "13,169" },
              { block: "57", sqft: "10,000" },
            ]}
            footnote="* have bars"
          />
        </>
      }
      secondaryFigure={{
        src: "/images/brarai02/manual-photo.jpg",
        width: 600,
        height: 756,
        alt: "Brass Rail refreshment stand",
        bordered: true,
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
    />
  );
}
