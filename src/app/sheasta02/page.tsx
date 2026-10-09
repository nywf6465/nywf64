import type { Metadata } from "next";
import { SheastaNavChrome } from "@/components/SheastaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Shea Stadium — nywf64.com",
  description:
    "Shea Stadium entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Shea Stadium Information Manual page — “manual” standard.
 * Body from legacy sheasta02.html. Layout: InformationManualPage (/bell02).
 */
export default function Sheasta02Page() {
  return (
    <InformationManualPage
      heroLabel="Shea Stadium"
      titleId="sheasta02-title"
      hero={{
        src: "/images/sheastaoverview/hero-banner.jpg",
        alt: "Shea Stadium at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SheastaNavChrome />}
      previousHref="/sheasta01"
      overviewHref="/sheastaoverview"
      nextHref="/sheasta03"
      factsLeft={[
        {
          label: "ATTRACTION",
          lines: ["Shea Stadium"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Thomas Meany",
            "New York Mets",
            "680 Fifth Avenue",
            "New York 19, New York",
            "LT 1-2300",
            "and",
            "Mr. William J. Tooley",
            "Stadium Director",
            "New York City Department of Parks",
            "64th Street and 5th Avenue",
            "New York 21, New York",
            "RE 4-1000",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Adams"],
        },
        {
          label: "TICKET OFFICES",
          lines: [
            "N. Y. Mets",
            "Shea Stadium",
            "126th Street & Roosevelt Ave.",
            "Flushing, New York, 11368",
            "NR 2-3000",
            "N. Y. Jets",
            "Ticket Office-N. Y. Jets",
            "660 Madison Avenue",
            "New York, New York",
            "TE 2-9200",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "At Grand Central Parkway and",
            "Roosevelt Avenue, between",
            "126th and 114th Streets",
          ],
        },
        {
          label: "AREA",
          lines: ["63.5 acres"],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Praeger, Kavanaugh and Waterbury",
            "126 East 38th Street",
            "New York 16, New York",
            "MU 5-5850",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Carlin-Crimmins"],
        },
      ]}
      primaryFigure={{
        src: "/images/sheasta02/shea15.jpg",
        width: 600,
        height: 394,
        alt: "Shea Stadium",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The William A. Shea Stadium, scheduled to open April 17, 1964 is
              the home of the National League New York baseball team, the
              &quot;Mets&quot; and the American Football League team the
              &quot;Jets&quot;.
            </>
          ),
        },
        {
          body: (
            <>
              The stadium seats 55,000 for baseball and 60,000 for football, and
              can be enlarged by 25,000 more seats in the future, without
              disturbance of the initial construction, and a retractable cover
              can be added.
            </>
          ),
        },
        {
          body: (
            <>
              The stadium is surrounded by a 35 acre parking field, which
              accommodates 5,500 cars. Immediately adjacent is the Willets Point
              Boulevard station of the Flushing IRT subway lines. A short
              distance further is the Long Island Rail Road, and parkways and
              expressways provide easy access by automobile.
            </>
          ),
        },
        {
          body: (
            <>
              When not in use by the ball teams, the Fair Corporation may use
              the stadium for special events, sport attractions, etc.
            </>
          ),
        },
      ]}
    />
  );
}
