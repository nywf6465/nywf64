import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — World of Food — nywf64.com",
  description:
    "World of Food pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

const SUB_EXHIBITORS = [
  "Adolph's International Restaurant",
  "Albert Barsion",
  "American Sugar Company",
  "Angostura-Wupperman Corp.",
  "Atalanta Trading",
  "Anker Cash Register",
  "The Automatic Canteen Company of America",
  "B&M Beans",
  "Beckley-Haltom-Hickman Service Corp.",
  "Brooklyn Union Gas",
  "Chain Store Age",
  "The Cheese Shop of Connecticut",
  "City Island Ice",
  "Claxton Bakery",
  "Conex Divison of Illinois Tool Works",
  "Dairylea",
  "Data Patterns",
  "Duffy-Mott Co., Inc.",
  "Engineering Controls",
  "Flavo-Rite Foods Inc.",
  "Fortune Enterprises",
  "Gift-O-Rama",
  "Heide Candy",
  "Hershey Chocolate",
  "Hickory Farms",
  "Ideal Electric & Manufacturing Co.",
  "King Korn Stamp Co.",
  "Knox Gelatine",
  "Lea & Perrins, Inc.",
  "Libby-Owens Glass",
  "Thomas J. Lipton Company, Inc.",
  "London Specialty Co.",
  "Miller Brewing Co.",
  "Minimarkets",
  "Morton Salt Company",
  "Mushroom Council",
  "Pepsi-Cola Company",
  "Quality Bakers of America",
  "Reese Candy",
  "Reiter Beer",
  "Roman Products",
  "Ruston Hornsby Ltd.",
  "Salton, Inc.",
  "Stanley Kernel Fresh Popcorn",
  "The Taylor Provisions Company",
  "Takni-Craft inc.",
  "Trunz Inc.",
  "U.S. Nutrition Products",
  "Whirlpool Corporation",
  "Wise Potato Chips",
  "The York Co.",
  "Trade Associations: SMI, NAFC, NARGUS, CFPA, NAWGA",
] as const;

/**
 * World of Food Information Manual page.
 * Body from legacy worfoo02.html. Layout: InformationManualPage (/bell02).
 */
export default function Worfoo02Page() {
  return (
    <InformationManualPage
      heroLabel="World of Food"
      titleId="worfoo02-title"
      hero={{
        src: "/images/worfoooverview/hero-banner.jpg",
        alt: "World of Food pavilion site at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WorfooNavChrome />}
      previousHref="/worfoo01"
      overviewHref="/worfoooverview"
      nextHref="/worfoo03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["World of Food Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Paul C. Virdone, Vice President",
            "The World of Food, Inc.",
            "49 West 37th Street",
            "New York 18, New York",
            "LW 4-2500",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Joseph Connolly",
            "The J. V. Connolly Co.",
            "521 Fifth Avenue",
            "New York 17, New York",
            "MU 7-5490",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 29, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 15; Lot 5", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["50,066 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Lionel K. Levy",
            "158 East 35th Street",
            "New York 16, New York",
            "OR 9-0260",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Charles Miesmer, Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/worfoo02/wof19.jpg",
        width: 600,
        height: 348,
        alt: "World of Food Pavilion",
      }}
      features={[
        {
          body: (
            <>
              The theme of the World of Food Pavilion is &quot;Garden to
              Gourmet&quot;.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The three and a half story pavilion is located at the main entrance
              to the Fair. The sparkling white exterior will be decorated with
              colorful mosaic panels. The landscaping will be highlighted by rare
              fruit trees and spice plants.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The first floor and the first floor mezzanine will feature food
              exhibits, kitchen exhibits (the RCA Whirlpool &quot;Miracle
              Kitchen&quot;-the electronic ultimate in the push-button field aimed
              to reduce kitchen work to a minimum), and Adolph&apos;s International
              Steak House seating 500 persons. There will also be a replica of
              Hershey Town of Pennsylvania.
            </>
          ),
        },
        {
          body: (
            <>
              In the &quot;Americana Area&quot;, the American Sugar Refining Co.
              will tell the story of sugar as a quick-energy food and a food for
              fun and good taste. Miller Brewing Co. will trace the history of
              beer from early Americana (home brewing) to the use of beer in
              recipes. There will be a New England fishing village replica with a
              &quot;foods afloat&quot; section in which the sea&apos;s products will
              be displayed along with a model houseboat which will feature the
              latest contributions in nautical gallery equipment.
            </>
          ),
        },
        {
          body: (
            <>
              A teen center will be located on the first floor mezzanine. Here the
              World of Food plans to feature cook-outs and guest appearances of
              recording stars.
            </>
          ),
        },
        {
          body: (
            <>
              The second floor and the second floor mezzanine will have a wine
              tasting bar, exhibits of foods, beverages, fruits and seafood. There
              will be a supermarket which will display exhibitors&apos; products. In
              this market, there will be a booth where the woman of the house can
              press buttons and receive menu suggestions for any meal. Actual
              slaes will be made by using completely new electronic merchandising
              display and selection techniques. The purchases will be delivered
              electrically to the check-out counter. Other assigned areas will
              feature unusual frozen foods (instant heat and eat), a gourmet shop
              managed by Hickory Farms of Ohio, and an International Brauhaus and
              Biergarten.
            </>
          ),
        },
        {
          body: (
            <>
              On the third floor there will be a canteen, delicatessen, health and
              diet exhibits.
            </>
          ),
        },
        {
          body: (
            <>
              The roof terrace will feature a fully equipped auditorium (TV,
              radio) and exhibits of outdoor camping and picnicking. There will be
              an &quot;edible garden&quot; where foods will be growing, fostered by
              louvered panels which will be synchronized with the sun to
              approximate a tropical climate for the foods that will grow only
              under these conditions.
            </>
          ),
        },
        {
          body: (
            <>
              Numerous special events demonstrations and seminars on food, its
              uses, and food products of the future will be held daily under the
              direction of the World of Food Editorial Advisory Board.
            </>
          ),
        },
      ]}
      afterFeatures={
        <div>
          <p className={manualStyles.featuresHeading}>
            WORLD OF FOOD
            <br />
            (SUB-EXHIBITORS)
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>8.30.63</span>
          </p>
          <p className={manualStyles.featuresSource}>
            SOURCE: 1964 World&apos;s Fair Information Manual
          </p>
          <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.25rem" }}>
            {SUB_EXHIBITORS.map((name) => (
              <li key={name} className={manualStyles.feature}>
                <span className={manualStyles.featureBody}>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}
