import type { Metadata } from "next";
import { BoustrNavChrome } from "@/components/BoustrNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Bourbon Street — nywf64.com",
  description:
    "Bourbon Street entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bourbon Street Information Manual page — “manual” standard.
 * Body from legacy boustr02.html. Layout: InformationManualPage (/bell02).
 */
export default function Boustr02Page() {
  return (
    <InformationManualPage
      heroLabel="Bourbon Street"
      titleId="boustr02-title"
      hero={{
        src: "/images/boustroverview/hero-banner.jpg",
        alt: "Bourbon Street at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<BoustrNavChrome />}
      previousHref="/boustr01"
      overviewHref="/boustr01"
      nextHref="/boustr03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Bourbon Street"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. James Smith, Manager",
            "Bourbon Street",
            "New York World's Fair",
            "World's Fair, New York 11380",
            "AR 1-1550",
            "and",
            "Pavilion Property, Inc.",
            "c/o Uttal, Miller and Dubin",
            "521 Fifth Avenue",
            "New York, New York  10036",
            "MU 2-8622",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Michael Pender"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["June 11, 1964"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 42; Lot 3", "Avenue of the States", "States Area"],
        },
        {
          label: "AREA",
          lines: ["123,078 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: ["Saputo and Rowe", "New Orleans, Louisiana"],
        },
        {
          label: "NEW EXTERIOR DESIGN",
          lines: ["George Jenkins", "New York, New York"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Kapilow - Missile Construction Co.", "Mineola, New York"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/boustr02/line-drawing.jpg",
        width: 600,
        height: 366,
        alt: "Bourbon Street line drawing",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              <span className={manualStyles.u}>Jazzland</span> features
              well-known names in the jazz world on a daily basis. Moderate
              prices. Food and souvenirs are available.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Danceland</span> features dancing
              and other &quot;night club&quot; entertainment at night. Special
              shows are offered in the afternoon. Name dance bands and
              celebrities appear regularly.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Louisiana Market</span> is a
              group of 30 booths offering amusement, food, beer and soft drinks.
              Sidewalk dining is available.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Col. Morley&apos;s Cafe</span> is
              a moderate priced cafeteria restaurant. Beer is served and
              souvenirs and film are for sale.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Abbercciamento</span> is an
              Italian restaurant serving wine and liquor. Dining facilities for
              up to 1,000 people are available and catering is a speciality.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>The Bistro</span> is a popular
              corner bar and club for dancing. Afternoon jazz sessions and
              evening rock &apos;n roll groups are features.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>The Balcony</span> is a small
              night club featuring jazz musicians.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>
                The Chicken and Steak House
              </span>{" "}
              has table and counter service at very low prices.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>The Beer Garden</span> features a
              5 piece band. Beer and food are served in this outdoor restaurant.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>The Vieux Carre</span> is a
              series of booths which includes a waffle stand and a kiosk from
              which entertainment is offered daily.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Cafe Creole</span> was designed
              by{" "}
              <span className={manualStyles.u}>Dorthy Draper Associates</span>{" "}
              and features creole dishes as well as mint juleps and other
              typical New Orleans drinks.
            </>
          ),
        },
        {
          body: <>Artists and glass-blowers can also be seen on Bourbon Street.</>,
        },
      ]}
      secondaryFigure={{
        src: "/images/boustr02/produced-photo.jpg",
        width: 600,
        height: 359,
        alt: "Bourbon Street",
        bordered: true,
        title: "Bourbon Street",
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
