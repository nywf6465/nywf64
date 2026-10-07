import type { Metadata } from "next";
import Image from "next/image";
import { IntplaNavChrome } from "@/components/IntplaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — International Plaza — nywf64.com",
  description:
    "International Plaza entries from the 1964 and 1965 World's Fair Information Manuals — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * International Plaza Information Manual — 1964 + 1965 entries.
 * Body from legacy intpla02.html. Layout: InformationManualPage (/bell02)
 * with 1965 block in afterFeatures. Legacy typos preserved
 * (routlette, caonquest, puurchased, availalbe, pominent).
 */
export default function Intpla02Page() {
  return (
    <InformationManualPage
      heroLabel="International Plaza"
      titleId="intpla02-title"
      hero={{
        src: "/images/intplaoverview/hero-banner.jpg",
        alt: "International Plaza at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IntplaNavChrome />}
      previousHref="/intpla01"
      overviewHref="/intplaoverview"
      nextHref="/intpla03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["International Plaza"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Martin O'Toole, Vice President",
            "International City, Incorporated",
            "30 Rockefeller Plaza",
            "New York 20, New York",
            "CO 5-7262",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Gates Davison"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 5, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 33; Lot 30", "International Area"],
        },
        {
          label: "AREA",
          lines: ["79,777 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Ira Kessler and Associates",
            "25 West 43rd Street",
            "New York 36, New York",
            "WI\u00a07-0787",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Hegeman-Harris Co., Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/intpla02/intpla04.jpg",
        width: 600,
        height: 314,
        alt: "International Plaza",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The International Plaza consists of a series of pavilions for
              foreign countries, companies and international organizations. The
              Plaza features a 300 seat International Restaurant where epicurean
              delights from around the world are served.
            </>
          ),
        },
        {
          body: (
            <>
              International City, has signed contracts for the following
              exhibits: Artisans of Italy, Arts of Ecuador, B.F.E. of Belgium,
              Philippine Handicrafts, Brazil, Luxembourg, a Mediterranean Center,
              Italian Art, Monte Carlo, the Government of India, Sarna India
              Handicrafts, the West German Pavilion, Hummel Figurines, Nepal,
              Yugoslavia, and the Hall of Free Enterprise.
            </>
          ),
        },
        {
          body: (
            <>
              The West German exhibit is operated by Gabriel & Hewitt of
              Seattle, Washington, an importing firm representing more than 300
              major German companies. On display are the production quality and
              technological advances which are responsible for West Germany&apos;s
              position of prominence in world trade today.
            </>
          ),
        },
        {
          body: (
            <>
              The famous casino of Monte Carlo with its routlette wheels,
              spinning out gifts to visitors represents the celebrated resort,
              Monaco.
            </>
          ),
        },
        {
          body: (
            <>
              The far-away land of Nepal presents its native arts and vividly
              portrays man&apos;s caonquest of the Himalayas.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={manualStyles.rule} />
          <p className={manualStyles.featuresHeading}>1965</p>
          <div className={manualStyles.facts}>
            <div aria-label="1965 exhibit facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>EXHIBIT</p>
                <ul className={manualStyles.factLines}>
                  <li>International Plaza</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AUTHORIZED REPRESENTATIVE</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Irving Goldman, President</li>
                  <li>International City, Incorporated</li>
                  <li>30 Rockefeller Plaza</li>
                  <li>New York 20, New York</li>
                  <li>CO 5-7262</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>FAIR CONTACT</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Douglas Beaton</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACT SIGNED</p>
                <ul className={manualStyles.factLines}>
                  <li>January 5, 1963</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ADMISSION</p>
                <ul className={manualStyles.factLines}>
                  <li>Free</li>
                </ul>
              </div>
            </div>
            <div aria-label="1965 site and construction facts">
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>LOCATION</p>
                <ul className={manualStyles.factLines}>
                  <li>Block 33; Lot 30</li>
                  <li>Avenue of the United Nations</li>
                  <li>International Area</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AREA</p>
                <ul className={manualStyles.factLines}>
                  <li>79,777 sq. ft.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ARCHITECT</p>
                <ul className={manualStyles.factLines}>
                  <li>Ira Kessler and Associates</li>
                  <li>25 West 43rd Street</li>
                  <li>New York 36, New York</li>
                  <li>WI{"\u00a0"}7-0787</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACTOR</p>
                <ul className={manualStyles.factLines}>
                  <li>Hegeman-Harris Co., Inc.</li>
                </ul>
              </div>
            </div>
          </div>

          <figure className={manualStyles.figure}>
            <Image
              src="/images/intpla02/intpla03.jpg"
              alt="International Plaza"
              width={600}
              height={190}
              className={manualStyles.figureArt}
              unoptimized
            />
            <figcaption className={manualStyles.figureCaption}>
              <p className={manualStyles.figureSource}>
                SOURCE: 1965 World&apos;s Fair Information Manual
              </p>
            </figcaption>
          </figure>

          <p className={manualStyles.featuresHeading}>FEATURES</p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The International Plaza is the only multi-nation exhibit at the
              Fair. Here exhibitors from many countries have displays promoting
              trade and tourism. Featured in this complex of buildings are the
              following:
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>
              International Garden Restaurant
            </span>
            {": "}
            <span className={manualStyles.featureBody}>
              an outdoor self-service facility offering food and drink from
              around-the-world.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Hall of Free Enterprise</span>
            {": "}
            <span className={manualStyles.featureBody}>
              an educational exhibit pavilion sponsored by the American Economic
              Foundation to inform Fair visitors concerning the basic principles
              of free enterprise business methods and their benefits to world
              trade and unity.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Ecuador</span>
            {": "}
            <span className={manualStyles.featureBody}>
              the products of this country may be admired and puurchased at this
              exhibit. Visitors can sample banana concoctions for which this
              country is famous.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Luxembourg</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Wines, cheeses, pastries and onion soup of this country will
              delight the visitor to this cottage-style exhibit.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Monte Carlo</span>
            {": "}
            <span className={manualStyles.featureBody}>
              This resort which is famous for its casino, its scenery and its
              social grandeur, displays the winning car from the Grand Prix de
              Monaco to publicize the most dangerous auto race in the world.
              Perfumes and souvenirs of the principality are available.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Hummel</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Exceptional display of the famous Bavarian ceramic figurines that
              are famous throughout the world. Unusual pieces are introduced at
              the Fair in this exhibit.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>India</span>
            {": "}
            <span className={manualStyles.featureBody}>
              The ancient arts of wood and ivory carving are featured as well as
              examples of brass wares, carpets, jewels and art works. The Bells
              of Sarna are displayed to give visitors a preview of the first
              bell museum that will be opened at Sarasota, Florida, in 1966.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>German Pavilion</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Products of over 300 West German manufacturers are displayed to
              show Fair visitors the workmanship and technical excellence that
              has sparked the industrial boom in Germany. Honer music
              instruments, Schuco and Koehler toys, Alta porcelain, Sammit
              leather goods, Hanhardt watches and Patrician House perfumes are
              displayed.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>International Art Center</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Modern paintings are prepared and sold in this area.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Philippines</span>
            {": "}
            <span className={manualStyles.featureBody}>
              The tastiest food snacks of the Philippines are served with San
              Miguel beer. Handicraft items made with hemp, sea shells and exotic
              woods are availalbe. Beautiful hand-carved murals on rare wood
              panels are featured displays.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Yugoslavia</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Fine food products and hand-crafted items made of wood, glass,
              leather, silver and wool are featured in this display. Tourist
              information is available to acquaint Fair visitors with the
              increasingly popular resort country.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Brazil</span>
            {": "}
            <span className={manualStyles.featureBody}>
              The world renown firm of H. Stern displays precious stones of
              Brazil that are used in fine jewelry; exhibit pieces valued at over
              $100,000 are featured.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Artisans of Italy</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Gold jewelry and carved wood products representing artisans from
              Florence, Genoa, San Marino, Venice, Milan, Naples, Sicily and the
              Dolomites are featured.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Belgium</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Delicious waffles typical of Belgium are featured at this food
              exhibit.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Formosa</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Straw products such as hats, mats, shoes, handbags are presented in
              oriental fashion. food delicacies of the Genghis Khan era will give
              Fairgoers a new taste in Chinese cooking.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Turkey</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Fabulous treasures of the Middle East including oriental carpets,
              handicrafts, jewelry, water pipes enchant Fair visitors in this
              pavilion.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Brazil Coffee</span>
            {": "}
            <span className={manualStyles.featureBody}>
              The delicate flavor and aroma of coffee from Brazil is captured in
              freshly brewed coffee and ice cream in this quaint Spanish style
              exhibit.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Norway</span>
            {": "}
            <span className={manualStyles.featureBody}>
              This country is represented with a display of fine home
              furnishings, crystal, jewelry, ceramics and other crafts. Film
              scenes of Norway acquaint Fair visitors with this popular tourist
              country. Norwegian dessert foods are also available.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Burma</span>
            {": "}
            <span className={manualStyles.featureBody}>
              The Government of Burma features promotional displays acquainting
              Fair visitors with the tourist and trade potential of this exotic
              country. The world&apos;s finest pearls and oriental arts are also
              pominent exhibits.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Africa</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Crafts from Rhodesia, Kenya and Tanganyika depict the culture of
              Africa.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Mexico</span>
            {": "}
            <span className={manualStyles.featureBody}>
              The land of the Aztec is represented with an array of leather,
              silver, wood carvings and other famous native crafts. An Aztec
              calendar is a featured display.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Colombia</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Food delicacies and handicrafts from the land of Juan Valdez are
              featured. Coffee and mountain brewed beer to quench Fairgoers
              thirst are served.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>United Nations</span>
            {": "}
            <span className={manualStyles.featureBody}>
              The International Exhibit on the United Nations depicts the
              functions of the various organizations associated with the United
              Nations to acquaint Fair visitors with the important humanitarian
              functions of the United Nations.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureLabel}>Artisti di Italia</span>
            {": "}
            <span className={manualStyles.featureBody}>
              Fair visitors may have their portrait painted or sketched by some
              of the finest sketch and portrait artists in the world.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              Other Sub-Exhibitors of the International Plaza:
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              Tower of London
              <br />
              China
              <br />
              Korea
              <br />
              Thailand
              <br />
              Tacomale, Inc.
              <br />
              Tunisia
            </span>
          </p>
        </>
      }
    />
  );
}
