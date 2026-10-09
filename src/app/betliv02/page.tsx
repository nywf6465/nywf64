import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Better Living Center — nywf64.com",
  description:
    "Better Living Center entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center Information Manual page — “manual” standard.
 * Body from legacy betliv02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (Shick, “selections form”, “schedule daily”) is preserved.
 */
export default function Betliv02Page() {
  return (
    <InformationManualPage
      heroLabel="Better Living Center"
      titleId="betliv02-title"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      previousHref="/betliv01"
      overviewHref="/betlivoverview"
      nextHref="/betliv03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Better Living Center"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Edward H. Burdick, President",
            "Edward H. Burdick Assocs., Inc.",
            "104 East 40th Street",
            "New York 16, New York",
            "TN 7-3180",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Jerome Gillman",
            "Robert S. Taplinger Assocs.",
            "415 Madison Avenue",
            "New York 17, New York",
            "PL 2-7722",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 9, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 12; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["81,876 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "John Lo Pinto Assocs.",
            "50 East 42nd Street",
            "New York 17, New York",
            "YU 6-2915",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thompson-Starrett", "Construction Company"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/betliv02/line-drawing.jpg",
        width: 600,
        height: 241,
        alt: "Better Living Center Line Drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Better Living Center is a showcase for companies whose
              products and services contribute to a better and fuller life in
              six major areas: fashion, food, health, home, family security and
              leisure.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The Better Living Center is the largest multiple-exhibitor
              pavilion at the Fair. It is an 80-foot high hexagon-shaped
              structure enclosing a quarter million square feet of
              air-conditioned space, making it the largest exhibit building in
              the Fair&apos;s Industrial section. A major identifying feature
              of the building is the glass-clad observation-elevator tower
              adjacent to the structure. Two high-speed glass elevators take
              visitors to the rooftop, giving them a panoramic view of the
              entire Fair grounds from the 16-sided regular polygon glass
              tower. The unique &quot;from top down&quot; traffic flow assures
              each exhibitor maximum exposure. One-way escalators and the two
              glass elevators provide access to the top floor.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              <span className={manualStyles.u}>Women&apos;s Headquarters</span>
              : The official center of all women&apos;s activities at the Fair
              is located on the penthouse floor of the pavilion. The Women&apos;s
              Advisory Council has its headquarters and hospitality center here.
              The interior design was executed by William H. Pahlmann in the
              style of colonial Williamsburg.
            </>
          ),
        },
        {
          body: (
            <>
              Also located on the rooftop is the{" "}
              <span className={manualStyles.u}>International Cafe</span>{" "}
              operated by the Hilton Hotels Corporation, serving the most
              unusual dishes of all the countries in which Hilton International
              operates. Hilton chefs are brought to the Fair to supervise the
              preparation of their ethnic specialties. The{" "}
              <span className={manualStyles.u}>Marco Polo Club</span> also
              operated by Hilton, is the private club for Better Living Center
              exhibitors and their guests. Its decor duplicates that of the
              famous Marco Polo Club at the Waldorf-Astoria.
            </>
          ),
        },
        {
          body: (
            <>
              Adjacent to both the Women&apos;s Headquarters and the
              International Cafe is an{" "}
              <span className={manualStyles.u}>art gallery</span> devoted to
              American art. In addition, selections form the collection of
              Vincent Price are placed at various points throughout the Better
              Living Center. In conjunction with the exhibits, a series of art
              lectures is scheduled.
            </>
          ),
        },
        {
          body: (
            <>
              Located on the second floor, the{" "}
              <span className={manualStyles.u}>Crystal Palace of Fashion</span>{" "}
              is a major fashion presentation facility at the Fair. This
              showcase schedule daily fashion shows for the entire run of the
              Fair. The first show, beginning on the Fair&apos;s Opening Day and
              to run for 30 days, is presented by Lord &amp; Taylor. Subsequent
              shows are to be staged by editors of such leading publications as{" "}
              <span className={manualStyles.u}>Glamour</span>,{" "}
              <span className={manualStyles.u}>Seventeen</span>,{" "}
              <span className={manualStyles.u}>Look</span>,{" "}
              <span className={manualStyles.u}>Mademoiselle</span>,{" "}
              <span className={manualStyles.u}>Good Housekeeping</span> and{" "}
              <span className={manualStyles.u}>Harper&apos;s Bazaar</span>. The
              stage of the Crystal Palace is a series of elevated platforms
              suspended over a reflecting pool. Rising in amphitheater fashion
              from stage level is a series of 43 exhibit kiosks where wearing
              apparel, accessories and cosmetics are shown.
            </>
          ),
        },
        {
          body: (
            <>
              The main feature of the Center is a fully-furnished, seven-room
              home designed and decorated by{" "}
              <span className={manualStyles.u}>Dorothy Draper</span>. The
              $55,000 home features appliances, fabrics and materials that will
              soon become generally available. Some of the upholstery, drapery
              and flooring materials have been specifically designed for the
              Dream Home.
            </>
          ),
        },
        {
          body: (
            <>
              The{" "}
              <span className={manualStyles.u}>
                Gallery of Better Living Kitchens
              </span>{" "}
              is a group of 8 kitchens, varying in style from traditional to
              contemporary, reflecting the latest trends in kitchen design and
              layout.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>
                &quot;Food from Farm to Table&quot;
              </span>{" "}
              is the theme of a group of exhibits depicting products and
              services of food manufacturers and processors, arranged to
              simulate a supermarket. The core of the exhibit is a 40-foot
              glass-walled truck trailer containing a 90-day supply of food for
              an average American family.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Radio Station WTFM</span>, the
              only full-time FM stereo station in the New York metropolitan
              area, has its World&apos;s Fair studios located in the Better
              Living Center.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Shick</span> presents a
              panoramic history of shaving, featuring some of the unusual
              implements men have used through the ages to remove their
              whiskers. Included is a facsimile of one of the first razors
              known, made from obsidian, a volcanic glass which dates back
              nearly 5,000 years.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>
                The National Industries for the Blind
              </span>{" "}
              has four separate exhibit areas, occupying 500 square feet. The
              visitors first view an illuminated map showing the key cities
              throughout the nation where workshops are located. A visitor may
              push a button, pick up an earphone and listen to a description of
              the workshop and agency facilities available in the selected area.
              The visitor moves on to view an enclosed work area where blind
              workers will demonstrate their skills. The workers are visible at
              first, slowly fade to absolute blackness and brighten again -- to
              simulate visual handicaps. The next area displays the range of
              Skilcraft products and provides a place for distribution of order
              forms.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>
                &quot;All About Elsie&quot;
              </span>{" "}
              is a musical revue, repeated each quarter hour, starring Elsie the
              Cow -- with songs, dance and dialogue by a supporting cast of
              electronically controlled and animated characters. The revue is
              produced by Alfred Stern with the script written by Joel Oliansky.
              The music and lyrics were composed by Kay Swift.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/betliv02/produced-photo.jpg",
        width: 600,
        height: 359,
        alt: "Better Living Center",
        bordered: true,
        title: "Better Living Center",
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
